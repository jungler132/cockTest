import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducerLaunch from '../../../views/launchScreen/redux/reducer';
import rootSaga from '../../saga/rootSaga';


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducerLaunch, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
