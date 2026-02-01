import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (quatity) =>{
    return{
        type: BUY_CAKE,
        payload: quatity
    }
}