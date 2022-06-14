import React, { useState, useEffect } from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import RightIcon from '@material-ui/icons/ChevronRight';
import LeftIcon from '@material-ui/icons/ChevronLeft';
import Pagination from "material-ui-flat-pagination";

import "../assets/scss/shop.scss";

function Shop() {
  const [state, setState] = useState({
    isKanariaMore: false,
    isCharacterMore: false,
    isWeaponMore: false,
    offset: 0
  });

  const { isKanariaMore, isCharacterMore, isWeaponMore, offset } = state;

  const onGetCategoryData = (e) => {
    const category = e.target.attributes.getNamedItem("name").value;

    if (category === "category_kanaria") {
      setState((prevState) => ({isKanariaMore: !prevState.isKanariaMore}))
    }

    if (category === "category_character") {
      setState((prevState) => ({...prevState, isCharacterMore: !prevState.isCharacterMore}))
    }

    if (category === "category_weapons") {
      setState((prevState) => ({...prevState, isWeaponMore: !prevState.isWeaponMore}))
    }

  }

  const handleClick = (offset, page) => {
    setState((prevState) => ({...prevState, offset}))
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
              Sed nisi lacus sed viverra tellus in. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Lorem sed risus ultricies tristique nulla aliquet. Sit amet aliquam id diam maecenas. Risus in hendrerit gravida rutrum quisque. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Id ornare arcu odio ut sem nulla pharetra diam. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Donec massa sapien faucibus et molestie ac feugiat sed. Facilisi cras fermentum odio eu feugiat. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Nec ultrices dui sapien eget mi proin sed libero enim. Erat imperdiet sed euismod nisi porta lorem. Et molestie ac feugiat sed lectus vestibulum mattis. Et odio pellentesque diam volutpat commodo sed egestas. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Dignissim sodales ut eu sem integer vitae justo.
            </p>
          </div>
          <div className='desc_item'>
            <p>
              Vel elit scelerisque mauris pellentesque pulvinar. Morbi tristique senectus et netus et malesuada fames ac turpis. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Posuere urna nec tincidunt praesent. Blandit massa enim nec dui nunc mattis enim ut. Sit amet nisl suscipit adipiscing bibendum. Pharetra et ultrices neque ornare.  Non diam phasellus vestibulum lorem sed risus. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Convallis a cras semper auctor neque vitae. Dignissim sodales ut eu sem integer vitae justo. Dis parturient montes nascetur ridiculus.
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
            <div className={isKanariaMore ? 'pagination_bar' : 'pagination_bar right'}>
              {!isKanariaMore ? 
              <div name="category_kanaria" onClick={onGetCategoryData} className='see_more'>See More<ExpandMoreIcon/></div> 
              : 
              <>
              <Pagination
                limit={10}
                offset={offset}
                total={100}
                size="large"
                onClick={(e, offset, page) => handleClick(offset, page)}
                nextPageLabel={<RightIcon/>}
                previousPageLabel={<LeftIcon/>}
              />
              <div name="category_kanaria" onClick={onGetCategoryData} className='see_more'>
                See Less<ExpandLessIcon/>
              </div></>}
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
            <div className={isCharacterMore ? 'pagination_bar' : 'pagination_bar right'}>
              {!isCharacterMore ? 
              <div name="category_character" onClick={onGetCategoryData} className='see_more'>See More<ExpandMoreIcon/></div> 
              : 
              <>
              <Pagination
                limit={10}
                offset={offset}
                total={100}
                size="large"
                onClick={(e, offset, page) => handleClick(offset, page)}
                nextPageLabel={<RightIcon/>}
                previousPageLabel={<LeftIcon/>}
              />
              <div name="category_character" onClick={onGetCategoryData} className='see_more'>
                See Less<ExpandLessIcon/>
              </div></>}
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
            <div className={isWeaponMore ? 'pagination_bar' : 'pagination_bar right'}>
              {!isWeaponMore ? 
              <div name="category_weapons" onClick={onGetCategoryData} className='see_more'>See More<ExpandMoreIcon/></div> 
              : 
              <>
              <Pagination
                limit={10}
                offset={offset}
                total={100}
                size="large"
                onClick={(e, offset, page) => handleClick(offset, page)}
                nextPageLabel={<RightIcon/>}
                previousPageLabel={<LeftIcon/>}
              />
              <div name="category_weapons" onClick={onGetCategoryData} className='see_more'>
                See Less<ExpandLessIcon/>
              </div></>}
            </div>
          </div>
          {/* Weapon part end */}
        </div>

      </div>
      <Footer/>
    </>
  );
}

export default Shop;