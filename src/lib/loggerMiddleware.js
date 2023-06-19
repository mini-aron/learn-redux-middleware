import { act } from "react-dom/test-utils";

const loggerMiddleware = store => next => action => {
    //미들웨어 기본구조
    console.group(action && action.type); //액션타입으로 log정의
    console.log('이전 상태',store.getState());
    console.log('액션',action);
    next(action);  //다음 미들웨어 혹은 디류서에게 전달
    console.log('다음상태',store.getState()); //업데이트된 상태
    console.groupEnd(); //그륩끝
};

export default loggerMiddleware;