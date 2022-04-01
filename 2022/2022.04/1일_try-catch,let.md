# 2022. 04. 01 Today I Learned

- 강사님께서 강의 도중 `try-catch`를 응용하셨습니다. 배운지 오래되기도 했으니, 한번 간단하게 복습을 해봅시다.

- `try-catch` 란?

  - [MDM Web DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) 를 읽으며 다시한번 복습을 해봤습니다.

    - 영어로 읽는걸 연습하고 있는데, 읽는속도가 느려져서 참 더디게 가고있다는 생각이 들긴 하지만.. 꾸준히 하는게 중요할 것 같습니다.

  - `try` 는 기본적으로 실행되는 블록, `catch` 는 `try` 에서 에러가 발생했을 때 실행되는 블록, `finally` 는 이 모든 작업이 다 끝난 이후에 실행되는 블록입니다. `finally` 의 경우 `try` 가 실행되었는지 `catch` 가 실행되었는지 여부와 상관없이 실행됩니다.

  - 이를 염두해두고 강사님의 예제를 한번 살펴봅시다.

```js
"use strict";

let sports = "soccer";
try {
  let sports = "basketball";
  console.log("try : ", sports);
  abc = error;
} catch (e) {
  console.log("catch : ", sports);
}

console.log("밖 : ", sports);

// [result]
// try :  basketball
// catch :  soccer
// 밖 :  soccer
```

- 여기서 하나 의문점이 드는게 있었습니다.

- 에러를 발생시켰는데 왜 `try` 안의 `console.log()` 는 작동하였는가?

  - 처음에 예상한 결과는, `try` 블록 자체를 실행시키지 않은 채 바로 `catch` 로 넘어갈 줄 알았습니다.

  - 제가 추측컨데, 그건 아마도 자바스크립트가 위에서 아래로 읽어내려가는 형태이기 때문인 것 같습니다.

    - 이를 확인하려면 코드를 어떻게 작성해야 할까요?

```js
let sports = "soccer";
try {
  let sports = "basketball";
  abc = error;
  console.log("try : ", sports);
} catch (e) {
  console.log("catch : ", sports);
}

console.log("밖 : ", sports);

// [result]
// catch :  soccer
// 밖 :  soccer
```

- 짜잔! `console.log()` 보다 에러 발생이 더 먼저 일어나게 만들어봤습니다.

- 예상되는 문제의 원인을 생각해보고, 그 원인이 정답이라면 정답에 맞는 결과가 출력되도록 수정을 해봤습니다.

- 아직 갈길이 멀었겠지만 그래도.. 하나씩 이해하고 있다는 느낌이 듭니다.

- 하여튼, 강사님께서 말씀하시고자 한건 블록을 기준으로 스코프가 다르다는 것입니다. 스코프가 다르면, 변수의 이름이 같아도 변수가 대체되지 않습니다.

  - `{}` 로 이루어진 코드블록(중괄호, `function`에서의 중괄호, `if`안의 중괄호)을 블록이라고 하고, 그 범위를 스코프라고 합니다. `let` 변수는 스코프를 갖는데, 스코프가 다르변 변수의 이름이 같아도 변수가 대체되지 않습니다.

  - 예제에서 확인할 수 있으신 것 처럼요!

  - 다르게 말하면, 스코프가 같으면 변수 이름을 같게 사용할 수 없습니다.

```js
let abc = 123;
let abc = 456;
// -> error!

let abc = 123;
abc = 456;

console.log(abc); // -> 456
```

---

-
