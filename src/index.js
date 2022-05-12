import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import NotFound from './components/NotFound';
import {navItems} from './data/navItems';
import reducers from './reducers';
import './assets/fonts/Avenir-Roman.otf';
import './assets/styles/reset.css';
import './index.css';

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

const renderNavItems = () => {
    return navItems.map(navItem => {
        return (
            <Route
                key={navItem.title}
                path={`/${navItem.href}`}
                element={navItem.component}/>
        );
    });
};

const root = ReactDOM.createRoot(
    document.querySelector('#root')
);
root.render(
    <Provider
        store={store}>
        <BrowserRouter>
            <App/>

            <Routes>
                <Route
                    path='*'
                    element={<NotFound/>}/>

                {renderNavItems()}
            </Routes>
        </BrowserRouter>
    </Provider>
);
