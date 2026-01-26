// 1. 일반 함수의 this
// 생성자 함수가 아닌 일반 함수에서
// this를 사용할 필요가 없기 때문에
// strict mode에서는 일반 함수 내에서 this를 undefined로 바인딩
(function () {
    'use strict'
    // non-strict -> global 객체
    // strict -> undefined
        // 함수를 global을 안붙여도 사용할 수 있다
    console.log(this); // undefined
})();

    // 브라우저에서는 window가 최상위 객체
    // Node.js에서는 global이 최상위 객체
    console.log(this); // {} 출력 -> 최상위 객체로 알면 됨

// 2. arguments 객체
// 매개 변수에 전달된 인수를 재할당하여 변경하여도
// arguments 객체에 반영되지 않는다.
(function(x){
    'use strict'
    x=200;
    console.log(x);
    // strict-mode : [Arguments] { '0': 10 }
    // non-strict-mode : [Arguments] { '0': 200 }
    console.log(arguments); // 출력은 200으로 고정
})(10);
