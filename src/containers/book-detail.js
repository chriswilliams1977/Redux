import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookDetail extends Component {
    render() {
        return(
            <div>Book detail</div>
        )
    }
}


function mapStateToProps(state) {
    //the object we return appear in props for this container
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail)