/* 배열 생성 */

// 1. 배열 리터럴([], 대괄호)을 이용한 생성
const arr = ['바나나','복숭아','키위'];
console.log(arr/*.toString() 생략*/);
//arr = []; // const로 선언된 배열은 변경 X
arr[0]='딸기'; // 내부 요소는 변경 가능.
               // 객체 주소만 변경되지 않으면 됨.

// 2. 배열 생성자 함수를 이용한 생성
const arr2 = new Array();
console.log("arr2 : ", arr2);

// 배열의 길이를 지정한 상태로 생성
const arr3 = new Array(10);
console.log("arr3 : ",arr3); // 메모리 문제로 권장 X

const arr4 = new Array(1,2,3);
console.log("arr4 : ", arr4);

// 3. Array.of() 메서드
console.log(Array.of(10));
console.log(Array.of(1,2,3));
    // type이 다른 요소들이 같은 배열에 존재 가능
console.log(Array.of("hello",123,{name:"홍길동"},true));
/* 배열은 인덱스를 이용해서 요소 접근 가능 */
console.log("arr : ",arr);
console.log("arr[0] : ", arr[0]);
console.log("arr[1] : ", arr[1]);
console.log("arr[2] : ", arr[2]);

arr[4] = "안뇽"; // 인덱스 건너뛰면 중간 부분 empty되고 4번에 추가
                // 인덱스가 존재하지 않아도 추가 가능
console.log(arr); // [ '딸기', '복숭아', '키위', <1 empty item>, '안뇽' ]
console.log("arr[3] : ", arr[3]); // undefined
console.log("arr[4] : ", arr[4]);

/* length : arr의 길이를 반환 */
console.log(arr.length); // empty 포함 5반환

/* for문 이용 가능 */
for(let i = 0; i<arr.length;i++){
    // ``(백틱)은 템플릿 문자열, $안의 값을 집어넣겠다.
    console.log(`arr[${i}] : ${arr[i]}`);
}

/* 배열의 타입 확인*/
console.log(typeof arr); // 배열은 object 타입