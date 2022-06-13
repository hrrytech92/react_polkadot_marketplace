import {
  AppBar,
  Toolbar,
  // Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  // Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import {
  web3Accounts,
  web3Enable,
  web3FromSource,
} from '@polkadot/extension-dapp';
import { stringToHex } from "@polkadot/util";
import AppConstant from '../config/AppConstant';
import "../assets/scss/header.scss";

const headersData = [
  {
    label: "Play",
    href: "/play",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "NFT",
    href: "/nft",
  },
  {
    label: "About",
    href: "/about",
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#000",
    paddingRight: "40px",
    paddingLeft: "40px",
    paddingTop: "40px",
    paddingBottom: "40px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
    transition: "all 0.1s"
  },
  header_scroll: {
    backgroundColor: "#000",
    paddingRight: "40px",
    paddingLeft: "40px",
    paddingTop: "10px",
    paddingBottom: "10px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
    transition: "all 0.1s"
  },
  logo: {
    width: "300px",
  },
  logo_scroll: {
    width: "180px",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header() {
  const { header, header_scroll, logo, logo_scroll, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
    isConnectWallet: false,
    walletAddress: '',
  });

  const { mobileView, drawerOpen, isConnectWallet, isScrollDown, walletAddress } = state;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open1 = Boolean(anchorEl);
  // const popupMenuClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  
  // const popUpMenuClose = () => {
  //   setAnchorEl(null);
  // };


  const setResponsiveness = () => {
    return window.innerWidth < 900
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false }));
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    return position > 100
      ? setState((prevState) => ({ ...prevState, isScrollDown: true }))
      : setState((prevState) => ({ ...prevState, isScrollDown: false }));
  };

  useEffect(() => {
    setResponsiveness();

    window.addEventListener("resize", setResponsiveness);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", setResponsiveness);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onConnectWallet = async () => {
    if (walletAddress.length === 0) {
      const extensions = await web3Enable(AppConstant.appName);

      if (extensions.length === 0) {
          // no extension installed, or the user did not accept the authorization
          // in this case we should inform the use and give a link to the extension
          return;
      }

      // we are now informed that the user has at least one extension and that we
      // will be able to show and use accounts
      const allAccounts = await web3Accounts();

      const account = allAccounts[0];

      // to be able to retrieve the signer interface from this account
      // we can use web3FromSource which will return an InjectedExtension type
      const injector = await web3FromSource(account.meta.source);

      // this injector object has a signer and a signRaw method
      // to be able to sign raw bytes
      const signRaw = injector?.signer?.signRaw;

      if (!!signRaw) {
          // after making sure that signRaw is defined
          // we can use it to sign our message
          const { signature } = await signRaw({
              address: account.address,
              data: stringToHex('message to sign'),
              type: 'bytes'
          });
          const address = account.address;
          const visibleAddress = address.substring(0, 4) + "..." + address.substring(address.length - 4, address.length);
          setState({walletAddress: visibleAddress});
      }

      setState((prevState) => ({ ...prevState, isConnectWallet: !prevState.isConnectWallet }));
    } else {

    }
  }

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>
          {getMenuButtons()}
          { isConnectWallet && <label className={isScrollDown ? "label_address_select_scroll" : "label_address_select"}>address select</label>}
          <div className="menu_wallet_connect" onClick={onConnectWallet}>
            <div className="menu_wallet"><img className="wallet_icon" src={ require("../assets/img/Wallet-Icon.png") } alt=""/>Connect
            { isConnectWallet && <div className="balance">{walletAddress}</div>}
            </div>
          </div>
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "end",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}
            <div onClick={onConnectWallet}>
              <div className="menu_wallet_connect"><label>Connect</label>
              { isConnectWallet && <div className="balance">$999.00</div>}
              </div>
            </div>
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
          <br/>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    // <Typography variant="h6" component="h1" className={logo}>
    //   Femmecubator
    // </Typography>
    <RouterLink to="/"><img className={isScrollDown ? logo_scroll : logo} src={ require("../assets/img/Logo-2.png") } alt="" /></RouterLink>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <span key={label}>
          {label === "NFT" && 
            <Button className="menu_nft" id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined} onClick={handleClickOpen}>NFT SALE
            </Button>
          }

          {/* {label === "NFT" && 
            <>
              <Button className="menu_nft" onClick={popupMenuClick}>Menu</Button>
              <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open1}
              onClose={popUpMenuClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </>
          } */}

          {label !== "NFT" && 
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton,
              }}
            >
              {label}
            </Button>
          }
        </span>
      );
    });
  };

  return (
    <>
      <AppBar className={isScrollDown ? header_scroll : header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"My NFTs"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}