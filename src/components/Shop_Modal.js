import React, { useState, useEffect } from 'react';
// import { Button } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import RightIcon from '@material-ui/icons/ChevronRight';
import LeftIcon from '@material-ui/icons/ChevronLeft';
import Pagination from "material-ui-flat-pagination";
import CloseIcon from "@material-ui/icons/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function Shop_Modal(props) {
  const [state, setState] = useState({
    offset: 0,
  });

  const { offset } = state;

  const handlePage = (offset, page) => {
    setState((prevState) => ({...prevState, offset}))
  }

  useEffect(() => {
  }, [])

  return (
    <Dialog
      fullWidth={true}
      maxWidth={'lg'}
      open={props.isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.onClick}
      aria-describedby="alert-dialog-slide-description"
      className='shop_category_dlg'
    >
      <DialogTitle>
        {props.category === 1 && "Kanarias"}
        {props.category === 2 && "Character"}
        {props.category === 3 && "Weapons"}
        <CloseIcon className='btn_close' onClick={props.onClick}/>
      </DialogTitle>
      <DialogContent>
        <div className='popular_products'>

          <div className='product_item_container'>
            <div className='product_item'>
            {props.category === 1 && <img className="item_photo item_photo_sword" src={ require("../assets/img/Kanaria-1.png") } alt=""/>}
              {props.category !== 1 && <img className="item_photo item_photo_sword" src={ require("../assets/img/character.png") } alt=""/>}
              <div className='product_price'>232 KSM</div>
            </div>
          </div>

          <div className='product_item_container'>
            <div className='product_item'>
              {props.category === 1 && <img className="item_photo item_photo_sword" src={ require("../assets/img/Kanaria-1.png") } alt=""/>}
              {props.category !== 1 && <img className="item_photo item_photo_sword" src={ require("../assets/img/character.png") } alt=""/>}
              <div className='product_price'>232 KSM</div>
            </div>
          </div>

          <div className='product_item_container'>
            <div className='product_item'>
            {props.category === 1 && <img className="item_photo item_photo_sword" src={ require("../assets/img/Kanaria-1.png") } alt=""/>}
              {props.category !== 1 && <img className="item_photo item_photo_sword" src={ require("../assets/img/character.png") } alt=""/>}
              <div className='product_price'>232 KSM</div>
            </div>
          </div>

          <div className='product_item_container'>
            <div className='product_item'>
            {props.category === 1 && <img className="item_photo item_photo_sword" src={ require("../assets/img/Kanaria-1.png") } alt=""/>}
              {props.category !== 1 && <img className="item_photo item_photo_sword" src={ require("../assets/img/character.png") } alt=""/>}
              <div className='product_price'>232 KSM</div>
            </div>
          </div>

          <div className='product_item_container'>
            <div className='product_item'>
            {props.category === 1 && <img className="item_photo item_photo_sword" src={ require("../assets/img/Kanaria-1.png") } alt=""/>}
              {props.category !== 1 && <img className="item_photo item_photo_sword" src={ require("../assets/img/character.png") } alt=""/>}
              <div className='product_price'>232 KSM</div>
            </div>
          </div>

        </div>
      </DialogContent>
      <DialogActions>
        <Pagination
            limit={10}
            offset={offset}
            total={100}
            size="large"
            onClick={(e, offset, page) => handlePage(offset, page)}
            nextPageLabel={<RightIcon/>}
            previousPageLabel={<LeftIcon/>}
          />
        {/* <Button onClick={props.onClick}>Disagree</Button>
        <Button onClick={props.onClick}>Agree</Button> */}
      </DialogActions>
    </Dialog>
  )
}

export default Shop_Modal;