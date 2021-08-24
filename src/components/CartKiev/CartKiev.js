import React from 'react';

import './CartKiev.css';
import imageKiev from '../../assets/images/cartKiev/city-kiev.png';
import iconBagTwo from '../../assets/images/cartKiev/bag-two.svg';
import iconBagOne from '../../assets/images/cartKiev/bag-one.svg';

const CartKiev = () => {
  return (
    <div className="cart-kiev cart">
      <div className="cart__titles">
        <h2 className="cart__city title-city">Киев</h2>
        <h3 className="cart__country title-country">Украина</h3>
      </div>
      <div className="cart__main">
        <div className="city__img">
           <img 
            alt="Kiev image"
            src={imageKiev}
           />
        </div>

        <div className="bag-price">
           <div className="bag-price__row">
             <span className="bag-icons">
               <img 
                  alt="bag"
                  src={iconBagTwo}
               />
             </span>
             <span className="bag-one__price bag-price">15 USD</span>
           </div>
           <div className="bag-price__row">
            <span className="bag-icons">
              <img 
                alt="bag"
                src={iconBagTwo}
              />
              <img 
                alt="bag"
                src={iconBagTwo}
              />
             </span>
             <span className="bag-two__price bag-price">24 USD</span>
           </div>
           <div className="bag-price__row">
            <span className="bag-hostel bag-icons">
               <img 
                  alt="bag hostel"
                  src={iconBagOne}
               />
               <span className="bag-hostel__text">место в хостеле</span>
             </span>
             <span className="bag-hostel__price bag-price">5 USD</span>
           </div>
        </div>
      </div>
      <div className="cart-rent__lists lists-body">
        <ul className="cart-rent__list list-body__left">
          <li><span className="cart-rent__link">Гостиницы</span></li>
          <li><span className="cart-rent__link">Хостелы</span></li>
          <li><span className="cart-rent__link">Комнаты посуточно</span></li>
          <li><span className="cart-rent__link">Курортные отели</span></li>
        </ul>
        <ul className="cart-rent__list">
          <li><span className="cart-rent__link">Квартиры посуточно</span></li>
          <li><span className="cart-rent__link">Дома посуточно</span></li>
          <li><span className="cart-rent__link">Дома для отпуска </span></li>
          <li><span className="cart-rent__link">Курортные отели</span></li>
        </ul>
      </div>

      
    </div>
  )
};

export default CartKiev;
