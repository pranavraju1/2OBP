const redux = require('redux');
const createStore = redux.createStore;


// defining actions
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// action is an object that has type property and its value is a string constant
// {
//     tpye: BUY_CAKE,
//     info: 'this action is to buy cake'
// }

// action creator -> these are functions that return action
function buyCake(quantity){
    return{
        type: BUY_CAKE,
        payload: quantity
    }
}

function buyIcecream(quantity){
    return{
        type: BUY_ICECREAM,
        payload: quantity
    }
}





// defining initial state for reducers
const initialState = {
    numOfCakes: 50,
    numOfIcecreams: 200
}

//reducer is a func that takes state and action as arg
// and depending on the action returns a new state 
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state, numOfCakes:  state.numOfCakes - action.payload
        }
        case BUY_ICECREAM: return{
            ...state, numOfIcecreams:  state.numOfIcecreams - action.payload
        }
        default: return state
    }
}

// createStore is a method that takes reducer as arg to create store
const store = createStore(reducer);

console.log("test", store.getState())
// subscribe method takes listner(callback) as arg and it wil be executed everytime the state chages
let unsubscribe =  store.subscribe(()=>console.log(store.getState()));

// dispatching action
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());



unsubscribe();



// Q1 your shop now has 50 pizza's and you can buy 2 at a time.
// Q2 you have a combo offer where customer can buy 1 pizza and 1 icecream together 
