import 'assets/to_import'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import {ThroughProvider} from 'react-through'
import configureStore from './state/store';
import registerServiceWorker from './utils/register_service_worker';
import checkAppVersion from './utils/checkAppVersion'

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


let versionCheckInterval = null;

function refreshPage(){
    const clickedOK = confirm(`
            Updates have been made to this site. 
            You must refresh to continue.
            Press OK to reload the page.
        `);
    if(!clickedOK) return refreshPage();
    clearInterval(versionCheckInterval);
    window.location.reload(true);
}

if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {

    versionCheckInterval = setInterval(() => {
        checkAppVersion(APP_VERSION)
            .catch((reload) => {
                if(reload){
                    refreshPage();
                }
            })
    }, 10000);

} else {
    console.warn('Skipping Version Check:', process.env.NODE_ENV);
}


