import { BUY_COMBO } from "./comboTypes";

export const buyCombo = (quatity) =>{
    return{
        type: BUY_COMBO,
        payload: quatity
    }
}