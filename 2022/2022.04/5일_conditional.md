# 2022. 04. 05 Today I Learned

- 오늘은 조건문에 대해서 배웠습니다. 조건문이 영어로 `conditional` 이라는것도 처음 알았네요. 전공영어는 항상 어렵습니다.

- 제가 비전공자(컴공아님)인데, 제 과에서도 영어로 무언가를 읽으면 항상 단어가 너무 어려워서 읽기 힘들더군요..........

---

- 조건문을 이용해서 나이 계산기를 만들어보려고 합니다. 그 과정에서 `prompt()` 라는걸 배웠습니다. 아주아주 오래된 기술이라 지금은 아무도 사용하지 않지만, 저같이 그냥 간단하게 뭐 해볼때에는 사용자 입력값을 받을 때에 적절한 함수인 것 같습니다.

- 다만 이걸 vscode의 coderunner (node.js) 로 돌려보니 에러가 나더군요. `prompt is not defined` 라고 하면서요.

- 아무래도 브라우저에서 입력값을 받는거다 보니 node에서는 지원해주지 않는걸까요?

- 약간 귀찮게 됐습니다. html 파일에 js를 연결하고, 그걸 브라우저로 열어서 확인을 해야하니까요.

- 그냥 나이 계산기는 좀 식상하니, 그래도 이것저것 살을 덧붙여서 만들어보려고 합니다. 아마 그 편이 더 나을거에요.

```js
const age = parseInt(prompt("how old are you?"));

console.log(typeof age);
console.log(age);
```

- 간단하게 이렇게 만들어봤는데, 벌써 문제가 발생했습니다.

- 첫 번째 경우는 입력값으로 `string` 을 입력했다는 것 입니다.

  - 'hi' 를 입력했습니다. 숫자가 아니죠.

  - 그러나 `typeof age` 는 `number` 라고 반환해줬습니다.

  - 근데 그냥 `age` 를 출력해보니 `NaN` 이라고 하더군요.

  - 타입은 숫자라면서 그냥 출력해보니 숫자가 아니라고 하다니. 이게 무슨 밀당인가요?

```js
const age = parseInt(prompt("how old are you?"));

if (isNaN(age)) {
  console.log("please write a number");
} else if (age < 18) {
  console.log("you CAN NOT drink alcohol");
} else if (18 <= age <= 50) {
  console.log("you can drink alcohol");
} else {
  console.log("you should stop drinking alcohol");
}
```

- 약간 더 업그레이드 한겁니다. 다만 여기서 의문점이,

- 자바스크립트는 `18 <= age <= 50` 이 문장을 이해하지 못하나요? 가르쳐주시는 강사님께서는 `age >= 18 && age <= 50` 이라고 작성했습니다.

- `18 <= age <= 50` 이렇게 작성했을 때에는 나이를 123세라고 입력했을 때 `else` 블록이 실행되지 않았습니다. 즉, 123세도 `true` 값을 반환했다는 소리이기 때문인데... 왜 그런걸까요.

- 파이썬에서는 저 조건이 잘 작동했던 것 같은데, 자바스크립트는 대소비교가 중복으로 이루어지면 안되는건가요?
