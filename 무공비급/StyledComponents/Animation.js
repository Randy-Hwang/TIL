import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  } 50% {
    border-radius: 100px;
  } 100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1s linear infinite;
  // 자식 요소를 이런 방식으로 선택할 수도 있다.
  // span{} 이런식으로 적용하면 Box 밑에 있는 span을 선택하게 된거고,
  // 아래와 같이 따로 컴포넌트를 만들어 여기에 넣어줄수도 있다. 그렇게되면 그 컴포넌트가 span이던 p던 div이던 상관없음
  ${Emoji} {
    // Box 컴포넌트 아래에 Emoji라는 컴포넌트가 있을 때에만 작동
    &:hover {
      // = span:hover. 이런 방식으로 수도 선택자도 가능하다.
      font-size: 96px;
    }
    &:active {
      // 클릭하고있으면 active, 아니면 inactive
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🥰</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
