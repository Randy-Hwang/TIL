```tsx
// typescript는 useState의 기본값을 바탕으로 counter와 setCounter에 어떤 값이 들어가야하는지 추론한다.
const [counter, setCounter] = useState(1);
setCounter("hello"); // error
```

만약 number 또는 string이 될 것이라고 미리 알려주고 싶다면,

```tsx
const [counter, setCounter] = useState<string | number>(1);
setCounter("hello"); // No Erroro
```

---

```tsx
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  // onchange 함수가 react.formevent<HTMLinputelement> 에서 이벤트가 발생할 것임을 명시
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  // event.preventDefault() 같은것도 자동완성이 되고, 오타가 나면 typescript에서 에러를 발생시켜줌
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("HEllo " + value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default App;
```
