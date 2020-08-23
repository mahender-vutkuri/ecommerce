import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
    }
  }

}
function home(props) {
  const [booksarray, setBooksarray] = useState([])

  useEffect(() => {
    setBooksarray(props.value.books);
  }, [])



  return (
    <div className="home-wrapper">
      
      <div className="books-container" >

        {booksarray.map((item, index) => {
          return (
            <div className="book">
              <div className="book-img">
                <img src={item.image}  alt={item.bookname}></img>
              </div>
              <div className="book-desc">
                <p >{item.bookname}</p>
                <button className="mybtn" onClick={() => {
                  props.history.push({ pathname: "/bookinfo", state: item })
                }}>Buy Now</button>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  );
}

export default connect(mapstatetoProps, mapdispatchtoProps)(home);