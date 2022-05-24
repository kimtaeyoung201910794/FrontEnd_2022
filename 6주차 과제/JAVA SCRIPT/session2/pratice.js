// document.getElementById("lion").style.color = "red";
// document.getElementById("tiger").style.color = "red";
// document.getElementById("bear").style.color = "red";

// const animal = document.getElementsByTagName("li") [0].style.color = "red";

// document.getElementsByClassName("animal") [1].style.color = "red";

// document.querySelectorAll(".animal") [0].style.color = "red";

// document.querySelectorAll(".animal") [2].innerHTML = "dog";
// const animals = document.getElementById("animal");

// animals.innerHTML += "<li class = 'animal'>Cat</li>";

// document.querySelectorAll('.box') [0].classList.add("purple");

// document.querySelectorAll('.box') [0].classList.remove("purple");

// document.querySelectorAll(".box")[0].classList.toggle("yellow");
// document.querySelectorAll(".box")[0].classList.toggle("yellow");

    // 두번째 강의

// document.getElementById("btn").addEventListener("click", function () {
//     console.log("click!!!");
// });

// var num =0;
// document.getElementById('plus').addEventListener("click",function (){
//     num++;
//     document.getElementById("num").innerHTML = num;
// });

// document.getElementById('minus').addEventListener("click",function (){
//     num--;
//     document.getElementById("num").innerHTML = num;
// });

// document.querySelectorAll('.bar').addEventListener("click",function () {
//     document.querySelectorAll(".newBar").style.display ="block";
// });

// document.querySelectorAll('.bar').addEventListener("click",function () {
//     document.querySelectorAll('.bar').inerHTML ="눌렸어!"
//     document.querySelectorAll(".newBar").classList.toggle("show");
// });

    //세번째 강의 
    
document.querySelectorAll('.list')[0].addEventListener("click", function(e) {



})


function tabBtn(a) {
    document.querySelectorAll('.tab_button')[0].addEventListener("click", function () {
        // document.querySelectorAll('.tab-button')[0].classList.remove("here");
        // document.querySelectorAll('.tab-button')[1].classList.remove("here");
        // document.querySelectorAll('.tab-button')[2].classList.remove("here");
        // document.querySelectorAll('.tab-content')[0].classList.remove("show");
        // document.querySelectorAll('.tab-content')[1].classList.remove("show");
        // document.querySelectorAll('.tab-content')[2].classList.remove("show");
        for (let i = 0; i < document.querySelectorAll(".tab-button").length; i++) {
            document.querySelectorAll(".tab-button")[0].classList.remove("here");
            document.querySelectorAll(".tab-content")[0].classList.remove("show");
        }
    
    
        document.querySelectorAll(".tab-button")[0].classList.add("here");
        document.querySelectorAll(".tab-content")[0].classList.add("show");
    });

}
