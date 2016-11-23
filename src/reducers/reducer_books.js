// This is our BooksReducer reducer.
// The BooksReduces is a quite static thing, it dont care about any action, it always returns the same list of books.
// aka, it also returns this list of books when Redux in it initialization process calls all the Reducers when the application fires up.
export default function() {
   return [
      { title: 'Javascript: The Good parts', pages: 101, description: 'This is the description for the Javascript book' },
      { title: 'Harry Potter', pages: 491, description: 'This is the description for the Harry Potter book' },
      { title: 'The Dark Tower', pages: 85, description: 'This is the description for the Dark Tower book' },
      { title: 'Eloquent Ruby', pages: 1, description: 'This is the description for the Ruby book' },
      { title: 'Redux: An Introduction', pages: 158, description: 'This is the description for the Redux book' }
   ]
};
