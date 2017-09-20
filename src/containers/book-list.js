import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
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

//this creates a container which is the link between Redux and React component
//when state changes this reloads
export default connect(mapStateToProps)(BookList)