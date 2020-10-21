/* eslint-disable no-unused-vars */
import React from 'react';
import { AuthContext } from './context.js';
import Show from '../show/show';

class Auth extends React.Component {
    static contextType = AuthContext; // access it with this.context

    // admin ['edit', 'delete', 'read']
    // <Auth action="delete">
    //     <button>Delete</button>
    //     <div>asdasd asdas children </div>
    // </Auth>
    render() {

      let okToRender = false;

      try {

        // 1- is the user logged in ?
        // 2 - do u require certain action? does the have it

        okToRender = this.context.loggedIn && this.context.isValidAction(this.props.action);

      } catch(e) {
        console.log('error in Auth component !');
      }

      return (
        <Show condition={okToRender}>
          {this.props.children}
        </Show>
      );
    }
}


export default Auth;
