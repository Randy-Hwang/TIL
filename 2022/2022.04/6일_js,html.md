# 2022. 04. 06 Today I Learned

## JavaScript와 HTML의 연결

- 콘솔 창에 `document` 라고 입력하면 html 내용들을 보여주는줄 처음 알았습니다. vscode로는 안되고 브라우저의 콘솔창으로만 되는거지만..

- 이걸 통해 html에 있는 내용을 자바스크립트를 통해 변경할 수 있는거군요. 자바스크립트 언어로 웹페이지를 어떻게 꾸미는지에 대해 의문점이 있었는데, 그 의문점의 큰 부분이 해결됐습니다.

  - html에 무언가를 만들어놓으면, 그 무언가를 자바스크립트로 불러오고, 거기서 함수와 같은 여러가지 작업을 통해 조절하는겁니다.

---

- `getElementById()` 라는걸 배웠습니다. html에서 id값을 가진 항목을 가져오는거라고요. 근데 자주 사용하진 않는다고 하십니다.

- 그래서 배운 것이 `getElementByClassName()` 입니다. 다만 이렇게 한다면 id처럼 그 항목을 받는게 아니라 배열로 받게됩니다. class는 여러개일 수 있으니까요.

- 다만 배열로 받게되면 객체에서 사용하는 여러가지 함수들을 사용할 수 없게 됩니다. 따라서, 자주 사용하는 것은 `querySelector()` 라고 하는겁니다.

  - `querySelector()` 는 자바스크립트 문법이지만, 내가 원하는 항목을 찾을 때 CSS 형식으로 찾을 수 있게 해줍니다. `querySelector(.hello h1)` 이라고 작성한다면, `className`이 hello인 태그 안에 있는 h1 태그를 가리키는 말입니다.

  - wow.. 그렇군요. 근데 자바스크립트 배우느라 html이랑 css를 많이 까먹었습니다. 줌 클론코딩 하면서 복습을 해봐야겠습니다.

    - `querySelector()`는 가장 첫 번째 것만 가져옵니다. 즉, 중복되는 태그가 있다면 그 중 제일 위에 있는 항목만 가져온다는 것을 의미합니다.

    - 만약 모두 가져오고싶다면 `querySelectorAll()` 이라고 작성하면 됩니다. 이렇게 하면 중복되는 모든 태그들이 들어가있는 배열을 반환합니다.

```html
<!-- html 문서 -->
<body>
  <script src="./index.js" defer></script>
  <div class="hello">
    <h1>Javascript Test</h1>
  </div>
</body>
```

```js
// javascript 문서
const text = document.querySelector(".hello h1");

text.innerText = "Hello";
```

- 이렇게 작성하면 `<h1>` 태그가 Hello로 바뀌게 됩니다. 정말 신기하네요.

- 제 생각에는 이것도 순서의 영향을 받을 것이라 생각했습니다. h1태그를 만들기 전에 자바스크립트를 먼저 호출했다면 아마 h1태그가 더 늦게 적용되니까 자바스크립트가 제 기능을 하지 못할 것이라 생각했는데..

  - 아니었습니다. 그렇다면 이게 어떻게 된 것이냐?

  - html 파일을 우선 다 불러옵니다. 그리고 나서 언급된 자바스크립트를 읽어내리는 것이겠죠. 그래서 아마 자바스크립트가 순서의 영향을 안받는게 아닐까 생각합니다.

```js
const text = document.querySelector(".hello h1");

function handleTextClick() {
  console.log("text was clicked!");
  text.style.color = "blue";
}

text.addEventListener("click", handleTextClick);
```

- 클릭 이벤트가 발생했을 때 변화를 어떻게 가져올 수 있는지 만들어봤습니다.

- 이걸 기반으로 하여 Single Page Application, SPA를 만들어내는 것일까요?

- 페이지를 html을 통해 이동하는게 아니라, 페이지를 갈아끼운다는 느낌으로 작동하는것이 SPA라고 알고있습니다.

  - 그렇다면, 미리 모든 페이지를 다 로딩해놓고, 어떠한 클릭이 일어나면 원래 페이지는 보이지 않게 처리하고, 보여야 하는 페이지를 보여주는 방식으로 작동하는 건가요?

  - SPA와 같이 계속 언급되는 것이 SSR 입니다. Server Side Rendering 인데, 요즘은 이 두 개를 같이 하는 것이 추세인 것 같습니다. 이를 어떻게 하는게 좋을지, 앞으로 배워나가는 것이 제가 필요한 학습의 범위인 것이겠죠.

---
