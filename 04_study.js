/* var는 스코프 문제와 호이스팅, 중복 선언 문제로 인해 잘 사용하지 않음
let, const를 사용 권장

function firstFunc() {
  var x = 10;
  secondFunc();
}

function secondFunc() {
  console.log(x);
}

firstFunc();
var x = 1;
secondFunc();

console.log(y);
var y = 100;
console.log(y);
*/

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (각 호출은 별도의 클로저를 만듦)
