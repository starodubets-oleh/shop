import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Products from './Products';

import '../assets/styles/reset.css';
import '../assets/styles/main.scss';
import '../assets/styles/header.scss';

import cartImg from '../assets/img/shopping-cart.svg';
import Budge from '../components/Budge';
import Cart from './Cart';
import Shipping from './Shipping';

const Main = () => {

  return (
    <>
      <Router>
        <header className='header'>
          <nav className="nav">
            <div className="logo">
              <Link to="/">
                <p>My shop</p>
              </Link>
            </div>
            <div className="cart-link">
              <Budge />
              <Link to="/cart">
                <img src={cartImg} alt="cart" />
              </Link>
            </div>
          </nav>
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/" >
              <Products />
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
            <Route exact path="/shipping">
              <Shipping/>
            </Route>
            <Route>
              <h1>page 404</h1>
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  )
}

export default Main;