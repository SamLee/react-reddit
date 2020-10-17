import React, { useState } from 'react';
import './Searchbar.css';

import SearchIcon from "@material-ui/icons/Search";

const Searchbar = (submitFunction: any) => {
  const [typed, updateTyped] = useState("all");
  const handleChange = (event: any) => updateTyped(event.target.value);
  const handleSubmit = (event: any ) => {
    event.preventDefault();
    submitFunction.submitFunction.submitFunction(typed);
  }
  return (
    <div className="searchbar">
      <label htmlFor="searchbar"><SearchIcon /></label>
      <form onSubmit={handleSubmit}><input id="searchbar" placeholder={typed} onChange={handleChange}/></form>
    </div>
  );
}

export default Searchbar;
