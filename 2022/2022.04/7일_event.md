# 2022. 04. 07 Today I Learned

## addEventListener()

---

```js
// h1 변수화
const text = document.querySelector(".hello h1");

function handleTextClick() {
  console.log("text was clicked!");
}

// 마우스 인, 마우스 아웃 이벤트 리스너
function handleMouseEnter() {
  text.innerText = "I'm here!";
  console.log("Hi! Are you there?");
}
function handleMouseLeave() {
  text.innerText = "Goodbye!";
  console.log("See you!");
}
text.addEventListener("click", handleTextClick);
text.addEventListener("mouseenter", handleMouseEnter);
text.addEventListener("mouseleave", handleMouseLeave);

// 윈도우 사이즈 변경, 윈도우 복사 이벤트 리스너
function handleWindowResize() {
  document.body.style.backgroundColor = "gray";
}
function handleWindowCopy() {
  console.log("copy detected!");
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
```

- 다양한 이벤트 리스너들을 추가하고 있습니다. 이전에 자바스크립트를 배울 때에는 그냥 프로그래밍 언어 배우는 것 같아서 귀찮고, 딱히 큰 흥미가 없는 것 같고 그랬는데...

  - 이렇게 직접적으로 웹페이지에 영향을 미치는 활동들을 해보니 되게 재밌는 것 같습니다.

  - 그래도 프론트엔드가 나름 적성에 잘 맞는다는 뜻이겠죠..?

---

- 여기서 조금만 더 배우면 저의 덕구스톡을 한번 더 업그레이드 시킬 수 있을 것 같습니다. 다만 이미 html과 css로 덕지덕지 되어있기 때문에 이걸 정리하는데에도 많은 시간이 걸릴 것 같지만요,,

```js
// h1 변수화
const text = document.querySelector(".hello h1");

// 클릭으로 오렌지와 스카이블루를 왔다갔다 할 수 있음
function handleTextClick() {
  const beOrangeClass = "beOrange";
  // 변수를 생성하고 여기에 대해 오타가 난다면 자바스크립트에서 에러 발생
  // 그러나 raw string으로 계속 입력한다면
  // 오타가 발생하더라도 이를 오류로 생각하지 않고 제대로 작동하지도 않음
  // 즉, 개발자 입장에서 뭐가 잘못된건지 모른다는 것
  if (text.className === beOrangeClass) {
    text.className = "";
  } else {
    text.className = beOrangeClass;
  }
}

text.addEventListener("click", handleTextClick);
```

- 코드를 조금 더 깔끔하게 만들고, 오타 + 오류를 줄일 수 있는 방법에 대해 배웠습니다. 웬만한 것들은 다 변수에 넣어놓는 것이 좋다고요.

- 저 위의 코드들은 주석때문에 그렇게 깨끗해보이진 않지만.. 주석을 빼고 본다면 깔끔하기도 하고, 무엇보다 반복되는 단어들을 `raw string` 이 아닌 변수로 지정함으로서 오류를 방지했습니다.

  - 다만, 이렇게 작업하면 한가지 버그가 생기게 됩니다.

  - 위의 코드는 `className`을 아예 바꿔버리는 코드이기 때문에 만약 `beOrange`가 아닌 다른 클래스이름이 존재한다면, 그 클래스 이름을 지워버립니다.

```js
// 클릭으로 오렌지와 스카이블루를 왔다갔다 할 수 있음
function handleTextClick() {
  const beOrangeClass = "beOrange";
  if (text.classList.contains(beOrangeClass)) {
    text.classList.remove(beOrangeClass);
  } else {
    text.classList.add(beOrangeClass);
  }
}
```

- 그래서 등장한 방법은 바로 `classList`를 이용하는겁니다. 리스트에서 내가 원하는 항목만 집어넣고, 지우고를 반복할수가 있죠.

- 다만 이 방법은 개발자들이 너무너무너무너무너무너무너무너무 많이 하고있는 작업이기 때문에, `toggle()` 이라는 함수를 사용합니다. 이 함수는 제가 위에 작성한 코드와 완전히 똑같은 작업을 수행합니다.

  - `classList`에 원하는게 없으면 넣고, 있으면 빼주는거죠. 그걸 함수로 구현해놓은 겁니다.

```js
// 클릭으로 오렌지와 스카이블루를 왔다갔다 할 수 있음
function handleTextClick() {
  // 여기서는 beOrange를 한번만 사용하기 때문에
  // 따로 변수를 선언할 필요가 없음
  // raw string을 여러번 사용해야 할 때 변수를 이용하는 것
  text.classList.toggle("beOrange");
}

text.addEventListener("click", handleTextClick);
```
