# 2022. 04. 09 Today I Learned

## Chrome Clone Coding

- 노마드코더의 크롬 클론 코딩을 시작했습니다. 자바스크립트를 공부한 것도 노마드코더의 클론코딩에서 배운 것이긴 하지만, 이제 정말 클론코딩을 시작해봐야죠.

- 잘 배워서 덕구스톡에도 적용시킬 날이 얼른 왔으면 좋겠습니다. 구현하고 싶은것이 많은데...

---

```html
<form id="login-form">
  <!-- required = 필수 입력 항목
        maxlength = 최대 길이 -->
  <input required maxlength="15" type="text" placeholder="What is your name?" />
  <button>Log In</button>
</form>
```

- `required` , `maxlength` 와 같은 태그를 이용하기 위해선 `<input>`이 `<form>` 안에 있어야합니다.

- 그리고 미리 만들어둔 로그인 버튼을 클릭하거나 엔터를 누를 때 마다 html이 자동으로 `submit` 을 실행시키고 있는데, 이는 브라우저를 새로고침하게 만듭니다.

- 우리는 최대한 새로고침이 없도록 하고싶습니다. 새로고침은 결국 브라우저의 모든 정보를 다시 불러와야하기 때문입니다.

```js
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", onLoginSubmit);
```

- 그래서 우리는 이런걸 만들었는데, `submit` 이라는 이벤트를 들을 수 있도록 설정합니다. `submit` 이벤트는 사용자가 로그인 폼을 엔터 혹은 클릭했을 때 발생합니다.

```js
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
}
```

- 그래서 우리는 이러한 코드를 추가했습니다. form을 제출했을 때 브라우저가 새로고침을 비롯한 기본적으로 프로그래밍된 동작들을 하지않도록 막는 코드입니다.

- 함수의 첫 번째 아규먼트(인자)는 무조건 이벤트에 대한 정보를 담아서 줍니다. 보통 event라고 적는것이 관례!

---

- 이제 필요없는 사항들을 지울 때, 두 가지 방법이 있습니다. html 태그 자체를 삭제하는 방법이 있고, CSS를 활용해 지우는 방법이 있습니다.

```css
.hidden {
  display: none;
}
```

- CSS에서 필요없어진 항목을 감추는 방법입니다.

- 이제 필요없어진 항목에 이 태그를 부여하면, 그 태그는 사라지게 되는겁니다.

---

- `username`을 받으면 존재하는 단점이, 웹페이지를 새로고침하면 기껏 받아놓은 `username` 이 사라진다는겁니다.

  - 안타깝게도 저의 웹사이트는 사용자의 이름을 다시 물어보겠죠.

  - 사용자의 이름을 저장할 수 있는 방법은, 데이터베이스를 이용하는것도 물론 좋겠습니다만, 저는 아직 백엔드를 배우지도 않았고 여기서 백엔드를 배울리도 없으니, `localStorage` 라는걸 이용합니다.

```js
// localStorage.setItem("username", username); -> 웹브라우저에서 이용가능한 아주 작은 DataBase
// 첫 번째 아규먼트는 key값, 두 번째 아규먼트는 value 값을 저장한다.
localStorage.setItem("username", username);
```
