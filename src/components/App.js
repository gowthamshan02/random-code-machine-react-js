import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import RandomQuotes from './RandomQuotes';
import Header from './Header';

import Contact from './Footer';
class App extends Component {
  render() {
    return (
      <div>
        <Header/> 
      <Provider store={store}>
        <RandomQuotes />
      </Provider>
      <Contact/>
      
      
      </div>

    );
  }
}

export default App;
