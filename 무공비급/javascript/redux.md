## 설치 : npm i @reduxjs/toolkit react-redux

Redux 사용하기 -> 컴포넌트들 간에 프롭을 직접 전달해주지 않아도 리덕스가 전달해줌
redux를 사용하려면 전달할 프롭들을 저장하는 store.js 파일 필요

```js
// index.js
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
```

## state 생성

```js
// createSlice는 import 필요
let user = createSlice({
  name: "user",
  initialState: "kim",
});
```

## state 등록

```js
export default configureStore({
  reducer: {
    user: user.reducer,
  },
});
```

작명 : createSlice로만든거.reducer

## state 사용

```js
import { useSelector } from "react-redux";

function Cart() {
  let a = useSelector((state) => {
    return state;
  });
}
```

- return과 중괄호는 동시에 생략 가능하다.

- object로 export 했으므로 사용할때에도 a.name 과 같은 형식으로

## state 수정

state를 수정하는 함수를 먼저 만들어두어야 함
createSlice 함수 안에 reducers : {}로 만듬

```js
let user = createSlice({
  name: "user",
  initialState: "kim",
  reducers: {
    changeName(state) {
      return "john " + state;
    },
  },
});
export let { changeName } = user.actions;
```

return부분이 원래 state를 바꿔줌
변수명.actions 는 이 state의 모든 상태변경 함수를 말함

```js
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./../store.js";

<button
  onClick={() => {
    dispatch(changeName());
  }}
>
  버튼임
</button>;
```

다른 컴포넌트에서 사용할 때에는 dispatch()안에서 사용해야함
