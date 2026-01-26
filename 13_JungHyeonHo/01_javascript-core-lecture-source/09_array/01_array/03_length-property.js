// length property는 배열 요소의 개수를 나타내는 0 이상의 정수를 가짐

console.log("1. 빈 배열의 length : ", [].length); // 0

const arr = [1, 2, 3, 4, 5];
console.log('2. [1, 2, 3, 4, 5]의 length:', arr.length);

// length property 값은 배열 요소가 추가/제거 될 때 마다 자동으로 갱신됨
arr.push(6); // 배열 마지막 요소 추가
console.log('3. push(6) 후 배열:', arr);
console.log('length:', arr.length);

arr.pop(); // 배열 마지막 요소 제거
console.log('4. pop() 후 배열:', arr);
console.log('length:', arr.length);

// length property에 임의의 값을 명시적으로 할당할 수 있다.
// -> 배열 길이를 초과한 요소들이 제거됨
// -> 배열 길이가 요소보다 많아지만 empty(빈 슬롯)으로 채움
arr.length = 3;
console.log('5. length를 3으로 설정:', arr); // [1,2,3]

arr.length = 10;
console.log('6. length를 10으로 설정:', arr);


// JS는 배열의 요소가 연속적으로 위치하지 않고
// 일부가 비어있는 '희소 배열'을 허용한다.
const sparse  = [, 2, , 4];
console.log('7. 희소 배열:', sparse);
console.log("8. 희소 배열의 내부 구조 : ",
    Object.getOwnPropertyDescriptors(sparse));

/* for in  vs  for of */
console.log(Object.getOwnPropertyDescriptors(arr))


/*  for in >> 객체 내 key 값 순회  (length 제외) */
console.log("9. for in");
for(let key in arr){
    console.log(key, arr[key]);
}

/* for of >> length 만큼 값(value) 순회*/
console.log("10. for of");
for(let item of arr){
    console.log(item);
}


// Array.prototype.concat() : 두 개 이상의 배열을 결합
const idol1 = ['아이브', 'BTS'];
const idol2 = ['엔믹스', '르세라핌'];
const idol3 = ['제니', '츄'];

const mix1 = idol1.concat(idol2);
console.log("mix1 :",mix1);

const mix2 = idol3.concat(idol1,idol2);
console.log("mix2 :",mix2);


// Array.prototype.slice : 배열의 요소 선택 잘라내기
// Array.prototype.splice : 배열의 index 위치의 요소 제거 및 추가
const front = ['HTML', 'CSS', 'JavaScript', 'jQuery'];
console.log('원본 배열:', front);

// slice(시작인덱스, 종료인덱스)
console.log('front.slice(1, 3):', front.slice(1, 3), '← 인덱스 1~2만 복사');
console.log('slice 후 원본:', front, '← 원본 그대로');

// splice(index, 제거수, 추가값1, 추가값2...)
console.log('front.splice(3, 1, "React"):', front.splice(3, 1, "React"), '← 제거된 요소');
console.log('splice 후 원본:', front, '← 원본 변경됨');

// Array.prototype.join : 배열을 구분자로 결합하여 문자열로 반환
const  snackList = ['사탕', '초콜렛', '껌', '과자'];
console.log('원본 배열:', snackList);
console.log('join():', snackList.join(), '← 쉼표로 연결');
console.log(`join('/'):`, snackList.join('/'), '← /로 연결');

// Array.prototype.reverse : 배열의 순서를 뒤집음
console.log('[1,2,3,4,5].reverse():', [1, 2, 3, 4, 5].reverse());
