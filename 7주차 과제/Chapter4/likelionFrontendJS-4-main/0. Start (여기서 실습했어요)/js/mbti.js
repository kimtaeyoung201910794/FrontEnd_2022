const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 10;

const select = [0,0,0,0]


function addAnswer(answerText,qIdx,idx){
    var a = document.querySelector(".aBox");
    var answer = document.createElement('button');
    
    //답변마다 클래스 추가
    answer.classList.add('answerList');
    answer.classList.add('my-5');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    
    //버튼에 애니메이션 추가
    answer.classList.add('fadeIn');

    // answer가 a에 소속될 수 있도록 만듬
    a.appendChild(answer);
    answer.innerHTML = answerText;
    // 버튼을 불러온다
    //onclick 속성을 addEventListener로 준다

    answer.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList'); 
        for(let i=0;i<children.length;i++){
            children[i].disabled = true;
            //버튼 사라지는 애니메이션

            children[i].style.WebkitAnimation = "fadeOut 0.5s"
            children[i].style.animation = "fadeOut 0.5s"
        }

        //사라지는 시간을 조정
        setTimeout(()=>{

            //타겟 타입별 늘려주기
            var target = qnaList[qIdx].a[idx].type;

            //타겟에 들어있는 모든 타입 1씩 추가
            for(let i=0; i<target.length; i++){
                select[target[i]]+=1
            }
            
            for(let i=0;i<children.length;i++){
                children[i].style.display = 'none'; //버튼을 안보이게
            }
            goNext(++qIdx);
        },450)
    },false)


}
//결과 계산하기
function calResult(){
    // indexOf : index 반환
    /// 최댓값을 가지고 있는 인덱스를 반환해줌
    var result = select.indexOf(Math.max(...select));
    return result; // 결과 반환함
}

function setResult(){
    let point = calResult(); // point result 값 담기
    
    const resultNameIntro = document.querySelector('.resultIntro');
    resultNameIntro.innerHTML = infoList[point].nameIntro; 

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;

    //이미지 넣는법
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector("#resultImg");
    var imgURL = 'img/image-' + point + '.png';

    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);
    
    const resultDesc1 = document.querySelector('.resultDesc1');
    const resultDescTitle1 = document.querySelector('.resultDescTitle1');
    resultDescTitle1.innerHTML = infoList[point].descTitle1;
    resultDesc1.innerHTML = infoList[point].desc1;
  
    const resultDesc2 = document.querySelector('.resultDesc2');
    const resultDescTitle2 = document.querySelector('.resultDescTitle2');
    resultDescTitle2.innerHTML = infoList[point].descTitle2;
    resultDesc2.innerHTML = infoList[point].desc2;
}

function goResult() {
    //결과로 가는 함수
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";            
        }, 450);
        let qIdx = 0;
        goNext(qIdx);
    },450);

    //셋팅하기
    setResult();
}

function goNext(qIdx){
    //질문을 다 끝났을때 결과로 이동하는 함수
    if(qIdx == endPoint) {
        goResult();
        return;
    }
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    // 변수 도입
    //끝나고 또 호출해야함
    //반복문 을 사용하여 여려개를 이용
    // 3번 반복됨

    for(let i in qnaList[qIdx].a)
    {
        //질문 추가
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
    }
    var countStatusNum = document.querySelector('.countStatus');
    countStatusNum.innerHTML = (qIdx+1)+"/"+endPoint;

    //상태바
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint)*(qIdx+1)+"%"

}

function start(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";            
        }, 450);
        let qIdx = 0;
        goNext(qIdx);
    },450);
}