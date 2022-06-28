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
