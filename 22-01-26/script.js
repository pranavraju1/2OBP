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
function buyCake(){
    return{
        type: BUY_CAKE
    }
}

function buyIcecream(){
    return{
        type: BUY_ICECREAM
    }
}





// defining initial state for reducers
const initialState = {
    numOfCakes: 10,
    numOfIcecreams: 20
}

//reducer is a func that takes state and action as arg
// and depending on the action returns a new state 
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state, numOfCakes:  state.numOfCakes - 1
        }
        case BUY_ICECREAM: return{
            ...state, numOfIcecreams:  state.numOfIcecreams - 1
        }
        default: return state
    }
}

// createStore is a method that takes reducer as arg to create store
const store = createStore(reducer);
console.log("initialState", initialState);

console.log("test", store.getState())
// subscribe method takes listner(callback) as arg and it wil be executed everytime the state chages
let unsubscribe =  store.subscribe(()=>console.log(store.getState()));

// dispatching action
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());


unsubscribe();





