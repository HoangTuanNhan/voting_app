import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/App';
import Voting from './pages/Voting';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact name="index" path="/" component={Voting} />
                <Route path="/" component={App} />
                <Route component={Voting} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('body'));
