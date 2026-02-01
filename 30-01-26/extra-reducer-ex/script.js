const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

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

const initialCakeState = {
    numOfCakes: 10,
}

const initialIcecreamState = {
    numOfIcecreams: 20
}

const icecreamReducer = (state = initialIcecreamState, action)=>{
    switch(action.type){
        case BUY_ICECREAM: 
            return{
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1
            }
        // case BUY_CAKE:
        //     return{
        //         ...state,
        //         numOfIcecreams: state.numOfIcecreams - 1
        //     }
        default: 
            return state
    }
}

const cakeReducer = (state = initialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE: 
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store = createStore(rootReducer);

console.log("Initial State:", store.getState())

const unsubscribe = store.subscribe(() =>
    console.log("Updated State:", store.getState())
);

// dispatching actions
store.dispatch(buyCake());
// store.dispatch(buyIcecream());

unsubscribe();


// here even though we have 2 seprate reducers, when we dispatch an action both of these reducers recieve that action
// one of them acts on it and the other just ignores it











