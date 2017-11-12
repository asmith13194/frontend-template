import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import routes from './routes.jsx';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <MuiThemeProvider>

      <Router history={history}>

          {routes}

      </Router>

    </MuiThemeProvider>

  </Provider>, document.getElementById('root'));

registerServiceWorker();
