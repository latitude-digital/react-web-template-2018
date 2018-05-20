import { createStore, applyMiddleware, compose } from 'redux';
import apiMiddleware from '../middleware/api_middleware'
import reducers from '../reducers';

import DevTools from 'components/DevTools';

const enhancer = compose(
    applyMiddleware(apiMiddleware),
    DevTools.instrument()
);

export default function configureStore(initialState) {

    const store = createStore(
        reducers,
        initialState,
        enhancer
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(reducers)
        });
    }

    return store;
}
