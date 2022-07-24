import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// Box의 모든 속성을 들고오면서 밑에 적힌내용이 추가됨
// 다만, Button을 이렇게 들고온다던지 하면 button이라는 html태그의 속성 또한 가지고오게 됨
const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;

//--------------------------------------------

// 단순히 요소의 추가 없이 html태그만 바꾸고싶을 때
const Father2 = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

function App() {
  return (
    <Father2>
      <Btn>Login</Btn>
      <Btn as="a" href="#">
        Go somewhere
      </Btn>
    </Father2>
  );
}

// ---------------------------------------

// 여러개의 input을 동시에 만들어야 할 때, attrs를 사용하면
// 많은 html태그에다가 똑같은 속성을 모두 부여할 수 있다.
// <Input /> 이라고 작성한 html요소에는 모두 required: true 속성이 들어가게 된다.
const Input = styled.input.attrs({ required: true })`
  background-color: gray;
`;

// --------------------------------------

// 전역으로 적용되는 styled-compoenets를 만들어야 할 때

const GlobalRouter = createGlobalStyle``;
