import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book'

//Reducers get combined here to create application state
//This is completely seoerate from component state
//For key in combineReducers we assign one reducer and that is responsible for creating one piece of state
//For example ActiveBookReducer creates activeBook state
//Reducers change state via actions
//When action is dispatch it flows through all reducers
//Via a switch each reducer has the option to return a new piece of state
const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBookReducer
});

export default rootReducer;
