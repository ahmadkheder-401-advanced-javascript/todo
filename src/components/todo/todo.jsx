/* eslint-disable no-unused-vars */
import React from 'react';
import TodoConnected from './todo-connected.jsx';
import Auth from '../../auth/auth';

function ToDo(props) {

  return (
    <>
      <Auth action="read">
        < TodoConnected />
      </Auth >

    </>
  );
}
export default ToDo;
