import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import { Router } from './Router';
import { Header } from './components/Header';
import { store } from './store';
import './App.scss';

function App() {
  return(
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <div>
            <Header />
          </div>
          <div className="app__content">
            <Router />
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
