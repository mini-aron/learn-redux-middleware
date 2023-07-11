import { handleActions } from "redux-actions";
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

//액션타입 선언
//한 요청당 세 개를 만들어야함

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

// thunk 함수 생성
// thunk 함수 내부에서는 시작할 때 , 성공했을 때, 실패했을 때 다른 액션을 디스패치 한다.

// export const getPost = id => async dispatch => {
//     dispatch({ type: GET_POST }); //요청을 시작한걸 알림
//     try {
//         const response = await api.getPost(id);
//         dispatch({
//             type: GET_POST_SUCCESS,
//             payload: response.data
//         });
//     } catch (e) {
//         dispatch({
//             type: GET_POST_FAILURE,
//             payload: e,
//             error: true //에러발생
//         }); //나중에 컴포넌트 단에서 에러를 조회할 수 있게 해 줌
//         throw e;
//     }
// };

// export const  getUsers = () => async dispatch => {
//     dispatch({ type: GET_USERS }); //요청을 시작한걸 알림
//     try {
//         const response = await api.getUsers();
//         dispatch({
//             type: GET_USERS_SUCCESS,
//             payload: response.data
//         }); //요청성공
//     } catch (e) {
//         dispatch({
//             type: GET_USERS_FAILURE,
//             payload: e,
//             error: true
//         }); //에러발생
//         throw e; //나중에 컴포넌트 단에서 에러를 조회할 수 있게 해 줌
//     }
// }

export const getPost = createRequestThunk(GET_POST,api.getPost);  
export const getUsers = createRequestThunk(GET_USERS,api.getUsers);   //완전 줄어듬!!!!!!


//초기상태를 선언 
//요청의 로딩 중 상태는 loading이라는 객체에서 관리한다.

const initialState = {
    post : null,
    users: null,
};  //smaple에 있던 loading이 따로 분리됨

const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state,action) => ({
            ...state,
            post: action.payload //받아온 데이터 삽입
        }),
     
        [GET_USERS_SUCCESS]: (state,action) => ({
            ...state,
            users: action.payload
        }),
    },
    initialState
);

export default sample;