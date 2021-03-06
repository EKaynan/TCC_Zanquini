import React from 'react';
import { navigate } from 'gatsby';
import { isLoggedIn } from '../helpers/user-helper';
import { getUser } from '../helpers/user-helper';

const isPrivateRoute = ({component: Component, location}) => {

  return class PrivateRoute extends React.Component {
    render() {
      if (!isLoggedIn() && location !== '/login') {
        navigate("/login");
        return null;
      } else if (location === '/' && getUser().father_id) {
        navigate("/pag-filho");
        return null;
      } else{
        return <Component {...this.props} />;
      }
    }
  }

}

export default isPrivateRoute;