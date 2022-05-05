import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'


import ContactoPage from './pages/ContactoPage'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import LifePage from './pages/LifePage'
import TecPage from './pages/TecPage'
import GaleryPage from './pages/GaleryPage'

function App() {
  return (
    <Router>
     <Header/>
      <Nav/>
       <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/explore" exact component={ExplorePage} />
        <Route path="/galery" exact component={GaleryPage} />
        <Route path="/life" exact component={LifePage} />
        <Route path="/tec" exact component={TecPage} />
        <Route path="/contact" exact component={ContactoPage} />
        </Switch>
        <Footer/>
    </Router>

  );
}

export default App;