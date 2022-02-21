import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Listing from './components/Listing';
import ItemDetails from './components/ItemDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

import './styles/app.scss';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Listing} />
          <Route path='/country/:id' component={ItemDetails} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
