# 2022. 04. 04 Today I Learned

## Function

- 노마드코더의 줌 클론코딩 강의를 듣고 있습니다. 니꼬쌤이 실전형 강의를 위해 이론 강의를 후다닥 넘어가는 느낌이 없잖아 있습니다.

- 딱 실전에서 헤메지 않을 정도로만 가르쳐주신다고 해야할까요. 그래도 저는 다른 강의로 이론만큼은 그나마 듣고 왔으니 다행입니다.

- 아무것도 모르는 상태로 들었으면 어버버대며 좀 힘들어했을 것 같습니다.

- 물론 그러면서 성장하는 것이 개발자이긴 하지만요.

---

- `function` : 재사용 가능하게 만들어놓은 캡슐화된 코드

```js
function sayHello(nameOfPerson) {
  console.log("Hello,", nameOfPerson);
}

sayHello("duckgu");
```

- 이름을 아규먼트로 받아서 저에게 인사를 건네주는 함수를 만들었습니다.

- 정말 간단하고, 이해하기 쉬운 함수입니다.

---

- 함수를 이용해서 만들 수 있는 것 중 하나가 계산기입니다.

- 더하기, 빼기, 나누기, 곱하기를 모두 함수로 만드는겁니다.

- 물론 우리가 사용하는 계산기처럼 UI를 만들고, 클릭이라는 이벤트 발생에 대한 입력도 만들려면 더 많은 작업이 필요하겠지만,, 일단은 함수만 만들어봅시다.

```js
function plus(first, second) {
  return first + second;
}

function substract(first, second) {
  return first - second;
}

function multiple(first, second) {
  return first * second;
}

function division(first, second) {
  return first / second;
}

console.log(multiple(2, 3)); // -> 6
```

- 짜잔. 사칙연산을 모두 해냈습니다.

```js
const player = {
  name: "Duckgu",
  sayHello: function (otherName) {
    console.log(this.name + " says, hello " + otherName + "!");
  },
};

player.sayHello("iiing");
// Duckgu says, hello iiing!
```

- 함수와 오브젝트를 결합해서 만들어봤습니다. 니꼬쌤의 강의에서 나온 샘플과 거의 비슷합니다.

```js
const calculator = {
  plus: function (first, second) {
    return first + second;
  },
  substract: function (first, second) {
    return first - second;
  },
  multiple: function (first, second) {
    return first * second;
  },
  division: function (first, second) {
    return first / second;
  },
};

result = calculator.multiple(2, 3);
console.log(result);
```

- 오브젝트와 함수를 조합해서 조금 더 세련된 계산기를 만들어봤습니다.

- `calculator.multiple()` 이라는 코드만 보아도 이 함수가 어떤 작용을 하게될지 비교적 정확하게 알게 됩니다.
