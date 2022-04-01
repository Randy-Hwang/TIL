# 2022.03.20 Today I Learned

## try-catch-finally

- try-catch-finally 라는 문법을 배웠습니다. 강사님이 설명을 되게 슈슈슉 빠르게 하고 지나가셔서,

  - 이해하지 못하거나 처음 보는 문법이 나왔을 경우 강사님이 이해시켜주실 때 까지 기다리지 말고, 강의를 멈추고 직접 해봐야 하는 것 같습니다.

  - 고등학생 때나 대학생때나 선생님이나 교수님께 "이부분을 잘 모르겠다" 라고 물으면 항상 친절하게 이해시켜주셨었는데, (교수님은 분위기 살피기 필수) 인터넷 강의는 이게 안되다 보니 저 스스로 해야합니다.

  - 멈추고 제가 직접 이해해야 한다는걸 이제서야 깨달은 저도 참 우습군요.

```js
var sports;

try {
  sports = ball;
} catch (error) {
  console.log("error occurred!");
} finally {
  console.log("calculated.");
}
```

- sports에 ball을 할당하는걸 try합니다. 다만 ball 이라는 변수가 선언되어있지 않기때문에 에러가 발생하게 되는데, 이 때 catch가 시행되어 로그에 `error occurred!` 가 찍히게 됩니다.

- finally 부분은 에러 발생 여부와 상관없이 실행되는 블록이기 때문에 `calculated` 또한 실행됩니다.

  - 여기서 드는 궁금점은, catch문 안에 괄호에 error가 아니라 다른걸 넣어도 정상적으로 작동할까? 싶어서 good을 넣어봤습니다. 결과론적으로는 정상적으로 잘 작동합니다.

  - 그렇다면 catch문에서 괄호의 역할은 무엇인가? **_괄호 안에 어떤 식별자를 넣던 간에 '에러가 발생하는 것'이 catch문 실행의 조건이라면 식별자는 필요없는 것 아닌가?_** 싶은 생각이 들었습니다.

    - 그래서 mdn에 들어가서 한번 찾아봤습니다. 아래에 링크 달아놓겠습니다.

    - [ >>> mdn : try-catch-finally <<<](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

- 요즘 영어공부한다고 mdn도 영어로 읽어보고 뜻을 알아보려 하고 있습니다. 어차피 더 좋은 개발자가 되기 위해선 아직 번역이 되지 않은 영어 문서도 읽을 날이 올텐데, 미리 영어공부 하는것도 나쁘진 않죠.

- 영어공부를 이렇게 실전으로 하려니 참 빡세긴 합니다. 코딩 내용도 이해해야하지, 영어도 이해해야하지. 후회가 막심하고 한국어로 언어를 바꾸고싶다는 생각이 절실하지만...

  - 나중에 번역기가 너무나도 좋아져서 이젠 외국 언어를 공부하지 않아도 번역기로 즉석통번역이 문제없이 가능하게 되면, 그때는 영어공부를 하지 않아도 되겠지만..

  - 향후 3~5년, 아니 적어도 제가 취업할 때에는 아직 그게 상용화되지 않을테니 일단은 영어공부를 열심히 해두는 게 맞지요. 나중에 번역기를 사용못한다 하더라도 제가 직접 번역을 해야할 일이 있을수도 있고요.

- 그래서 mdn을 읽다보니 catch의 식별자의 활용방법을 하나 찾았습니다.

- You can create "Conditional `catch`-blocks" by combining `try...catch` blocks with `if...else` structures, like this:

```js
try {
  myroutine(); // may throw three types of exceptions
} catch (e) {
  if (e instanceof TypeError) {
    // statements to handle TypeError exceptions
  } else if (e instanceof RangeError) {
    // statements to handle RangeError exceptions
  } else if (e instanceof EvalError) {
    // statements to handle EvalError exceptions
  } else {
    // statements to handle any unspecified exceptions
    logMyErrors(e); // pass exception object to error handler
  }
}
```

- else if와 조합하여 조금 더 섬세한 에러 핸들링을 하고싶을 때 이 식별자를 사용할 수 있군요.
