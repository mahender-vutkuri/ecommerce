import React, { Component, useState, useEffect } from 'react'; import { connect } from 'react-redux';
function Orders(props) {
    const [ordersarray, setOrdersarray] = useState([])
    const [today, setToday] = useState("");

    useEffect(() => {
        let today: any = new Date().toLocaleString();

        setToday(today);
        setOrdersarray(props.value.myOrders);
    }, [])

    return (
        <div className="orders-wrapper" style={{ margin: "20px;" }}>


            {ordersarray.length > 0 ? ordersarray.map((item, index) => {
                return (
                    <div >
                        <div className="header">
                            <div className="item">
                                <div > <strong> Order placed at: </strong></div>
                            </div>
                            <div className="item">
                                <div >{today}</div>
                            </div>
                            <div className="item">
                                <div  > <strong> Status </strong>: Delivered</div>
                            </div>
                        </div>
                        <div className="order-placed">
                            <img src={item.image} />
                            <div >
                                <div> <strong> Book Titile </strong>  :  {item.bookname} </div>
                                <div> <strong> Price </strong> :  {item.bookprice} </div>
                                <div>
                                    ffwhhfo oifoiewhgoiewgowahgow oigeoewihghioa oiehgoaewhgiehgiha wihgewaihgiewhgiewahg waehlwehgluewahlf aoiewhgahghw ewahgewahgwehgewF...
                                </div>
                                <div>
                                    <strong>Reviews: </strong>
                                    <ul>
                                        <li>super Book</li>
                                        <li>Great</li>
                                    </ul>
                                </div>
                                <div>
                                    <strong>Ratings:</strong>
                                    <ul>
                                        <li>
                                            &#9733;
                                            &#9733; &#9733;
                                        </li>
                                        <li>
                                            &#9733; &#9733; &#9733; &#9733;
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }) : 'No Orders Found'}

        </div>
    );
}

const mapstatetoProps = (state) => {
    return {
        value: state,
        ordersarray: state
    }
}
const mapdispatchtoProps = (dispach) => {
    return {
        onSetrole: (value) => {
            dispach({ type: "UPDATE_CART", value: value })
        },
        OnSetOrder: (value) => {
            dispach({ type: "PLACE_ORDER", value: value })
        }
    }

}

export default connect(mapstatetoProps, mapdispatchtoProps)(Orders);