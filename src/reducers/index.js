import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

// The combineReducers is telling Redux how our application state will look like.
// Any key that we provide to the combineReducers() method, ends up as a key on our global state.
const rootReducer = combineReducers({
   books: BooksReducer,
   activeBook: ActiveBookReducer
});

export default rootReducer;

// The combineReducers() method is also the way we tell Redux about which Reducers our app consists of.
// Each reducer is responsible for maintaining this piece of state in the application.
// When an action is dispatched, ALL reducers will be called (by Redux) with the reducers piece of state (not the application state) as the state parameter.
