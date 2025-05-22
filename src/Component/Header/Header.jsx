import React from 'react'
import LowerHeader from '../LowerHeader/LowerHeader';
import { FaSearch } from "react-icons/fa";
import { GiStorkDelivery } from "react-icons/gi"; import { FaShoppingCart } from "react-icons/fa";
import classes from './Header.module.css'

function Header() {
  return (
  <>
      <section >
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container} >
            <a href="">
              <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="Amazon logo" />
            </a>
            {/* Delivery */}
            <div className={classes.delivery}>
              
              <span>
                {/* Icon */}
                <GiStorkDelivery />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
        </div> 
        {/* End of the first section */}
        {/* search */}
        <div className={classes.search}>
        
            <select name="" id="">
            <option value="">All</option>
            </select>
         
          
              <input type="text" name='' id='' placeholder='search product' />
          
          {/* icon */}
          <FaSearch size={25} />
        </div>
        {/* End of the second section */}
        <div className={classes.order_container}>
          <a href='' className={classes.language}>
            <img src="https://image.shutterstock.com/image-vector/american-flag-usa-clipart-us-260nw-2477337295.jpg" alt="flag" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>
          {/* Three components */}
          <a href="">
            <div>
              <p>Signin</p>
              <span>Account &Lists</span>
            </div>
          </a>
          {/* order */}
          <a href="">
            <p>Returns</p>
            <span>& Oreders</span>
          </a>
          {/* cart */}
          <a href='' className={classes.cart} >
            {/* icon */}
            <FaShoppingCart size={35} />
            <span>0</span>
          </a>
        </div>
         {/* End of the third section */}
      </div>
      </section>
      <LowerHeader/>
   </>
  )
}

export default Header
