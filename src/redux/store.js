import { configureStore, ThunkAction, Action, AnyAction, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import usersReducer from './modules/users/usersSlice';
import rootSaga from './sagas'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import logger from 'redux-logger'

const isDev = process.env.NODE_ENV === 'development'
const sagaMiddleware = createSagaMiddleware();


const rootReducer = (state , action) => {
    if(action.type === HYDRATE) {
        return{
            ...state, ...action.payload
        }
    }
    return combineReducers({
        user: usersReducer
        
    })(state,action)
}

const makestore = () => {
    const store = configureStore({
        reducer: {
            rootReducer
        },
        middleware: getDefaultMiddleware =>
            isDev ? getDefaultMiddleware().concat(logger, sagaMiddleware) : getDefaultMiddleware(),
        devTools: isDev
    });

    sagaMiddleware.run(rootSaga)
    
    return store
}
export const wrapper = createWrapper(makestore, {
    debug: isDev
});


const store = makestore();

export default store;



