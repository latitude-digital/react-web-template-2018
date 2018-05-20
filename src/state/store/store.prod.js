import { createStore, applyMiddleware } from 'redux';
import apiMiddleware from '../middleware/api_middleware'
import reducers from '../reducers';

const middleware = applyMiddleware(apiMiddleware);

export default function configureStore(initialState) {
    return createStore(reducers, initialState, middleware);
}
