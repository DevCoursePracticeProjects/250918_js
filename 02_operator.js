//연산자

//산술 연산자
//+, -, *, /, %(나머지), **(제곱)
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(5 % 2); //1
console.log(2 ** 3); //8

//문자열 연결 연산자
console.log("안녕" + "하세요");
console.log("1" + 1);
console.log(2 ** (1 / 3)); //제곱근(루트)

//할당(대입) 연산자
//=
let a = 10;
//복합 대입연산자
//+=, -=, *=, /=, %=
a += 10;

//비교연산자
//>, <, >=, <=, ==, !=, ===, !==
console.log(1 > 2); //false
console.log(1 < 2); //true
console.log(1 >= 1); //true
console.log(1 <= 1); //true
console.log(1 == 1); //true (동등 연산자)
console.log(1 != 1); //false
console.log(1 == "1"); //true 자바 스크립트는 자동 변환을 시켜준다(타입에 관대)
//1. 문자와 숫자 간 자동 변환
//덧셈 연산에서는 문자가 이김(연결 연산 concatenation)
//덧셈이 아니면 숫자로 자동 변환
console.log(typeof (1 + "1"), typeof (1 - "1")); //string number
//2. 불리언과 숫자 간 자동 변환
//true -> 1, false -> 0
//3. null, undefined
//null -> 0, undefined -> NaN (Not a Number)

//truthy, falsy
//비어있다, 없다 -> false, p[, {}, 0, undefined, null, "", NaN
// true ->0이 아닌 값 [...], {...} "."

//일치 연산자-자동 변환 없이 값 자체로 비교
console.log(1 === "1"); //false
console.log(1 !== "1"); //true

console.log("a" > "b");
//ASCII Code. Char, 뒤에 오는 문자들이 더 큰 값
//대문자 A: 65~ 대문자 Z: 90.
//소문자 a: 97~ 소문자 z: 122.
//0~9: 48~57
console.log("A".charCodeAt());

// 논리연산자
console.log("[논리 연산자]");
// boolean (true/false) -> 합성, 변환
// 벤 다이어그램. 논리 연산 p -> q.
// 연산자 -> 피연산자 1개 이상.
1 + 1; // <피>연산자 몇 개?
// 1개
// typeof // 연산자
console.log(!true); // not 연산자 -> !true -> false, !false -> true!
console.log(!0); // syntactic sugar
// && (and 연산) : ampersand 2개 -> & (1개) : 비트 연산자.
// || (or 연산): pipeline 2개 -> | 비트연산자.

// A && B -> 둘 다 true이면 true
// -> A가 falsy하면 B를 평가하지 않고 A 값으로 값을 취급하고 아닐 경우 B로 취급한다
// A || B -> 둘 다 false이면 false
// -> A가 truthy하면 B를 평가하지 않고 A 값으로 값을 취급하고 아닐 경우 B로 취급한다

console.log("true && true", true && true); // 둘 다 true여야 true다
console.log("true && false", true && false);
console.log("false && true", false && true);
console.log("false && false", false && false);
console.log("10 && 5", 10 && 5);
console.log("10 && false", 10 && false);
console.log("0 && 5", 0 && 5);
console.log("0 && false", 0 && false);
// 앞에가 false로 취급되는 값이면 뒤에 값을 판단하지 않는다

console.log("true || true", true || true); // 둘 다 false여야 false다?
console.log("true || false", true || false);
console.log("false || true", false || true);
console.log("false || false", false || false);
console.log("10 || 5", 10 || 5);
console.log("10 || false", 10 || false);
console.log("0 || 5", 0 || 5);
console.log("0 || false", 0 || false);
// 앞에가 true로 취급되는 값이면 뒤에 값을 판단하지 않는다

// 복합대입연산자 -> 증감연산자
// 변수++, ++변수, 변수--, --변수.
// 변수를 1씩 증가 혹은 감소 시켜주고 바로 대입시켜주는 연산자 -> 바로 변수처럼 쓸 수 있음
let i = 0;
console.log("i++", i++); // 원래는 대입연산자는 이렇게 바로 못씀. 그런데 증감연산자는 바로 써줄 수 있음.
// ++ 혹은 --의 위치가 중요함. 먼저 등장하면 증감 연산을 '마친 상태'에서 사용하고. 뒤에 등장하면 호출한 다음 연산.
console.log("++i", ++i);
false && i++; // 앞이 false면 뒤에까지 가지 않음
console.log(i); // 단축해서.
true || i++; // 앞이 true면 뒤에까지 가지 않음
console.log(i); // 단축해서.

const v = undefined; // 비어있는 데이터
console.log(v || "default"); // v가 비어있으면

// boolean -> 조건문.
// 값을 평가 -> 연산자 1,2개. 피연산자. 3개 연산자. 조건연산자.
// 삼항(조건)연산자.
// condition ? true일 때 : false일 때
// Math.random (0 ~ 1 랜덤 한 값.)
const message = Math.random() > 0.5 ? "당첨입니다" : "꽝입니다";
console.log(message);
