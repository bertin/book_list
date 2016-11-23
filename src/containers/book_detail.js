import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
   render() {

      if (!this.props.book) {
         return <div>Select a book to get started.</div>;
      }

      return (
         <div>
            <h3>Details for:</h3>
            <div>Title: { this.props.book.title }</div>
            <div>Pages: { this.props.book.pages }</div>
            <div>Description: { this.props.book.description }</div>
         </div>
      );

   };
}

// The state parameter is the application state from Redux.
function mapStateToProps(state) {
   // Whatever is reurned will show up as props inside BookList, like 'this.props.book' in our case.
   return {
      book: state.activeBook
   }
}

export default connect(mapStateToProps)(BookDetail);
