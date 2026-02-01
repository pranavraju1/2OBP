import { BUY_COMBO } from "../combo/comboTypes"
import { BUY_CAKE } from "./cakeTypes"



const intialState = {
    numOfCakes: 30
}

const cakeReducer = (state = intialState, action) =>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state, numOfCakes: state.numOfCakes - action.payload
            }
        case BUY_COMBO:
            return{
                ...state, numOfCakes: state.numOfCakes - 1, 
            }
        default:
            return state
    }
    
}

export default cakeReducer;