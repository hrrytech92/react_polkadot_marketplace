/* eslint-disable */
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import { connect } from 'react-redux';
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import WalletModal from '../components/Wallet_Modal';
import { getWalletInfo } from '../store/actions';

import {
  web3Accounts,
  web3Enable,
  web3FromSource,
} from '@polkadot/extension-dapp';
import { stringToHex } from "@polkadot/util";
import { ApiPromise, WsProvider } from '@polkadot/api';
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
    label: "NFT SALE",
    href: "/sales",
  },
  {
    label: "About",
    href: "/about",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#000",
    paddingRight: "40px !important",
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
    paddingRight: "40px !important",
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

function Header(props) {
  const { header, header_scroll, logo, logo_scroll, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen, isScrollDown } = state;

  const [isShowWalletInfo, setShowWalletInfo] = React.useState(false);

  const onHandleWalletInfo = (isShow) => {
    setShowWalletInfo(isShow);
  }

  const onDisconnectWallet = () => {
    props.dispatch(getWalletInfo({isConnected: false, address: '' , balance: 0}));
    setShowWalletInfo(false);
  }

  const onConnectWallet = async () => {
    if (props.wallet_info.isConnected === true) {
      onHandleWalletInfo(true);
    } else {
      const extensions = await web3Enable(AppConstant.appName);

      if (extensions.length === 0) {
          // no extension installed, or the user did not accept the authorization
          // in this case we should inform the use and give a link to the extension
          return;
      }

      // we are now informed that the user has at least one extension and that we
      // will be able to show and use accounts
      const allAccounts = await web3Accounts();

      const activeAccount = allAccounts[0];

      // to be able to retrieve the signer interface from this account
      // we can use web3FromSource which will return an InjectedExtension type
      const injector = await web3FromSource(activeAccount.meta.source);

      // this injector object has a signer and a signRaw method
      // to be able to sign raw bytes
      const signRaw = injector?.signer?.signRaw;

      if (!!signRaw) {
          // after making sure that signRaw is defined
          // we can use it to sign our message
          const { signature } = await signRaw({
              address: activeAccount.address,
              data: stringToHex('message to sign'),
              type: 'bytes'
          });

          const address = activeAccount.address;

          const provider = new WsProvider('wss://kusama-rpc.polkadot.io');
          const api = await ApiPromise.create({ provider });
          const { data: { free: previousFree }, nonce: previousNonce } = await api.query.system.account(address);
          // const test = await api.query.system.account(address);
          // console.log('--------xxxxxxxxxx---------', test);
          const balance = (BigInt(previousFree.toHuman().split(",").join('')) / BigInt(1000000)).toString();
          
          props.dispatch(getWalletInfo({isConnected: true, address , balance}));
        }
    }
  }

  const showFormatWalletAddress = (address) => {
    return address.substring(0, 4) + "..." + address.substring(address.length - 4, address.length);
  }

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

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>
          {getMenuButtons()}
          { props.wallet_info.isConnected && <label className={isScrollDown ? "label_address_select_scroll" : "label_address_select"}>address select</label>}
          <div className="menu_wallet_connect" onClick={onConnectWallet}>
            <div className="menu_wallet"><img className="wallet_icon" src={ require("../assets/img/Wallet-Icon.png") } alt=""/>Connect
            { props.wallet_info.isConnected && <div className="balance">{showFormatWalletAddress(props.wallet_info.address)}</div>}
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
              { props.wallet_info.isConnected && <div className="balance">{showFormatWalletAddress(props.wallet_info.address)}</div>}
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
      const curPath = window.location.pathname;
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
          className={
            (curPath === "/play" &&  label === "Play"? 'active' : '') || 
            (curPath === "/shop" &&  label === "Shop"? 'active' : '') ||
            (curPath === "/sales" &&  label === "NFT SALE"? 'active' : '') ||
            (curPath === "/about" &&  label === "About"? 'active' : '')
          }
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
      const curPath = window.location.pathname;
      return (
        <span key={label}>
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
            className={
              (curPath === "/play" &&  label === "Play"? 'active' : '') || 
              (curPath === "/shop" &&  label === "Shop"? 'active' : '') ||
              (curPath === "/sales" &&  label === "NFT SALE"? 'active' : '') ||
              (curPath === "/about" &&  label === "About"? 'active' : '')
            }
          >
            {label}
          </Button>
        </span>
      );
    });
  };

  return (
    <>
      <AppBar className={isScrollDown ? header_scroll : header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
      <WalletModal isShowWalletInfo={isShowWalletInfo} onHandleWalletInfo={() => onHandleWalletInfo(false)} onDisconnectWallet={() => onDisconnectWallet()}/>
    </>
  );
}

const mapStateToProps = state => {
  return {
    wallet_info: state.getWalletInfo
  };
};
export default connect(mapStateToProps)(Header);