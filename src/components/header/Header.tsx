import React from 'react';
import './Header.css';

import Logo from './logo'
import Searchbar from './searchbar';

const Header = (submitFunction: any) => { 
  return (
    <div className = "header">
      <Logo />
      <Searchbar submitFunction={submitFunction}/> 
    </div>
  );
}

export default Header;
