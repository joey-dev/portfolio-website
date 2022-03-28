import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { InfoStoreState, watchInfoSagas } from './info';
import infoReducer from './info/Reducers';

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    if (typeof devToolsExtension === 'function') {
        composeEnhancers = devToolsExtension;
    }
}

export interface MapStateToProps {
    info: InfoStoreState;
}

const rootReducer = combineReducers({
    info: infoReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(watchInfoSagas);

export default store;
