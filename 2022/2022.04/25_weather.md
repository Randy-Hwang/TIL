# 2022. 04. 25 Today I Learned

## Weather

니꼬쌤 강의가 어려워질랑말랑 할 때 끝이 나버렸습니다. 지금은 날씨 API를 받아서 이를 브라우저에 설치하는 과정을 한번 해보려고 합니다.

```JS
function geoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
}
function geoError() {}

// 현재 위치를 알 수 있음. 두 개의 아규먼트를 필요로 하는데, 첫 번째는 모든게 정상일 때의 함수,
// 두 번째는 에러가 발생했을 때 실행할 함수
navigator.geolocation.getCurrentPosition(geoOk, geoError);
```

- 이렇게 `getCurrentPosition`이라는 함수를 사용해서 저의 위도와 경도를 얻을 수 있습니다.

- 물론, 여기서 날씨까지 제공해주진 않습니다. 날씨 API를 활용해야 하는데, 자바스크립트에서 url을 불러오는 방법을 익혀야합니다.

- `fetch()` 를 활용하면 자바스크립트가 우리를 대신해서 url을 불러와줍니다!

```js
const API_KEY = "82c8310f4f6db262c2923d16ddbd89f2";

function geoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}

function geoError() {}

// 현재 위치를 알 수 있음. 두 개의 아규먼트를 필요로 하는데, 첫 번째는 모든게 정상일 때의 함수,
// 두 번째는 에러가 발생했을 때 실행할 함수
navigator.geolocation.getCurrentPosition(geoOk, geoError);
```

- 다 만들긴 했는데.. 저는 위치가 도시가 아니라 동으로 뜨네요. Seoul로 뜨게 하고싶은데 동 이름이 나오니 뭔가 멋이 없는...ㅠㅠ
