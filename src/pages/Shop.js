import React, { useState, useEffect } from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import "../assets/scss/shop.scss";
import ShoModal from '../components/Shop_Modal';

function Shop() {
  const [state, setState] = useState({
    isKanariaMore: false,
    isCharacterMore: false,
    isWeaponMore: false,
    open: false,
    category: 1,
  });

  const { isKanariaMore, isCharacterMore, isWeaponMore, open, category } = state;

  const onGetCategoryData = (e) => {
    const category = e.target.attributes.getNamedItem("name").value;

    if (category === "category_kanaria") {
      setState((prevState) => ({isKanariaMore: !prevState.isKanariaMore, open: true, category: 1}))
    }

    if (category === "category_character") {
      setState((prevState) => ({...prevState, isCharacterMore: !prevState.isCharacterMore, open: true, category: 2}))
    }

    if (category === "category_weapons") {
      setState((prevState) => ({...prevState, isWeaponMore: !prevState.isWeaponMore, open: true, category: 3}))
    }

  }

  const onCloseDlg = () => {
    if (category === 1)
    {
      setState((prevState) => ({...prevState, isKanariaMore: !prevState.isKanariaMore, open: false}))
    }

    if (category === 2)
    {
      setState((prevState) => ({...prevState, isCharacterMore: !prevState.isCharacterMore, open: false}))
    }

    if (category === 3)
    {
      setState((prevState) => ({...prevState, isWeaponMore: !prevState.isWeaponMore, open: false}))
    }

  }

  useEffect(() => {
  }, [])

  return (
    <>
      <Header/>
      <div className="shop_container">
        <div className="shop_banner"><h2>Store</h2></div>
        <div className='shop_desc_wrapper'>
          <div className='desc_item'>
            <p>
            Vel elit scelerisque mauris pellentesque pulvinar. Morbi tristique senectus et netus et malesuada fames ac turpis. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.
            </p>
          </div>
          <div className='desc_item'>
            <p>
              Vel elit scelerisque mauris pellentesque pulvinar. Morbi tristique senectus et netus et malesuada fames ac turpis. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.
            </p>
          </div>
        </div>

        <div className='products_wrapper'>
          {/* Kanaria part start */}
          <div className='category_container'>
            <h6>Kanarias</h6>
            <div className='popular_products'>
              <div className='product_item'>
                <img className="item_photo item_photo_sword" src={ require("../assets/img/Kanaria-1.png") } alt=""/>
                <div className='product_price'>232 KSM</div>
              </div>
              <div className='product_item'>
                <img className="item_photo item_photo_sword" src={ require("../assets/img/Kanaria-1.png") } alt=""/>
                <div className='product_price'>232 KSM</div>
              </div>
              <div className='product_item'>
                <img className="item_photo item_photo_sword" src={ require("../assets/img/Kanaria-1.png") } alt=""/>
                <div className='product_price'>232 KSM</div>
              </div>
            </div>
            <div className='pagination_bar right'>
              {!isKanariaMore ? 
              <div name="category_kanaria" onClick={onGetCategoryData} className='see_more'>See More<ExpandMoreIcon/></div> 
              : 
              <div name="category_kanaria" onClick={onGetCategoryData} className='see_more'>
                See Less<ExpandLessIcon/>
              </div>}
            </div>
          </div>
          {/* Kanaria part end */}

          {/* Character part start */}
          <div className='category_container'>
            <h6>Character</h6>
            <div className='popular_products'>
              <div className='product_item'>
                <img className="item_photo item_photo_sword" src={ require("../assets/img/character.png") } alt=""/>
                <div className='product_price'>232 KSM</div>
              </div>
              <div className='product_item'>
                <img className="item_photo item_photo_sword" src={ require("../assets/img/character.png") } alt=""/>
                <div className='product_price'>232 KSM</div>
              </div>
              <div className='product_item'>
                <img className="item_photo item_photo_sword" src={ require("../assets/img/character.png") } alt=""/>
                <div className='product_price'>232 KSM</div>
              </div>
            </div>
            <div className='pagination_bar right'>
              {!isCharacterMore ? 
              <div name="category_character" onClick={onGetCategoryData} className='see_more'>See More<ExpandMoreIcon/></div> 
              : 
              <div name="category_character" onClick={onGetCategoryData} className='see_more'>
                See Less<ExpandLessIcon/>
              </div>}
            </div>
          </div>
          {/* Character part end */}

          {/* Weapon part start */}                
          <div className='category_container'>
            <h6>Weapons</h6>
            <div className='popular_products'>
              <div className='product_item'>
                <img className="item_photo item_photo_sword" src={ require("../assets/img/Kanaria-1.png") } alt=""/>
                <div className='product_price'>232 KSM</div>
              </div>
              <div className='product_item'>
                <img className="item_photo item_photo_sword" src={ require("../assets/img/Kanaria-1.png") } alt=""/>
                <div className='product_price'>232 KSM</div>
              </div>
              <div className='product_item'>
                <img className="item_photo item_photo_sword" src={ require("../assets/img/Kanaria-1.png") } alt=""/>
                <div className='product_price'>232 KSM</div>
              </div>
            </div>
            <div className='pagination_bar right'>
              {!isWeaponMore ? 
              <div name="category_weapons" onClick={onGetCategoryData} className='see_more'>See More<ExpandMoreIcon/></div> 
              : 
              <div name="category_weapons" onClick={onGetCategoryData} className='see_more'>
                See Less<ExpandLessIcon/>
              </div>}
            </div>
          </div>
          {/* Weapon part end */}
        </div>

      </div>
      <Footer/>
      <ShoModal isOpen={open} category={category} onClick={onCloseDlg}/>
    </>
  );
}

export default Shop;