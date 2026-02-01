import { BUY_COMBO } from "../combo/comboTypes"
import { BUY_ICECREAM } from "./icecreamTypes"


const intialState = {
    numOfIceream: 20
}

const icecreamReducer = (state = intialState, action) =>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state, numOfIceream: state.numOfIceream - action.payload
            }
        case BUY_COMBO:
            return{
                ...state, numOfIceream: state.numOfIceream - 1
            }
        default:
            return state
    }
}

export default icecreamReducer;