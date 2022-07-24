styled-components theme과 typescript 연결하기

$ npm install @types/styled-components

그리고 declearation file을 만들어야 함. src폴더 안에 `styled.d.ts` 파일 생성

```ts
// styled.d.ts
import "styled-components";

declare module "styled-components" {
  // shape of my theme
  // 내 테마가 가질 속성은 어떤 것인가?
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
```

이렇게 테마의 속성을 정했다면 styled.ts 파일을 src폴더안에 만든 후에

```ts
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
  btnColor: "tomato",
};

export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
  btnColor: "teal",
};
```

---

이제 적용을 시켜주어야 함

```tsx
// index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { lightTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

이렇게 되면 `ThemeProvider`아래에 있는 모든 컴포넌트는 theme을 참조할 수 있게 된다

```tsx
// App.tsx
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>Fully Protected</H1>
    </Container>
  );
}

export default App;
```
