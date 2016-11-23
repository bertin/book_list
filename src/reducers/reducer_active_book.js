// This is our ActiveBooks reducer.
// state argument is NOT application state, only the state this reducer is responsible for.
//   => The same state that is being produced by this reducers, is flowing back into it when an action occurs.
//   => Look at src/reducers/index.js, the mapping in the combineReducers() method is what gets sent as state to the reducers.
// The state = null is a way of initializing the state, because when the application wires up the first time, Redux is initially calling all
// Reducers to initialize their state (with a special action). It is NOT allowed to return undefined for the state, therefore we initialize it to null in our case.
export default function(state = null, action) {

   switch (action.type) {
      case 'BOOK_SELECTED':
         return action.payload;
   }

   return state;
};
