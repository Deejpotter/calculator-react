import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
