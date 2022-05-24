// //입력창 띄워주고 입력창에서 입력하면콘솔창에 입력한거뜸
// const input = prompt();
// //입력값이 없으면 없다고 출력
// if (input ===""){
//     console.log("입력값이 없습니다.")
// } else{
// console.log(input);
// }
// //이런 형태의 함수도있음
// function exec(fn) {
//     fn(1);
// }
// exec(console.log);
// exec(alert);
// //비동기를 처리하는 방법
// fetch("")
//     .then(res => res.json())
//     .then(console.log);
// console.log('test');
//객체 만들어주기
// const me={
//     name: "김태영",
//     age: 26,
//     gender: 'male',
// };

// const someone ={
//     name: "홍길순",
//     age: 27,
//     gender: "female",
// };
// //남자면 통과하
// function addMilitaryStateIfMale(person){
//     if (person.gender === 'male'){
//         person.MilitaryState = false;
//     }
// }

// addMilitaryStateIfMale(me);
// addMilitaryStateIfMale(someone);
// console.log(me);
// console.log(someone);

// function parseBoolean(value) {
//     if (value === true) {
//         return "참";
//     }
//     else if(value === false){
//         return "거짓";
//     }
// }
// //if 문으로 적은것과 결과 똑같음
// //참이니 뒤에꺼가 실행됨
// me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));
// //앞에가 거짓이라 뒤에가 실행되지않음
// me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));
 
// const input = prompt();

// // if (input ==="") {
// //     console.log("입력값이 없습니다");
// // }
// // else{
// //     console.log(input);
// // }
// //위에 있는 코드와  같은 의미임
// //앞에가 있으면 뒤에가 실행되지않고 앞에가 없으면 뒤에가 실행됨
// console.log(input || "입력값이 없습니다.");

// const me ={
//     name: "김태영",
//     age: 26,
// };

// //const name = me.name;
// //위에코드를 밑에처럼 비구조화 할당 문법을 이용해서 바꿀수있음
// //const { name } = me;
// //이렇게 밑에처럼 age도 할수있음
// const { name,age } = me;


// console.log(name);

// const a = arr[0];
// const b = arr[1];
// //위 두줄은 같은 코드임
// const[a,b] = arr;

// const a = obj.a;
// const b = obj.b;
// //위 두줄도 같은 코드임
// const{ a,b }= obj;

// const me = {
//     name: "김태영",
//     age: 26,
// };
// //spread기법 사용하기
// const militaryMe = {
//     ...me,
//     militaryState: false;
// }

// console.log(militaryMe);

// const animals = ["개", "고양이"];
// //spread용법
// const anotherAnimals = [...animals, "참새"];
// //출력하면 콘솔에 개 고양이 참새가 나옴
// console.log(anotherAnimals);

// const me = {
//     name:"김태영",
//     age: 24,
//     militaryState :false,
// }

// const{ militaryState, ...another} = me;

// console.log(another);

// const numbers = [0,1,2,3,4,5,6];

// const [zero,...rest] = numbers;
// //6개의 엘레먼트 다 들어가있음
// console.log(rest);