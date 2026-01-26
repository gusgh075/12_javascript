console.log("배열 메서드 알아보기");
console.log("=".repeat(50));

const arr =[];

console.log("[배열의 생성자와 프로토타입]");
// Array == 생성자 함수
// arr.constructor === arr 배열을 만들때 사용할 생성자 함수
console.log(arr.constructor === Array); // true

// 배열의 프로토타입 객체
console.log(Object.getPrototypeOf(arr)=== Array.prototype);

// Array.prototype.indexOf
// - indexOf(요소) : 배열 시작 부터 검색해서 처음 찾은 요소의 인덱스를 반환
// - lastIndexOf(요소) : 배열 뒤에서 부터 검색해서 처음 찾은 요소의 인덱스를 반환
// - includes(요소) : 배열에 해당 요소가 있으면 true, 없으면 false

const foodList = ['물회', '삼계탕', '냉면', '수박', '물회'];
console.log('원본 배열:', foodList);

console.log("foodList.indexOf('물회') :",foodList.indexOf('물회')); // 0
    // 앞에서 1개의 index 건너뛰고 검색 시작
console.log("foodList.indexOf('물회',1) :",foodList.indexOf('물회',1)); // 4
console.log("foodList.indexOf('햄버거') :",foodList.indexOf('햄버거')); // -1

console.log("foodList.indexOf('물회') :",foodList.lastIndexOf('물회')); // 4
    // 뒤에서 1개의 index 건너뛰고 검색 시작
console.log("foodList.indexOf('물회',1) :",foodList.lastIndexOf('물회',1)); // 0

console.log(`foodList.includes('물회'):`, foodList.includes('물회'));
console.log(`foodList.includes('삼겹살'):`, foodList.includes('삼겹살'));

console.log('='.repeat(50));

// Array.prototype.push()       : 마지막 요소로 추가
// Array.prototype.pop()        : 마지막 요소를 꺼내서 제거
// Array.prototype.unshift()    : 첫 번째 요소로 추가
// Array.prototype.shift()      : 첫 번째 요소를 꺼내서 제거

const chineseFood =['짜장면','짬뽕','유산슬'];
console.log("초기 chineseFood : ",chineseFood);

chineseFood.push('탕수육');
chineseFood.push('깐풍기');
console.log("push() 후 chineseFood : ",chineseFood);

console.log("pop() 결과 : ", chineseFood.pop(),chineseFood);
console.log("pop() 결과 : ", chineseFood.pop(),chineseFood);
console.log("pop() 결과 : ", chineseFood.pop(),chineseFood);
console.log("pop() 결과 : ", chineseFood.pop(),chineseFood);
console.log("pop() 결과 : ", chineseFood.pop(),chineseFood);

const chickenList = ['양념치킨', '후라이드', '파닭'];
console.log("초기 chickenList : ", chickenList);

chickenList.unshift("뿌링클");
chickenList.unshift("슈프림");
console.log("unshift()후 chickenList : ", chickenList);

console.log("shift 결과 :",chickenList.shift(),chickenList);