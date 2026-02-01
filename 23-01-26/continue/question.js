const redux = require('redux');
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

const axios = require('axios');
const thunkMiddleware = require('redux-thunk').thunk;
const logger = require('redux-logger').createLogger();


const initialState = {
    loading:true,
    data:[],
    error: ''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

const fetchUserRequest = () =>{
    return{
        type: FETCH_USER_REQUEST
    }
}
const fetchUserSuccess = (users) =>{
    return{
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
const fetchUserError = (error) =>{
    return{
        type: FETCH_USER_ERROR,
        payload: error
    }
}

const fetchUser = () => {
    return function(dispatch){
        dispatch(fetchUserRequest());

        axios.get('https://jsonplaceholder.tpicode.com/users')
        .then(res=>{
            const user = res.data.map(user=>user.id)
            dispatch(fetchUserSuccess(user))
        })
        .catch(error=>{
            dispatch(fetchUserError(error))
        })
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state, loading: true,
            }
        case FETCH_USER_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ""
            }
        case FETCH_USER_ERROR:
            return{
                loading: false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

// store.subscribe(()=>{
//     console.log(store.getState());
// })

store.dispatch(fetchUser());
