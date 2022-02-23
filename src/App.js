import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/app.scss';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          {/* <Route path='/country/:name' component={CountryDetails} /> */}
          <Route path='/about' component={AboutPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
