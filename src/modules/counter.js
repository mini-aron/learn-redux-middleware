import { createAction,handleActions } from "redux-actions";

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// export const increase = ()=>({ type:INCREASE });
// export const decrease = ()=>({ type:DECREASE });

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState =0;

const counter = (state=initialState,action) => {

    switch(action.type){
        case INCREASE:
            console.log("add")
            return state+1;
        case DECREASE:
            return state-1;
        default:
            return state;
    }
}

// const counter = handleActions(
//     {
//         [INCREASE]: state => state + 1,
//         [DECREASE]: state => state - 1,
//     },
//     initialState
// )

export default counter;