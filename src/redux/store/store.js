import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/rootReducer";

// Outer function:
function exampleMiddleware(storeAPI) {
    return function wrapDispatch(next) {
        return function handleAction(action) {
            // Do anything here: pass the action onwards with next(action),
            // or restart the pipeline with storeAPI.dispatch(action)
            // Can also use storeAPI.getState() here

            console.log('Action Dispatch', action);
    
            return next(action)
        }
    }
}

const middleware = applyMiddleware(thunk, exampleMiddleware);

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;