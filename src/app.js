/* eslint-disable no-unused-vars */
import React from 'react';
import ToDo from './components/todo/todo.js';
import Header from './/components/header/header';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <ToDo />
      </>
    );
  }
}
