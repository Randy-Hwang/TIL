# JavaScript

최종 편집일: 2022년 2월 21일 오후 3:52

- 

---

- async & await
    
    function 앞에 async를 붙여주게 되면 그 함수는 자동으로 Promise를 리턴하는 비동기 처리 함수가 된다.
    
    함수 안에서 return을 적어놓은 값은 promise 함수의 resolve 값이 된다.
    
    ```jsx
    async function helloPromise() {
      return "Hello Async";
    }
    
    helloPromise().then((res) => {
      console.log(res); // -> Hello Async
    });
    ```
    
    await을 사용할 수도 있다
    
    ```jsx
    function delay(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
    
    async function helloPromise() {
      await delay(3000);
      return "Hello Async";
    }
    
    helloPromise().then((res) => {
      console.log(res);
    });
    ```
    
    await 이 붙은 함수의 호출은 그 함수가 끝나기 전까지 아래에 있는 코드를 실행시키지 않는다. await이 적힌 줄은 동기적으로 작동한다는 것. 
    
    또한 await은 async 안에서만 작동한다.
    
    ```jsx
    function delay(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
    
    async function helloPromise() {
      await delay(3000);
      return "Hello Async";
    }
    
    async function main() {
      const res = await helloPromise();
      console.log(res);
    }
    
    main();
    ```
    
    이렇게 main 이라는 async함수 안에 helloPromise 를 불러오는 과정도 가능하다.
    
    내 지식이 아직 얕아서 그런가 왜 굳이 이렇게 하는지...? 이런 방식은 어디서 써먹을 수 있는지?
    

---

- API 호출
    1. API 란?
        1. 레스토랑에 비유할 수 있다.
        
        ![Untitled](JavaScript%207ccd6/Untitled.png)
        
        중간의 서버에게 데이터를 호출하고 전달받는 것을 API 호출이라고 한다.
        
        클라이언트 사이드와 서버 사이드가 서로 통신할 수 있도록 하는 중간다리 역할.
        
        API 를 호출한다 == 다른 프로그램으로부터 데이터를 받기 위해 API를 호출한다
        
    2. Json Placeholder
        1. 개발자들을 위해서 무료로 API 호출에 대해 더미데이터로 응답해주는 서비스.
            1. 이런 무료 API들을 오픈 API 라고 한다. 
        
    3. fetch → API를 호출할 수 있도록 도와주는 내장함수
        
        ```jsx
        let dmdekq = fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
          console.log(res);
        });
        ```
        
        API 정보를 반환하는 것이 아니라 API 의 객체 자체를 반환하기 때문에 우리가 원하는 정보가 바로 보여지진 않는다. 
        
        비유 ) 우리가 편지를 받아서 우체통에서 꺼냈을 때, 우리가 현재 보고있는 건 편지 내용이 아닌 편지봉투. 봉투를 열어서 내용을 보는 작업이 하나 더 필요.
        
        ```jsx
        async function getDmdekq() {
          let rawDmdekq = fetch("https://jsonplaceholder.typicode.com/posts");
          let jsonDmdekq = await (await rawDmdekq).json();
          console.log(jsonDmdekq);
        }
        
        getDmdekq(); // *Dmdekq = 응답을 영타로 친 것 (...)
        ```
        
        이렇게 하게되면 우리가 웹페이지에서 봤던 데이터들을 고스란히 받을 수 있게된다.