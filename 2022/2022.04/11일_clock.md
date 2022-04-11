# 2022. 04. 11 Today I Learned

## 시계 만들기

- 시계를 만들 때 `interval` 이라는 개념이 사용된다고 합니다. 이게 뭘까요?

  - 매번 일어나야 하는 사건을 `interval` 이라고 합니다. 예를들면 "매 2초 마다" 가 있겠네요.

  - 즉, 일정한 간격마다 어떠한 사건이 일어나게 하고싶을 때 `interval`을 사용한다고 합니다.

```js
function sayHello() {
  console.log("hello!");
}

setInterval(sayHello, 3000);
```

- javascript 에서는 이렇게 사용합니다. `setInterval` 함수는 두 개의 아규먼트(인자)를 받습니다. 첫 번째는 실행시킬 함수, 두 번째는 그 간격입니다. 지금은 제가 3000이라고 적었는데요, 3000밀리초는 3초를 뜻합니다.

- 이렇게 되면 콘솔창에 3초마다 hello! 라는 문구가 찍힐겁니다.

---

`setTimeout` 이라는것도 배웠습니다.

- 이것도 똑같이 두 개의 아규먼트를 받습니다. 실행하고자 하는 함수, 그리고 밀리초 기준의 시간.

- 이렇게 실행하면 설정한 밀리초의 시간이 지난 후에 딱 한번만 함수를 실행합니다. 이것이 차이점이죠.

- 다만 시계를 만들때에는 한번만 실행하는 것이 아니라 지속적으로 계속 시간을 가져오는 것이 필요하기 때문에, `setInterval`을 사용합니다.

```js
function getClock() {
  const date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

setInterval(getClock, 1000);
```

- 간단하게 콘솔에 시계를 만들어봤습니다. 매 1초마다 콘솔에 새롭게 찍히고, 현재의 시간을 나타냅니다.

- 다만 이 코드의 단점은, 페이지가 새로고침된지 1초를 기다려야 시간을 알려주기 시작한다는 점입니다.

```js
function getClock() {
  const date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
getClock();
setInterval(getClock, 1000);
```

- 그래서 함수를 바로 실행해서 현재시간을 한번 보여준 후, 매 1초마다 시간을 갱신합니다.

  - 여기서 만족할수도 있겠지만, 시간이 10보다 적을 경우 01, 02가 아닌 1, 2로 표현됩니다.

  - 두 글자씩 있는게 미관상으로 편하니 한번 해보도록 할게요. 사실 제가 하는게 아니라 니꼬쌤이 하는걸 따라하는거긴 합니다만.

  - 나중에 제가 저의 웹사이트에 적용할 때 "이게 뭐였더라..." 를 시전하지 않도록 주석을 최대한 꼼꼼하게 달려고 노력하고 있습니다.

  - 주석같은거 적지 않아도, 써놨던 코드를 다시 보지 않아도 촤라락 하고 만들어버리는게 참 좋은 개발자겠지만, 그건 외우고다니는거잖아요.

    - 익숙해지면 누구나 가능한 일이라고 생각합니다. 저도 언젠간 가능하겠죠! 외우고 다닐만큼 코딩을 많이많이 해야겠지만요.

---

여기에 사용하는 것이 `padStart` 입니다.

```js
"1".padStart(2, "0"); // -> "01"
```

- 1 에다가 `padStart` 를 연결시킨겁니다. 첫 번째 아규먼트는 이 string이 몇 글자여야 한다는 것을 말해주는 것이고, 두 번째 아규먼트는 이 글자 수를 충족하지 못할 경우 앞에다가 추가할 문자를 적어주는겁니다.

- 자바스크립트가 참 편한걸 만들어놨죠. 이런 기능이 있다니! 어렵게 어렵게 조건문과 함수를 사용해 재현해낼수도 있겠지만, 이렇게 쉽게 이용할 수 있도록 만들어놨다면 그렇게 해야죠.

- `padStart`의 자매품으로 `padEnd` 라는것도 있는데요. `padStart`가 글자의 앞에 추가하는 것이라면 `padEnd`는 글자의 마지막에 추가하는 것입니다.

- 다만 `padStart`는 문자열에 적용 가능한 함수이기 때문에, 시계에서 얻은 숫자를 문자열로 바꿔주는 작업이 먼저 필요합니다.

```js
// 그냥 #clock만 적어도 무방하고, h2#clock으로 적어도 무방함.
const clock = document.querySelector("h2#clock");

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
```

- 이렇게 한번 정리해봤습니다. 확인해보니 시계는 정상적으로 돌아가는군요.
