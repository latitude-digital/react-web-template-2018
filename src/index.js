import 'assets/to_import'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import {ThroughProvider} from 'react-through'
import configureStore from './state/store';
import registerServiceWorker from './utils/register_service_worker';

const store = configureStore();
const rootElement = document.getElementById('root');

if (module.hot) {
    module.hot.accept('core/Root', () => {
        setTimeout(render, 0);
    });
}

render();
registerServiceWorker();

function render(){
    const Root = require('core/Root').default;
    ReactDOM.render(
        <ThroughProvider>
            <Provider store={store}>
                <Root />
            </Provider>
        </ThroughProvider>,
        rootElement
    );
}
