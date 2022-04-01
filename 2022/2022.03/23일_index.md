# 2022. 03. 23 Today I Learned

## indexOf 공부하기

- 제가 듣는 인강의 강사님께서 이번에는 문제가 아닌 생각할거리를 주셨습니다.

- 강의에서 `indexOf` 와 `lastIndexOf` 라는걸 배웠는데, 여기서 발생 가능한 케이스를 적고 그 결과가 무엇인지 예측, 코드를 작성해보라고 합니다.

- 다만... 웬만한 케이스들은 강사님께서 강의시간에 다 가르쳐주시기도 했고, 더 적을만한게 있을까요? 한번 생각해보겠습니다.

- 값이 없으면 -1을 반환한다고 했습니다.

[undefined 입력]

```js
let indexTest = "123123";

console.log(indexTest.indexOf(undefined)); // -> -1
```

- `undefined` 를 검색하라고 했을 땐 -1이 나오는군요. -1 이 아니라 에러가 발생할만한 입력값이 없을까요?

[가나다 입력]

```js
let indexTest = "123123";

console.log(indexTest.indexOf(가나다));
// ReferenceError: 가나다 is not defined
```

- 찾아내긴 했습니다만... 이건 정확히 말하자면 indexOf의 오류가 아닙니다. 가나다에다가 따옴표를 적지 않았으니 변수 취급을 했을텐데, 가나다에 대한 변수 선언을 하지 않았으니 에러가 났겠죠?

- 그렇다면 이건 indexOf에서 에러가 발생한 것이라고 할 수는 없습니다.

  - 이쯤되면 드는 생각이, 에러를 발생시키지 않는거 아닐까요? 인덱스에 있으면 그걸 반환하면 되고, 없으면 -1을 반환한다고 하였으니.

  - 다른 어떠한 경우에도 -1을 반환한다고 한다면 어떤 오류가 날만한 값을 넣어도 -1만을 반환하니까요.

  - 함수 잘 만들었군요.

- 이번에도 어김없이 [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) 에 들어가서 한번 구경해봤습니다. 영어공부도 할 겸 말이죠.

- 거기서 재미있는 예제를 봤습니다.

```js
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(
  `The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`
);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(
  `The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1
  )}`
);
// expected output: "The index of the 2nd "dog" is 52"
```

- `indexOf` 를 활용하는 코드인데, 그 사용방식이 꽤나 인상깊습니다.

- 위에 제가 적어놓은 예시를 보시면 아시겠지만 아주 일차원적으로 `indexOf` 를 사용하고 있었습니다.

  - 그러나 이 예제를 보시면, 내가 각각 찾고자 하는 것들을 변수로 지정해놓고, `indexOfFirst` 와 같이 두 번째 `dog` 를 찾기위한 기반도 미리 마련해놨습니다.

  - 그리고 이를 적절히 활용하는데, 이것이 인상깊었습니다.

  - 재사용 가능한 코드라는게 이런건가 싶기도 합니다. 저렇게 변수를 선언해놓으면 얼마나 긴 문장이 이어진다 하더라도 `indexOfSecond` , `indexOfThird` 등등 변수들을 다시금 생성해내며 수많은 `dog` 들의 인덱스를 다 찾아낼 수 있을테니까요.

    - 이쯤되면 한가지 의문점도 듭니다.

    - 어떤 문자열 안에 내가 찾고자 하는 단어를 모두 찾아내 그 번호와 인덱스를 배열로 정리해주는 함수는 없을까요?

    - [5, 10, 24] -> 이런 식으로 말이죠.

- 또 [MDN을 돌아다니다가](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search) 재밌는걸 찾았습니다.

  - 바로 `search` 라는건데요. indexOf와 똑같은 역할을 수행하는 것 같습니다.

  - 똑같이 찾으려고 하는거 인덱스 반환하고, 없으면 -1 반환하고. 똑같은줄 알았는데 다른걸 하나 찾아냈습니다.

```js
let indexTest = "123123";

console.log(indexTest.search(undefined)); // -> 0
console.log(indexTest.indexOf(undefined)); // -> -1
```

- `undefined` 를 검색했을 때 결과값이 다르다는 것입니다. 왜 이런건가요? MDN의 설명서를 읽어보면, 이 차이점에 대해서는 설명되어있지 않습니다.

- 왜.. 없는걸까요?

- `See Also` 라고 해서, 사이트의 맨 밑에 같이 보면 좋은 것들을 사이트가 추천해주기도 하는데, `indexOf` 와 `search` 가 서로가 서로를 추천해주고 있지 않습니다.

- 이런걸 보면 뭔가 용도가 다른 함수인 것 같은데... 차이점을 도저히 못찾겠군요. 흑...

  - 저도 이런걸 마음껏 물어볼 수 있는 사람이 생겼으면 좋겠습니다. 물론 항상 밥이나 커피는 제가 사야겠지만요,,
