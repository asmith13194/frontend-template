import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ props =>
      localStorage.getItem('user') !== null

      ?

      jwt.verify(
        JSON.parse(localStorage.getItem('user')).jwt,
        process.env.REACT_APP_JWTSECRET,
        (err, decoded) => {
          switch(err) {
            case null:
              decoded.exp = Math.floor(Date.now() / 1000) + (60 * 60 * 24);
              localStorage.setItem(
                'user',
                JSON.stringify({
                  info: JSON.parse(localStorage.getItem('user')).info,
                  jwt: jwt.sign(decoded, process.env.REACT_APP_JWTSECRET)
                })
              );
              return <Component {...props}/>;
            default:
              localStorage.removeItem('user');
              return <Redirect
                to={{
                  pathname: '/',
                  state: { from: props.location }
                }}/>;
          }
        }
      )

      :

      <Redirect
        to={{
          pathname: '/',
          state: { from: props.location }
        }}/>
    }/>
);

export default (PrivateRoute);
