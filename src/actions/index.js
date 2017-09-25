export function selectBook(book) {
    //console.log('book selected: ' + book.title);
    //selectBook is an ActionCreator, it needs to return an action
    //An object with a type property
    //action usually have two values, a type and a payload
    //type describes the purpose of the action, always uppercase
    //payload information for the  action triggered
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}