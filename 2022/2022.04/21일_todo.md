# 2022. 04. 21 Today I Learned

## Todo 만들기

다음주 화요일즈음 시험이 끝납니다. 그래서 다음주 중으로 이 크롬 클론코딩을 끝내고, 줌 클론코딩과 그림판 클론코딩, 유튜브 클론코딩을 수강할겁니다.

- 사실 이렇게 클론코딩을 수강한다고 해서 실력이 정비례로 올라가는건 아니지만, 일단은 실력을 다지기보다는 알아야 할 많은 것들을 알아야 할 시기라고 생각합니다. 일단 만들어보고, 일단 많은 함수들을 만들어봐야 어느정도 감이란게 잡히죠.

- 아기가 언어를 배울 때 처음부터 배우지 않고, 엄마아빠가 하는 말을 따라들으면서 배워가듯이 말입니다. 우선 그 언어에 익숙해지고 나서 ㄱ,ㄴ,ㄷ,ㄹ부터 배우기 시작하면 훨 익숙하니까요. 이렇게 공부하는게 맞겠죠? 제가 찾아볼 땐 어떻게 공부하라는 말 보다는, 일단 무언가를 만들어보고 배워보라는 말을 정말 많이 들었습니다. 직접 부딪히면서 배워보란 뜻이겠죠.

---

```js
function handleToDoSubmit(event) {
  event.preventDefault();
  // 사용자가 값을 입력하고 엔터를 눌렀을 때 입력칸이 비워지도록 만들기 -> 그전에 입력한 값을 저장하는 것은 필수!
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

// 브라우저에 투두를 그려주는 함수
function paintToDo(newToDo) {
  // li를 만들고 그 안에 span을 이용하여 요소를 만들어줄 것임. 삭제버튼도 만들 것이기 때문!
  const li = document.createElement("li");
  const span = document.createElement("span");
  // span에 내가 입력한 투두 입력
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", delTodo);
  // li 밑에 span과 버튼이 위치하도록
  li.appendChild(span);
  li.appendChild(button);
  // 투두와 버튼이 입력되어있는 li를 투두 리스트에 추가
  toDoList.appendChild(li);
}

// 브라우저의 투두를 삭제하는 함수
function delTodo() {
  console.log("it works!");
}
```

- 여기까지 만들면, 투두를 적어서 엔터를 누르면 새로운 투두리스트가 생기고, 버튼을 누르면 콘솔에 제가 적은 문장이 출력됩니다.

- 이제 저걸 콘솔로 찍은 문장이 아니라 투두를 삭제하도록 만들면 되는데, 문제가 하나 있습니다.

  - `addEventListener`를 사용해서 클릭 이벤트를 듣고있긴 하지만, 내가 어떤 투두에 대한 버튼을 클릭했는지는 알 길이 없습니다.

  - 이건 이벤트의 정보를 찾아보면 알 수 있습니다. `addEventListener`를 통해 듣게 된 이벤트에는 여러가지 정보가 저장되는데, 여기에 우리가 활용할만한게 있나봅니다.

  - `event.target` 이란 것이 사용됩니다. `event.target`은 클릭된 타겟이 어떤 프로퍼티들을 가지고있는지 보여줍니다. 개발자도구를 통해서 보면 많은 정보를 얻을 수 있습니다. 여기서 우리가 클릭한 요소가 무엇인지 특정지을 수 있는 정보를 얻을 수 있단 소리지요.

```js
// 브라우저의 투두를 삭제하는 함수
function delTodo(event) {
  // 이벤트가 발생한 타겟의 부모에게 접근 -> 타겟의 부모는 span과 button을 가지고 있는 li.
  const deleteLi = event.target.parentElement;
  // 그 li를 삭제하는 것.
  deleteLi.remove();
}
```

- 이 강의를 다 들으면 나중에 복습을 진행할 예정인데, 복습을 하루만에 다 할 수 있을까요? 있었으면 좋겠습니다.
