`clock` 기능을 만든걸 한번 복습해보도록 하겠습니다.

- 원래는 니꼬선생님의 복습강의를 같이 들으면서 복습 TIL을 작성했습니다만, 이번에는 제가 써놓은 주석들과 코드들을 한번 슥 훑어보며 복습한 후 강의를 들으며 다시한번 복습해보도록 하겠습니다.

```html
<h2 id="clock"></h2>
<script src="./js/clock.js"></script>
```

- html에 시계를 넣기 위해 추가한 두 문장입니다. 원래는 `<h2 id="clock">00:00:00</h2>` 으로 되어있었는데요, 이걸 기본값, default value 라고도 하죠. 이걸 지웠습니다.

- 새로고침을 여러번 누를 때 마다 아주 잠깐이지만 00:00:00이 번쩍 하고 나타났다가 원래 시간이 표시되는데, 은근 거슬립니다.

- 디폴트값을 없애면 그런 상황 없이 바로 현재 시간이 표시됩니다.

```js
// 그냥 #clock만 적어도 무방하고, h2#clock으로 적어도 무방함.
const clock = document.querySelector("#clock");

// 시:분:초를 보여주는 시계 함수
function getClock() {
  const date = new Date();
  // String으로 시, 분, 초를 각각 얻고, padStart를 활용하여 01, 02, 03과 같은 형식으로 표현한다.
  // padStart(글자의 수, 부족할 때 채워넣을 글자)
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
//일정간격마다 함수 실행. 첫번째 아규먼트는 실행할 함수, 두 번째 아규먼트는 간격을 밀리초 단위로 적어놓은 것.
setInterval(getClock, 1000);
```

- `clock.js` 파일 내부 코드입니다. 나중에 시간이 지나서 보더라도 이해할 수 있도록 주석을 조금 추가해두었습니다.

- 우선 html에서 어느 부분에 시계를 추가할지 정하기 위해 `const clock = `으로 미리 html에 만들어두었던 h2태그를 언급해줍니다. id값으로 `clock`을 주었으니 저렇게 적어도 됩니다.

- 맨 밑 부터 보겠습니다.

```js
getClock();
//일정간격마다 함수 실행. 첫번째 아규먼트는 실행할 함수, 두 번째 아규먼트는 간격을 밀리초 단위로 적어놓은 것.
setInterval(getClock, 1000);
```

- 이 부분 말입니다. `getClock();`으로 함수 자체를 맨 처음에 한번 실행시키고 나서 `setInterval(getClock, 1000);` 으로 1초마다 `getClock()` 함수가 실행되도록 설정했습니다.

- 위에 `getClock();`으로 함수 자체를 맨 처음에 한번 실행시키지 않으면, 페이지가 새로고침 되었을 때 1초 후에 시계가 작동합니다. 우리는 새로고침이 되자마자 시계가 정상적으로 작동하길 바라죠.

- 이제 함수 안을 들여다보도록 하겠습니다.

```js
const date = new Date();
// String으로 시, 분, 초를 각각 얻고, padStart를 활용하여 01, 02, 03과 같은 형식으로 표현한다.
// padStart(글자의 수, 부족할 때 채워넣을 글자)
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
clock.innerText = `${hours}:${minutes}:${seconds}`;
```

- 주석만 봐도 대충 알겠습니다 이젠.

  - `const date = new Date();` 는 시간을 받아서 변수로 저장하는 겁니다. 컴퓨터가 주는 시간은 밀리초 기준으로 되어있기때문에 가공이 필요합니다.

  - 가공하는 부분이 `hours`, `minutes`, `seconds` 입니다. 각각 문자열로 해당하는 시간을 받고, 거기에 `padStart`를 활용하여 두글자를 기본값으로 만들어주도록 합니다.

  - 이렇게 다 가공한 시, 분, 초를 각각 변수에 집어넣고, `clock.innerText`를 통해 h2에 집어넣어주도록 합니다.

  - 시계 완성!

  - 코드의 양이 적어서 그런가 되돌아보면 정말 별거없는 것 같고, 정말 금방 만들었습니다.

  - `new Date()`, `getHours`, `padStart` 같은 함수들을 미리 알고있었으면 편하게 만들 수 있었겠다는 생각이 들었습니다.

    - 코딩이라는게 적재적소에 코드들을 적절히 집어넣는것도 중요하지만, 이렇게 적절히 사용할만한 빌트인 함수들을 외우고 있는것도 중요하다고 생각합니다.
