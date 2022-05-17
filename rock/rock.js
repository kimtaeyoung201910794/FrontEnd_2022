
$('#rock').click(function(){
    var comNum = Math.floor(Math.random()*3) + 1;
    $('#himg').attr("src","1.png");
    com_pic(comNum);
    result(1,comNum);

}) //주먹사진을 눌렀을때 jquery를 사용하여 himg에 주먹이미지가 들어가게되고 compic함수에 램덤수가 들어가게되면서 컴퓨터의 가위바위보 값이 나오게되고 
//사용자가 선택한 값과 컴퓨터에 들어간 랜덤값이 result함수에 들어가서 이겼는지 졌는지 비겼는지 결과를 도출해냄

$('#paper').click(function(){
    var comNum = Math.floor(Math.random()*3) + 1;
    $('#himg').attr("src","2.png");
    com_pic(comNum);
    result(2,comNum);
})//보자기사진을 눌렀을때 jquery를 사용하여 himg에 주먹이미지가 들어가게되고 compic함수에 램덤수가 들어가게되면서 컴퓨터의 가위바위보 값이 나오게되고 
//사용자가 선택한 값과 컴퓨터에 들어간 랜덤값이 result함수에 들어가서 이겼는지 졌는지 비겼는지 결과를 도출해냄

$('#scissors').click(function(){
    var comNum = Math.floor(Math.random()*3) + 1;
    $('#himg').attr("src","3.png");
    com_pic(comNum);
    result(3,comNum);
})//가위사진을 눌렀을때 jquery를 사용하여 himg에 주먹이미지가 들어가게되고 compic함수에 램덤수가 들어가게되면서 컴퓨터의 가위바위보 값이 나오게되고 
//사용자가 선택한 값과 컴퓨터에 들어간 랜덤값이 result함수에 들어가서 이겼는지 졌는지 비겼는지 결과를 도출해냄


var humanScore = 0;
var compuScore = 0;
//사용자의 점수와 컴퓨터의 점수를 계산해주기위해 변수 설정
function result(h,comNum){
    if (h==comNum){
        $('#winner').text("Tie!");
    }
    else if ((h==1&&comNum==3)||(h==2&&comNum==1)||(h==3&&comNum==2)){
        $('#winner').text("Win!!!");
        humanScore +=1;
        $('.hscore').text("You:"+humanScore);
    }

    else {
        $('#winner').text("Lose.....");
        compuScore +=1;
        $('.cscore').text("Computer:"+compuScore);
    }

}
//사용자의 값과 랜덤값을 비교하여 승패를 도출해주는 함수
//jquery를 이용하여 화면에 나오는 사용자와 컴퓨터의 점수와 승패결과를 승패에 따라 변경해줌
//위에 클릭 이벤트를 사용했을때 마지막에 결과를 도출하는것으로 사용

function com_pic(comNum){
    if (comNum==1){
        $('#cimg').attr("src","1.png");
    }
    else if (comNum==2){
        $('#cimg').attr("src","2.png");
    }
    if (comNum==3){
        $('#cimg').attr("src","3.png");
    }
}
//컴퓨터에 랜덤수가 들어갔을때 jquery를 이용하여 랜덤수에따라 가위바위보 이미지를 화면에 출력해주는 함수
