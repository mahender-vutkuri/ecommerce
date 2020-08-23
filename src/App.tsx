import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import './App.css';
import home from './home';
import Orders from './Orders';
import Cart from './Cart';
import SelectedBookpage from './SlectedBookpage';
import Header from './header';
function App() {
  return (
    <div>

      <Header />
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/bookinfo" exact component={SelectedBookpage} />
      </Switch>
    </div>

  );
}

export default App;
