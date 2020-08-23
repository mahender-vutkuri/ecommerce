import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';

function SlectedBookpage(props) {

    const [Bookdetails, setBookdetails] = useState("");
    const [bookname, setBookname] = useState("");
    const [bookimage, setBookimage] = useState("");
    const [pagecount, setPagecount] = useState("");
    const [bookdescription, setBookdescription] = useState("");
    const [bookauother, setBookauother] = useState("");
    const [bookprice, setBookprice] = useState("");

    useEffect(() => {
        setBookname(props.location.state.bookname);
        setBookdescription(props.location.state.descrpition);
        setBookimage(props.location.state.image);
        setPagecount(props.location.state.pagecount);
        setBookauother(props.location.state.bookauother);
        setBookprice(props.location.state.bookprice);
    }, [])



    return (
        <div className="book-info-wrapper" >
            <div className="book-info">
                <img src={bookimage} />
                <div >
                    <div> <strong> Book Titile  </strong> :  {bookname} </div>
                    <div> <strong> Price </strong> :  {bookprice} </div>
                    <div >
                        <button onClick={
                            () => {
                                alert('item added to cart.')
                                props.onSetrole(props.location.state)
                                // props.history.push("/cart")
                            }
                        } className="mybtn">Add to Cart</button>
                        <button onClick={
                            () => {
                                props.OnSetOrder(props.location.state)
                                props.history.push("/orders")
                            }
                        } className="mybtn">Buy Now</button>

                    </div>
                </div>
                <div>
                    {bookdescription}
                </div>
            </div>

        </div>
    );
}
const mapstatetoProps = (state) => {
    return {
        value: state,
        myOrders: state
    }
}
const mapdispatchtoProps = (dispach) => {
    return {
        onSetrole: (value) => {
            dispach({ type: "UPDATE_CART", value: value })
        },
        OnSetOrder: (value) => {
            dispach({ type: "PLACE_ORDER", value: value })
        },

    }

}

export default connect(mapstatetoProps, mapdispatchtoProps)(SlectedBookpage);