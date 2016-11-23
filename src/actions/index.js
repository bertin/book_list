// This file contains all the action creators in our app.

// Define the 'selectBook' action creator.
// This is basically an ordinary function, returning a plain javascript object.
// To make the action returned from this action creator to flow thru all the reducers we need to wire it up to Redux.
// We wire it up by binding this selectBook action creator to the the BookList component (we do that in the BookList component itself).
export function selectBook(book) {
   console.log(book.title);

   // selectBook is an action creator, it needs to return an action describing the action.
   // The action must ALLWAYS include a type attribute, describing the type of action beeing dispatched.
   // We also want to return a payload, an object describing what has been changed.
   return {
      type: 'BOOK_SELECTED',
      payload: book
   };
}
