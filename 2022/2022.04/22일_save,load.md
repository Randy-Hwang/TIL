# 2022. 04. 22 Today I Learned

## Save, Load To Dos

- 오늘의 진도입니다. 저번에는 todo를 만들고, 엑스 버튼을 누르면 내가 누른 투두가 사라지는 것 까지 진도가 나갔습니다.

- 그렇다면 이제 내가 만든 투두를 저장하고, 불러오는 작업까지 해보겠습니다. 사실 제 생각에는 아마 브라우저에 내장되어있는 로컬 스토리지를 사용하지 않을까요? 브라우저에 이름을 입력해서 이름을 저장할 때에도 로컬 스토리지를 활용했으니까요. 투두같은 짧고 간결한 문자열은 여기에 저장해도 문제는 없을 것 같습니다.

```js
// 입력해둔 투두를 저장하고 불러오기 위한 배열
const toDos = [];

function handleToDoSubmit(event) {
  event.preventDefault();
  // 사용자가 값을 입력하고 엔터를 눌렀을 때 입력칸이 비워지도록 만들기
  // 그전에 입력한 값을 저장하는 것은 필수!
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  // 저장과 불러오기를 위해 투두를 배열에 추가
  toDos.push(newToDo);

  // 저장 후에 투두리스트가 브라우저에 나타나도록 함수 호출
  paintToDo(newToDo);
}
```

이렇게 만들었습니다... 만. 문제가 하나 있습니다. 로컬 스토리지는 문자열만 넣을 수 있을 뿐, 배열을 넣진 못합니다.

- 여기서 사용하는 것이 `JSON.stringify()`입니다. 괄호 안에 인자로 넣는 것을 문자열로 바꿔줍니다.

  - 이렇게 하면 생기는 또다른 문제점이, 배열을 문자열로 저장하면 배열에서 수행할 수 있는 많은 함수들을 사용하지 못하게 된다는 것입니다.

  - 여기서 다시금 사용하는 것이 `JSON.parse()` 입니다. 여기에 문자열로 변해버린 배열을 넣으면 그것을 다시 배열이라는 오브젝트로 만들어서 반환합니다.

```js
const toDoForm = document.getElementById("todo-form");
// 이미 찾아놓은 요소 안의 또다른 요소를 찾고자 할 때
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

// 입력해둔 투두를 저장하고 불러오기 위한 배열
// 이전에 로컬스토리지에 저장된 값도 불러와 업데이트 할 수 있도록 let으로 변수 선언
let toDos = [];

// 투두를 저장하기 위한 함수
function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault();
  // 사용자가 값을 입력하고 엔터를 눌렀을 때 입력칸이 비워지도록 만들기
  // 그전에 입력한 값을 저장하는 것은 필수!
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  // 저장과 불러오기를 위해 투두를 배열에 추가
  toDos.push(newToDo);

  // 저장 후에 투두리스트가 브라우저에 나타나도록 함수 호출
  // + 로컬스토리지에 저장하도록 함수 호출
  paintToDo(newToDo);
  saveToDo();
}

// 브라우저에 투두를 그려주는 함수
function paintToDo(newToDo) {
  // li를 만들고 그 안에 span을 이용하여 요소를 만들어줄 것임. 삭제버튼도 만들 것이기 때문!
  const li = document.createElement("li");
  const span = document.createElement("span");

  // span에 내가 입력한 투두 입력
  // 삭제 기능을 위한 X버튼 추가
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
function delTodo(event) {
  // 이벤트가 발생한 타겟의 부모에게 접근 -> 타겟의 부모는 span과 button을 가지고 있는 li.
  const deleteLi = event.target.parentElement;

  // 그 li를 삭제하는 것.
  deleteLi.remove();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 로컬 스토리지에 저장된 투두를 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);

// 로컬 스토리지에 아무것도 없다면 Null이 반환됨.
// 따라서 조건문을 활용하여 로컬스로티지에 문자열로 저장되어있는 투두를 배열로 바꾸기
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);

  // 브라우저를 새로고침할 때 마다 이전에 있던 값을 덮어쓰지 않도록 toDos 값을 업데이트해주기
  toDos = parsedToDos;

  // 배열에 저장되어있는 각각의 아이템에 대해서 함수를 실행시켜주는 forEach()
  parsedToDos.forEach(paintToDo);
}
```
