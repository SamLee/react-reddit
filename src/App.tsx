import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/header';
import Posts from './components/posts';

const App = () => {
  const [search, setSearch] = useState("all");
  const [posts, setPosts] = useState();
 
  const updatePosts = () => {
    (async () => {
      const res = await fetch(`https://www.reddit.com/r/${search}.json`);
      const data = await res.json();
      setPosts(data.data.children);
    })();
  }

  const searchSubmit = (newSearch: string) => setSearch(newSearch);

  useEffect(updatePosts, [search]);

  return (
    <div className="app">
      <Header submitFunction={searchSubmit} />
      <Posts posts={posts} id="posts"/>
    </div>
  );
}

export default App;
