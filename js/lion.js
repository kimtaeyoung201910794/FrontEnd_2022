// document.getElementById("lion").style.color= "red";
// document.getElementById("tiger").style.color= "red";
// document.getElementById("bear").style.color= "red";

// document.getElementsByTagName("li")[0].style.color="red";
// document.getElementsByTagName("li")[1].style.color="red";
// document.getElementsByTagName("li")[2].style.color="red";

// document.getElementsByClassName("animal")[0].style.color="red";
//css선택자 로 색 바꿔보기
// document.querySelectorAll('.animal')[0].style.color ="red";
//html의 값 바꾸는 법!
//document.querySelectorAll('.animal')[2].innerHTML = "dog";

//const animals = document.getElementById("animals");
//클래스에 요소를 추가로 넣는 방법
// animals.innerHTML += "<li class = 'animal'>cat</li>";
// //박스라는 곳에 purple클래스를 넣어서 박스에 퍼플색이 차도록 하게하기
// document.querySelectorAll(".box")[0].classList.add("purple");
// //박스에 보라색이 찬걸 없애주기
// document.querySelectorAll(".box")[0].classList.remove("purple");
// //토글로 박스에 색 채우는 방법
// document.querySelectorAll(".box")[0].classList.toggle("yello");
//버튼을 눌렀을때 이벤트를 이용하여 console에 click이라는 게 나오게 하는 방법
// document.getElementById("btn").addEventListener("click", function(){
//     console.log("click!!!");
// })

//플러스 버튼을 클릭하면 숫자가 1씩 올라가고 마이너스 버튼을 클릭하면 숫자가 1씩 감소하는 코드
// //구현
// var num = 0;
// document.getElementById("plus").addEventListener("click",function(){
//     num++;
//     document.getElementById("num").innerHTML = num;
// });

// document.getElementById("minus").addEventListener("click",function(){
//     num--;
//     document.getElementById("num").innerHTML = num;
// });
//바를 눌렀을때 안보이던 바가 새로 나타나게하는 코드
// document.querySelector(".bar").addEventListener("click", function(){
//     document.querySelector(".newbar").style.display="block";
// });
//토글을 이용하여 누르면 새로운 바가 생기고 다시누르면 새로운 바가 없어지는 코드
// document.querySelector(".bar").addEventListener("click", function(){
//     //누르면 눌렀어라고 문자 바뀜
//     document.querySelector(".bar").innerHTML ="눌렀어!";
//     document.querySelector(".newbar").classList.toggle("show");
// });

document.querySelectorAll(".list")[0].addEventListener("click",function(){
    tabBtn(e.target.dataset.id);
} )

function tabBtn(a){
document.querySelectorAll('.tab-button')[0].addEventListener("click", function(){
    for(let i = 0; i < document.querySelectorAll(".tab-button").length; i++)
    {
        document.querySelectorAll(".tab-button")[i].classList.add("here");
        document.querySelectorAll(".tab-content")[i].classList.add("show");
    }
    document.querySelectorAll(".tab-button")[0].classList.add("here");
    document.querySelectorAll(".tab-content")[0].classList.add("show");
    });
}