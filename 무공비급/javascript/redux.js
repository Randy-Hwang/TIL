// npm i @reduxjs/toolkit react-redux
// Redux 사용하기 -> 컴포넌트들 간에 프롭을 직접 전달해주지 않아도 리덕스가 전달해줌
// redux를 사용하려면 전달할 프롭들을 저장하는 store.js 파일 필요

// index.js 에는 <Provider store={store}> 로 감싸주기
// store는 import 해주어야 함. 이렇게 되면 store.js파일에 적어둔 state를 모든 컴포넌트에서 사용 가능
// state 만드는 법

// createSlice가 useState와 비슷한 역할.
// state의 이름과 기본값 필요.
import { configureStore, createSlice } from "@reduxjs/toolkit";

const example = createSlice({
  name: "name of state",
  initialState: "default value",
});

export default configureStore({
  reducer: {
    // 프롭으로 사용할 이름 : store.js에서 만든 state의 이름.reducer
    exampleForUse: example.reducer,
  },
});

// state를 사용할 파일에서는

const examplee = useSelector((state) => {
  return state;
});

// 이렇게 작성하면 store에 있던 모든 변수가 남음
// 사용하려면
examplee.exampleForUse;

// -----

const exampleee = useSelector((state) => {
  return state.exampleForUse;
});

// 이렇게 작성하면 exampleee에 exampleForUse가 들어가게 됨
// 중괄호 + return 생략가능
// 주의 : state를 컴포넌트 하나에서만 쓴다면 굳이 여기에 쓸 필요 없이 컴포넌트에서 직접 만들면 됨

// -------------

// redux에서 state를 변경하는 방법
// 1. state 변경하는 함수를 store.js 파일의 해당 state함수 안에 미리 만들어두기
// 2. export let { state변경함수이름 } = state이름.action 으로 export
// 3. useDispatch, state변경함수이름 import 후에 코드에 사용할때는 dispatch(함수이름())
// 변경대상이 array나 object일 경우 return 사용하지 않고 직접 수정
// 그래서 자료가 하나만 있더라도 return안써도 되는 편리성때문에 object로 만들기도

import { createSlice } from "@reduxjs/toolkit";

const cartItem = createSlice({
  name: "cartItem",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    plusItem(state, idx) {
      // 파라미터를 만들어두고 함수 안에서 사용할 때에는 .payload를 붙여줘야 함
      const item = state.find((i) => parseInt(i.id) === parseInt(idx.payload));
      item.count += 1;
    },
  },
});

export const { plusItem } = cartItem.actions;
// export default cartItem;

// 이렇게 하는 이유 -> state를 변경해주는 함수를 가져다 씀으로써 직접 state를 변경하지 않게 됨.
// 즉, state가 이상하게 변경될 경우 컴포넌트에는 잘못이 없고 state를 변경해주는 함수가 무조건 범인이라는 것.
