const { useTransition, useDeferredValue } = require("react");

// npm i react-router-dom
const navigate = useNavigate();
// -> navigate("/") => 홈으로 이동. 페이지를 이동시켜주는 역할
{
  onclick(() => navigate("/"));
} // 클릭 이벤트가 발생할만한 곳에 이렇게 자주 사용한다.
<Routes>
  <Route path="/edit" element={<Edit />}>
    <Route path="user" element={<EditUser />} />
    {/* Routes 안에 Route 작성. Route안에 Route작성하면 Nested Routes. /edit/user 페이지를 의미한다. */}
    {/* edit과 user의 요소가 모두 나타난다. */}
    {/* edit 컴포넌트에 <Outlet></Outlet> 태그를 달아두면 그 공간에 user 컴포넌트가 들어간다. */}
  </Route>
</Routes>;

// ------------------------------------------------------------

const TabContent = ({ tab }) => {
  const content0 = <div>content 0</div>;
  const content1 = <div>content 1</div>;
  const content2 = <div>content 2</div>;

  return [content0, content1, content2][tab];
};

// 보여줄 내용이 여러개이고, 탭을 어떤 걸 누르냐에 따라 보여줘야 할 내용이 다를 때
// 각 탭의 내용을 변수에 저장해두고, 그 변수들을 배열로 만들고, 탭의 번호와 배열의 인덱스를 매치시키면..!

// ---------------------------------------------------------------
// Automatic Batching
// state 변경이 연달아서 일어날 경우, 원래는 변경될 때 마다 재랜더링이 일어남
// Batching이 패치되면서 이젠 이 변화들을 한번에 모아서 한번만 재렌더링이 일어나도록 함

// -----------------------------------------------------------

// useTransition
let [isPending, startTransition] = useTransition();
// startTransition은 함수 => 이 함수로 성능저하를 일으키는 state 변화 함수를 감싸주면 됨
// 브라우저는 싱글 스레드. 한번에 하나의 일밖에 처리하지 못함.
// startTransition을 사용하게 될 경우 안에 있는 코드를 약간 늦게 시작하게 함

// isPending은 startTransition이 처리중일 때 true를 반환하는 변수

// --------------------------------------------------------------

// useDeferredValue
const variable = useDeferredValue(stateOrProps);
// useDeferredValue안에 넣은 state는 변경이 조금 늦게 일어남
// 그 변화값을 variable에 넣어줌
