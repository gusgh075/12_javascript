class Animal {
  static planet = "지구";

  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  eat(foodWeight) {
    this.weight += foodWeight;
    console.log(`${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
  }

  move(lostWeight) {
    if (this.weight > lostWeight)
      this.weight -= lostWeight;
    console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었
습니다.`)
  }

  static compare(animalA, animalB) {
    return animalA.weight - animalB.weight;
  }
}

Animal.staticProperty = 'static을 사용한 선언은 기술적으론 클래스 자체에 직접 할당하는 것과 동일하다.';
console.log(Animal.planet);
console.log(Animal.staticProperty);

/* non-static 프로퍼티 호출 */
const animal1 = new Animal("토끼",5);
console.log(animal1.name);
console.log(animal1.weight);

/* static 프로퍼티 호출 */
// 객체 생성 없이 class명.프로퍼티명
console.log(Animal.planet);

/* static 프로퍼티 추가 */
const obj = {};
obj.name = "test";

// 클래스 == 함수 == 객체
Animal.staticProperty = "static 프로퍼티 추가는 클래스 자체에 프로퍼티를 추가하는 것과 같다";

console.log(Animal.staticProperty)

// Animal을 상속 받는 Human클래스
class Human extends Animal {
  develop(language){
    console.log(`${this.name}(은)는 ${language}로 개발을 합니다. 정말 즐겁습니다~~~ :-)`);
  }
}

// Animal의 정적 프로퍼티를 Human이 상속받아 사용할 수 있다.
console.log(Human.planet); // 지구
console.log(Human.staticProperty); // static 프로퍼티 추가는 클래스 자체에 프로퍼티를 추가하는 것과 같다
console.log(new Human().develop('javascript')); // undefined(은)는 javascript로 개발을 합니다. 정말 즐겁습니다~~~ :-)