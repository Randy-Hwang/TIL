
(컴포넌트이름).module.css 
 이렇게 css파일 이름을 작명하면 그 파일에만 종속되는 css파일을 만들 수 있음. 
 import HeaderCss from "./bg.module.css"; 
  리액트에서 사용할 때 : classname={HeaderCss.classname}

```css
.classname {
  /* 리액트에서 classname을 모듈이름을 붙인채로 만들어야 정상적으로 적용이 됨 */
  background-color: skyblue;
}
```
