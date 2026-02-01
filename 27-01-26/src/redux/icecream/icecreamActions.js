import { BUY_ICECREAM } from "./icecreamTypes"

export const buyIcreams = (quatity) =>{
    return{
        type: BUY_ICECREAM,
        payload: quatity
    }
}