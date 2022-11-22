import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import Header from './Components/header';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Cart from './Pages/Cart';

export const searchContext = React.createContext();

const App = (props) => {
  let [searchText, setSearchText] = React.useState('');
  return (
    <div className="wrapper">
      <searchContext.Provider value={{ searchText, setSearchText }}>
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </searchContext.Provider>
    </div>
  );
};

export default App;
