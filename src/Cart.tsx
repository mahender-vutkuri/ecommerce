import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
const mapstatetoProps = (state) => {
    return {
        age: state.age,
        value: state
    }
}
const mapdispatchtoProps = (dispach) => {
    return {
        onSetrole: (value) => {
            dispach({ type: "UPDATE_CART" })
        },
        OnSetOrder: (value) => {
            dispach({ type: "PLACE_ORDER", value: value })
        }
    }

}
function Cart(props) {
    const history = useHistory();
    const [cartsarray, setCartsarray] = useState([])
    const [previousarray, setPreviousarray] = useState([])

    useEffect(() => {
        setCartsarray(props.value.updateCartItems);
        setPreviousarray(props.value.updateCartItems);
    }, [])

    const getCartValue = () => {
        let value = 0

        for (var i = 0; i < cartsarray.length; i++) {
            value += cartsarray[i].bookprice;
        }
        return value;
    }

    return (
        <div className="cart-wrapper">
            <div className="cart">
                <div className="cart-address">
                    <div > <strong> Address </strong></div>

                    <div >
                        <div>Name : Cutomer XXXXXX  </div>
                        <div>Phone Number : XXXXXXXXX  </div>
                        <div>Address :   XXXXXXXXXX </div>
                        <div>Pincode :   XXXXXX </div>
                        <div>District :   XXXXXXXXX </div>
                    </div>
                </div>
                <div className="cart-shipping">
                    <div> <strong> Cart Items </strong></div>
                    <div className="cartitems">

                        {cartsarray.map((item, index) => {
                            return (
                                <div className="item">
                                    <img src={item.image}>
                                    </img>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="price-info">

                <div >
                    <div > Price : <span className="hilight"> INR  {getCartValue()} </span> </div>
                </div>
                <div>
                    <div >Shipping Charges <span className="hilight"> Free </span> </div>
                </div>
                <div>
                    <div >Total <span className="hilight"> INR  {getCartValue()} </span> </div>
                </div>
                <div >
                    <div >
                        <button onClick={() => {
                            alert('Your Order has been placed ')
                            setTimeout(() => {
                                props.history.push("/")
                            }, 1000);
                        }} className="mybtn">Place Order</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default connect(mapstatetoProps, mapdispatchtoProps)(Cart)