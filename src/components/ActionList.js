import dispatcher from "./MyDispatcher.js";

export function  getUserData(){
    dispatcher.dispatch({
        type:"GET_USERS"
    })
}

export function  newComp(){
    dispatcher.dispatch({
        type:"GET_USERS"
    })
}