import React from 'react';
//import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/Homepage.component';
import ShopPage from './pages/shop-page/shop.component'
import Header from './components/header/header.component';
function App() {
  return (
    <div>
      <Header />
   <Switch>
     <Route exact path='/' component={HomePage} />
     <Route exact path='/shop' component={ShopPage} />
   </Switch>
   </div>
  );
}

export default App;
