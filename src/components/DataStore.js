import {EventEmitter} from "events";
import dispatcher from "./MyDispatcher.js";
import $ from 'jquery'
class DataStore extends EventEmitter{
    
    constructor(){
        super();
        this.getUserData = this.getUserData.bind(this);
        this.state = {
            users: [{
                "username": "ajayc",
                "password": "123"
            },
            {
                "username": "johnp",
                "password": "123"
            },
            {
                "username": "davej",
                "password": "123"
            }]
        }
    }

    getUserData(){
        $.ajax({url: "../data/users.json",
            success: function(result){
                //console.log(result);
                //alert('Response: ' +result);
                /*this.setData({
                    users : result
                });
                */
            }, error: function (error) {
                //alert('Error in call: ' + eval(error));
            }
        });

        return this.state.users;
    }

    handleActions(action){
        console.log("Action recieved: "+action.type);
        switch(action.type){
            case "GET_USERS":
                //this.getUserData();
                this.emit("change");
                break;
            case "CREATE_NEW":
                console.log("New component");
                break;
            default:
                console.log("Default");
                break;
        }
    }
}

const dataStore = new DataStore();
export default dataStore;
dispatcher.register(dataStore.handleActions.bind(dataStore));
//window.dispatcher = dispatcher;