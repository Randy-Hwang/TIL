# 2022. 04. 20 Today I Learned

## Setup

어제 하소연으로 til을 때웠으니 오늘은 조금이라도 코딩을 해보도록 합시다.

```js
const toDoForm = document.getElementById("todo-form");
// 이미 찾아놓은 요소 안의 또다른 요소를 찾고자 할 때
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  // 사용자가 값을 입력하고 엔터를 눌렀을 때 입력칸이 비워지도록 만들기 -> 그전에 입력한 값을 저장하는 것은 필수!
  const newToDo = toDoInput.value;
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
```

- todo.js 라는 파일에 여기까지 코딩을 해놓았습니다.

- 바로 내일이 시험이라, 노마드코더의 강의를 한 강 씩 밖에 듣지 못하고있습니다. 코딩에 시간을 하루에 10분정도 쓴다는건데,

- 반성해야겠습니다. 다만 아무리 그래도 시험을 계속 0점을 받고 그러면 F를 받을수도 있으니.. 최소한의 공부는 해야합니다. 시험 바로 전 날이면 하루종일 해도 그럴만하죠.

- 내일 더 많은 분량을 공부해보도록 하겠습니다.
