import React, { Component } from 'react';
import { useHistory, useLocation } from "react-router-dom";
function Header() {
  const history = useHistory();
  return (
    <div className="header-wrapper">

      <div className="header" >
        <h3 >Online Shopping Application</h3>
        <div className="nav-items">
          <div className="item" >
            <span onClick={() => {
              history.push('/')
            }} >Home</span>
          </div>
          <div className="item">
            <span onClick={() => {
              history.push('/orders')
            }}>My Orders</span>
          </div>
          <div className="item">
            <span onClick={() => {
              history.push('/cart')
            }}>Cart</span>
          </div>
        </div>
      </div>
    </div>)
}
export default Header;