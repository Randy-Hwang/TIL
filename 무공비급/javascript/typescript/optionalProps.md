```tsx
// interface 안에는 object shape를 적어준다. prop이 어떻게 생겨야 하는지 알려주는 것
interface CircleProps {
  bgColor: string;
  // 물음표를 붙이면 optional prop 취급을 받는다.
  borderColor?: string;
}

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  // borderColor의 경우 Circle에는 optional이지만 Container에는 필수값이기 때문에,
  // 사용자가 prop을 주지 않았을 때 설정할 기본값을 ~~~ ?? "" 로 설정한다.
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}
```
