/* eslint-disable no-unused-vars */
import React from 'react';
import ToDo from './components/todo/todo.js';
import Header from './components/header/header';
import SiteContext from './context/context';
const App = () => {
  return (
    <>
      <Header />
      <SiteContext>
        <ToDo />
      </SiteContext>
    </>
  );
};

export default App;
