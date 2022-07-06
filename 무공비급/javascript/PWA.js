// Progressive Web App
// 웹사이트를 앱처럼 만들 수 있는 기술.
// 사용하려면 PWA가 이미 세팅된 리액트 프로젝트가 필요
// npx create-react-app "Project Name" --template cra-template-pwa

// PWA의 조건 -> manifest.js / service-worker.js 파일 있어야 함 (위의 명령어로 설치한 경우 이미 있음)
// index.js에서 serviceWorkerRegistration.unregister() 에서
// unregister를 register로 바꿔주면 됨
// service-worker.js => 오프라인에서도 앱 열 수 있게 도와줌

// PWA처럼 동작하는지 확인하기 위해선
// build폴더를 깃허브같은곳에 호스팅을 하거나
// build폴더를 vscode로 열어서 index.html 미리보기 띄우기(extension 필요함 => live server)
