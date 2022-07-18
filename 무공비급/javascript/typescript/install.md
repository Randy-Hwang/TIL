npx create-react-app "appName" --template typescript

```tsx
//app.tsx
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;
```

```tsx
//Circle.tsx
import styled from "styled-components";

// interface 안에는 object shape를 적어준다. prop이 어떻게 생겨야 하는지 알려주는 것
interface ContainerProps {
  bgColor: string;
}

// styled-components가 typescript에서 어떻게 prop을 받아야 하는지
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
```
