import React from "react";
import {Link} from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import defaultImage from "../assets/img/back_features.png";
import "react-image-gallery/styles/css/image-gallery.css";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import "../assets/scss/home.scss";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/"
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/"
  }
];

class Home extends React.Component {
    constructor(props) {
        super();
    }
    state = {}
    render() { 
      return (
        <>
          <Header/>
          <div className="page_container">
            <div className="above_dungeon_wrapper"></div>

            <div className="dungeon_wrapper">
              <img className="big_log" src={ require("../assets/img/Logo-1.png") } alt="" />
              <div className="social_icons_wrapper">
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><TwitterIcon className="social_icon"/></a>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><YouTubeIcon className="social_icon"/></a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><InstagramIcon className="social_icon"/></a>
              </div>
              <Bounce left cascade>
                <div className="btnPlayNow">PLAY NOW!</div>
              </Bounce>
            </div>

            <div className="dungeon_btm_shadow_wrapper">
              <Bounce left cascade>
                <div className="description_wrapper">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                </div>
              </Bounce>
              <div className="dungeon_menu_wrapper">
                <Link to="/">Home</Link>
                <Link to="/lore">Lore</Link>
                <Link to="/features">Features</Link>
                <Link to="/play">Play</Link>
              </div>
              <div className="game_lore_bar">
                <img src={ require("../assets/img/Half-gear.png") } alt="" />
                <Rotate top right cascade>
                  <div className="label">Game Lore</div>
                </Rotate>
              </div>
            </div>

            <div className="lore_wrapper">
              <div className="video_lore_container">
                <div className="video_container">
                  <img src={ require("../assets/img/btn_play.png")} alt=""/>
                </div>
                <div className="video_desc">
                  <Bounce right cascade>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                    </p>
                  </Bounce>
                </div>
              </div>
              <div className="photo_lore_container">
              <div className="photo_desc">
                <Bounce left cascade>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u
                  </p>
                </Bounce>
                </div>
                <div className="photo_container">
                  <ImageGallery
                    items={images}
                    defaultImage={defaultImage}
                    showBullets={true}
                    showIndex={true}
                    showThumbnails={false}
                    lazyLoad={true}
                    showPlayButton={false}
                  />
                </div>
              </div>
            </div>

            <div className="lore_bottom_wrapper"></div>

            <div className="features_wrapper">
              <div className="features_bar">
                <img src={ require("../assets/img/Half-gear.png") } alt="" />
                <Rotate top right cascade>
                  <div className="label">Features</div>
                </Rotate>
              </div>
              <div className="feature_container">
                <div className="feature_desc_container">
                  <Fade left>
                    <div className="feature_title">NFTs</div>
                    <div className="feature_desc">On Veil of Time you can have a lot of different NFTs that helps you in-game like different types of swords, essentials which give different skills and power when equiped and a even a character NFT!</div>
                    <div className="feature_more"><ArrowForward/> See more about our NFTs!</div>
                  </Fade>
                </div>
                <div className="feature_nft_container">
                  <Zoom>
                    <img className="water_orb_sword" src={ require("../assets/img/water_orb_sword.png") } alt="" />
                  </Zoom>
                </div>
              </div>
              <div className="feature_container">
                <div className="feature_nft_container">
                  <Zoom><img className="birds" src={ require("../assets/img/birds.png") } alt="" /></Zoom>
                </div>
                <div className="feature_desc_container">
                  <Fade right>
                    <div className="feature_title">Kanaria Birds</div>
                    <div className="feature_desc">In this world you can integrate your Kanaria NFT, transform that formidable bird into pixels and jo</div>
                    <div className="feature_more"><ArrowForward/> See more about our Kanaria!</div>
                  </Fade>
                </div>
              </div>

              <div className="feature_container">
                <div className="feature_desc_container">
                  <Fade left>
                    <div className="feature_title">Card Game</div>
                    <div className="feature_desc">All over Castra citziens plays an old pirate card game called slog. You will be able to play with more than 35 different cards and defeat your oponents.</div>
                    <div className="feature_more"><ArrowForward/> See more about our Card Game!</div>
                  </Fade>
                </div>
                <div className="feature_nft_container">
                  <Zoom>
                    <img className="cards" src={ require("../assets/img/cards.png") } alt="" />
                  </Zoom>
                </div>
              </div>

              <div className="feature_container">
                <div className="feature_nft_container">
                  <Zoom>
                    <img className="snake_girl" src={ require("../assets/img/snake_girl.png") } alt="" />
                  </Zoom>
                </div>
                <div className="feature_desc_container">
                  <Fade right>
                    <div className="feature_title">Battles, quests and more!</div>
                    <div className="feature_desc">With an active sideview battle, you can explore the world, completing quests, discovering treasures and helping people. </div>
                    <div className="feature_more"><ArrowForward/> See more about our Battles!</div>
                  </Fade>
                </div>
              </div>

            </div>

            <div className="play_browser_wrapper">
              {/* <Fade left> */}
              <Bounce left cascade>
                <div>
                  <img className="big_log" src={ require("../assets/img/Half-gear.png") } alt=""/>
                </div>
                <h4 className="title">Play in your browser</h4>
                <div className="desc">
                  <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                  <br/><br/>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim 
                  </p>
                </div>
                <div className="btnPlayNow">
                  PLAY NOW!
                </div>
                <div className="shop_nft_container">
                  <Link to="/shop" className="shop_link">SHOP</Link>
                  <Link to="/nft">NFT's</Link>
                </div>
              {/* </Fade> */}
              </Bounce>
            </div>
          </div>
          <Footer/>
        </>
      );
    }
}
 
export default Home;