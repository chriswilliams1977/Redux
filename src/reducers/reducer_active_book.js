//reducer only gets called when an action IS DISPATHED BY APP
//state argument is not app state only state this reducer is responsible for
//same state flows in and out of the reducer it is responsible for
//you need a base case to check if action is related to reducers as action are dispatched to all reducers
//if you dont care about it pass state through and do not change
//first time app boots state will be undefined,state = null handles this. Reducer cannot have state as undefined
export default function (state = null,action) {
    switch(action.type){
        case 'BOOK_SELECTED':
            //if action is BOOK_SELECTED then return book
            return action.payload
    }

    return state
}