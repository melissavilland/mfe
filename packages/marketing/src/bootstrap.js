import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
// import { render } from 'react-dom';

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    );
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if(devRoot) {
        mount(devRoot);
    }
}

export { mount };