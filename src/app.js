/* eslint-disable no-unused-vars */
import React from 'react';
<<<<<<< HEAD
import ToDo from './components/todo/todo.js';
import Header from './components/header/header';
import SiteContext from './context/context';
const App = () => {
  return (
    <>
      <Header />
      <SiteContext>
=======

import ToDo from './components/todo/todo';

export default class App extends React.Component {
  render() {
    return (
      <>
>>>>>>> custom-hooks
        <ToDo />
      </SiteContext>
    </>
  );
};

export default App;
