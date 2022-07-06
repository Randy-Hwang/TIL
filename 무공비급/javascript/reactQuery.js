// npm i react-query

import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

// index.js 세팅
const queryClient = new QueryClient();
<QueryClientProvider client={queryClient}></QueryClientProvider>;
// 이걸로 app 컴포넌트 감싸주기

const variable = useQuery("variable", () => {
  return axios.get("URL").then((a) => a.data);
});

// return과 중괄호는 동시에 생략, or 둘 다 적어줘야 함
variable.data; // ajax 요청이 성공했을 때 결과 데이터
variable.isLoading; // 요청이 요청 중일 때 true 반환
variable.error; // 요청이 실패했을 때 true 반환

// lazy import -> react는 build할 때 모든 파일을 하나의 js로 만들기 때문에 파일의 덩치가 크고,
// spa이기때문에 처음 웹사이트에 접속할 때 모든 사이트를 미리 만들어두기 때문에 접속할 때 시간이 오래걸린다.
// 이 때 "이건 lazy하게 Import하렴" 이라는 의미로 사용.
const Detail = lazy(() => import("경로"));

<Suspense fallback={<div>Loading...</div>}>
  <Detail shoes={shoes} />
</Suspense>;
// suspense로 감싸주는건 로딩시간동안 보여줄 화면 구성
// routes 전체를 감싸도 상관 X
