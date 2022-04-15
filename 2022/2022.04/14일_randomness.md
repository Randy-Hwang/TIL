# 2022. 04. 14 Today I Learned

## Randomness with English quotes.

- 이번엔 브라우저의 아래쪽에 명언을 한번 표시해보도록 할겁니다. 우선 10개 정도의 명언을 새로운 js파일에 배열로 만들어줍니다.

```js
const quoteArray = [];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
```

- 명언은 열개 정도 넣었는데, 여기서 굳이 보여줄 필요도 없고 코드 길이가 너무 길어져서 생략했습니다. 그리고 각각 명언과 그 저자를 html에 입력하게 도와줄 변수도 두 가지 선언해줍니다.

---

- 그리고 이제 랜덤에 대해 배울 차례입니다. 랜덤이 머 그냥 배열 속에서 랜덤하게 하나 뽑아주는거겠지 특별한거 있나? 싶은 생각을 가지며 들었습니다.

- 랜덤성을 부여하기 위해서 자바스크립트에 이미 내장되어있는 Math 함수를 사용합니다.

- `Math.random()` 이라고 적으면 0에서 1 사이의 숫자 중 랜덤한 수를 반환합니다. 엄청나게 긴 소수점을 가지고 있어요.

- 우리는 0부터 9까지의 랜덤한 정수가 필요하니, 이를 가공할 필요가 있습니다.

- `Math.floor(Math.random() * quoteArray.length)` 이렇게 말입니다. `Math.floor()`같은 경우에는 소수점 이하를 버림하는 함수입니다. 반올림해주는 함수인 `Math.round()`도 좋아보였는데, 왜 버림을 사용했는지는 아직 의문입니다.

```js
const quoteArray = [];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
```

- 그래서 완성본은 위와 같습니다. 각각의 기능들이 간단한 기능만을 가지고있다보니 짧은 코드로 이루어진 파일들이 다수로 만들어지는 느낌이네요.

- clock과 quote 정도는 하나의 파일로 합쳐도 될 것 같은 기분이 드는데, 그래도 각각의 기능들에 나중에 추가 기능을 넣고, 제대로 유지보수를 하기 위해서는 이렇게 파일들을 나눠놓는 것이 좋겠죠?
