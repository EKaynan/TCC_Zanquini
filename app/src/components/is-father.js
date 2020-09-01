import React from 'react';
import { navigate } from 'gatsby';
import { getUser } from '../helpers/user-helper';

const isFather = ({component: Component, location}) => {

  return class PrivateRoute extends React.Component {
    render() {
      if (getUser().father_id && location !== '/login') {
        navigate("/pag-filho");
        return null;
      } else{
        return <Component {...this.props} />;
      }
    }
  }

}

export default isPrivateRoute;