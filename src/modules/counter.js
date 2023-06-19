import { createAction,handleActions } from "redux-action";

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = ()=>({ type:INCREASE });
export const decrease = ()=>({ type:DECREASE });

const initialState = 0;

const counter = (state=initialState,action) => {

    switch(action.type){
        case INCREASE:
            return state => state + 1;
        case DECREASE:
            return state => state - 1;
        default:
            return state;
    }
}

export default counter;