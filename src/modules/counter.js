import { createAction } from "redux-actions";

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// export const increase = ()=>({ type:INCREASE });
// export const decrease = ()=>({ type:DECREASE });

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//1초뒤에 increase 혹은 decrease함수를 디스패치함
export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase());
    },1000);
}

export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    },1000);
}


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