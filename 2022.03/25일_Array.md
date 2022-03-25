# 2022. 03. 25 Today I Learned

## ARRAY

---

### 1. `isArray()` 를 사용하는 이유

```js
arr = [1, 2, 3, 4, 5];

console.log(typeof arr); // -> object
console.log(Array.isArray(arr)); // -> true
```

- 이렇듯 `typeof` 연산자로는 배열인지 아닌지 정확하게 알아낼 수 없기 때문입니다.

---

### 2. `String`과 `Array`에서의 `indexOf()` 차이점

```js
arr = ["A", "B", "C", "B", "C"];

console.log("ABCBC".indexOf("C", -2)); // -> 2
console.log(arr.indexOf("C", -2)); // -> 4
```

- 문자열에서의 인덱스는 두 번째 파라미터인 -2를 만났을 때 무시합니다.

- 그러나 배열에서의 인덱스는 두 번째 파라미터인 -2를 만났을 때, 배열의 전체 개수(5) 에서 두 번째 파라미터를 더합니다 (-2)

  - 그 결괏값인 3번째 인덱스부터 검색을 시작하여 4가 나옵니다.
