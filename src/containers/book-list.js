import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//this is the glue bewteen Redux and React
//it set values in reducer to state props which can be called by component in render as above

function mapStateToProps(state) {
    //Whatever is returned will show up as props
    //inside of BookList
    return {
        books: state.books
    };
}

//Anything returned from this function will end up as props
//on the bookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called the result should be passed
    //to all reducers. bindActionCreators does this by dispatching action
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//this promotes a component to a container which is the link between Redux and React component
//when state changes this reloads
//It needs to know about this new dispatch method, selectBook. Make it
//available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)