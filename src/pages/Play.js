import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fade from 'react-reveal/Fade';
import { Button } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CloseIcon from "@material-ui/icons/Close";



// import Header from '../Layout/Header_Sales';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer_Sales';
import "../assets/scss/play.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Play() {
  const [state, setState] = useState({
    isBuyDlg: false,
  });

  const onBtnBuyClick = () => {
    setState({isBuyDlg: true});
  };

  const onCloseBuyDlg = () => {
    setState({isBuyDlg: false});
  };

  const onBuyHandle = () => {
    toast.configure();
    toast.success("Success message", {
      position: "top-right",
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
    setState({isBuyDlg: false});
  };

  const { isBuyDlg } = state;

  return (
    <>
      <Header/>
      <div className="play_container">
        <div className="sales_bar_wrapper">
          <Fade left><h3>Sales</h3></Fade>
          <Fade right><img src={ require("../assets/img/Kanaria-Stars.png") } alt="" /></Fade>
        </div>

        <div className="sales_desc_wrapper">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
          </p>
        </div>

        <div className="nfts_wrapper">
          <div className="nft_item_wrapper">
            <div className="nft_photo_wrapper">
              <img className="item_mark" src={ require("../assets/img/item_top_mark.png") } alt="" />
              <div className="label">Essentia</div>
              <img className="item_photo" src={ require("../assets/img/Vector-Water-Orb.png") } alt=""/>
            </div>
            <div className="nft_cnt_info">
              <div>0/300</div>
              <div>xx KSM</div>
            </div>
            <div className="nft_desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
            </div>
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
            <div className="btn_buy_wrapper">
              <div className="btn_buy" onClick={onBtnBuyClick}>BUY NOW</div>
            </div>
          </div>
          <div className="nft_item_wrapper">
            <div className="nft_photo_wrapper">
              <img className="item_mark" src={ require("../assets/img/item_top_mark.png") } alt="" />
              <div className="label">Sword</div>
              <img className="item_photo item_photo_sword" src={ require("../assets/img/Vector-Sword.png") } alt=""/>
            </div>
            <div className="nft_cnt_info">
              <div>0/800</div>
              <div>xx KSM</div>
            </div>
            <div className="nft_desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
            </div>
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
            <div className="btn_buy_wrapper">
              <div className="btn_buy" onClick={onBtnBuyClick}>BUY NOW</div>
            </div>
          </div>
          <div className="nft_all_wrapper">
            <img className="" src={ require("../assets/img/Logo-1.png") } alt="" />
            <div className="time_wrapper">02 : 15</div>
            <div className="btn_buy_wrapper">
              <div className="btn_buy">BUY BUNDLE</div>
            </div>
          </div>
          <div className="nft_item_wrapper">
            <div className="nft_photo_wrapper">
              <img className="item_mark" src={ require("../assets/img/item_top_mark.png") } alt="" />
              <div className="label">Character</div>
              <img className="item_photo item_photo_character" src={ require("../assets/img/character.png") } alt=""/>
            </div>
            <div className="nft_cnt_info">
              <div>0/1000</div>
              <div>xx KSM</div>
            </div>
            <div className="nft_desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
            </div>
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
            <div className="btn_buy_wrapper">
              <div className="btn_buy" onClick={onBtnBuyClick}>BUY NOW</div>
            </div>
          </div>
          <div className="nft_item_wrapper">
            <div className="nft_photo_wrapper">
              <img className="item_mark" src={ require("../assets/img/item_top_mark.png") } alt="" />
              <div className="label">Kanaria Sprite</div>
              <img className="item_photo item_photo_kanaria" src={ require("../assets/img/Kanaria-1-small.png") } alt=""/>
            </div>
            <div className="nft_cnt_info">
              <div>0/3000</div>
              <div>xx KSM</div>
            </div>
            <div className="nft_desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
            </div>
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
            <div className="btn_buy_wrapper">
              <div className="btn_buy" onClick={onBtnBuyClick}>BUY NOW</div>
            </div>
          </div>
        </div>
        <div className="body_bottom_wrapper"></div>
        <Footer/>
      </div>
      <Dialog
        open={isBuyDlg}
        TransitionComponent={Transition}
        keepMounted
        onClose={onCloseBuyDlg}
        aria-describedby="alert-dialog-slide-description"
        className="dlg_buy"
      >
        <div className="dlg_buy_container">
          <div className="dlg_buy_body">
            <DialogTitle>{"Buy NFT"}<CloseIcon style={{color: "#ff9e20", cursor: "pointer", border:"1px solid #ff9e20"}} onClick={onCloseBuyDlg}/></DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button className="btn_buy" onClick={onBuyHandle}>Buy</Button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Play;