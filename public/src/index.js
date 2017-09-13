import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/App';
import NotFound from './pages/NotFound';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact name="index" path="/" component={NotFound} />
                <Route path="/" component={App} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('body'));