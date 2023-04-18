document.addEventListener("DOMContentLoaded", function(event) {
  
  let btn = document.querySelector("#imgbtn");
  let setting = document.querySelector("#seting");
  let okay = document.querySelector("#okay");

  let memoText = document.querySelector(".memo-text");
  let memoTextInput = document.querySelector(".memo-text-input");

  let todolistNewlist = document.querySelectorAll(".todolist-newlist");
  let todolistText = document.querySelectorAll(".todolist-text");

  let dateWrap = document.querySelector(".dateWrap");
  let dateValue = new Date();

  let inputChecked = document.querySelector("td");


  // 날짜
  (function todays() {
    let newDiv = document.createElement("p");
    let year = dateValue.getFullYear()+'년 '
    let month = dateValue.getMonth()+1+'월 '
    let date = dateValue.getDate()+'일'

    let newContent = document.createTextNode(year+month+date);
    newDiv.appendChild(newContent);
  
    let currentDiv = document.getElementById("div");
    dateWrap.insertBefore(newDiv, currentDiv);

    // 날짜 태그에 class name 추가
    let aa = document.querySelectorAll("p");
    aa[1].className += 'date-style';
  })();

  // 메모수정
  setting.addEventListener("click", function(event) {
    memoTextInput.style.display = "block";
    memoText.style.display = "none";
  });
  // 메모확인
  okay.addEventListener("click", function(event) {
    memoText.textContent = memoTextInput.value
    memoTextInput.style.display = "none";
    memoText.style.display = "block";
  });

  // 체크리스트 수정
  setting.addEventListener("click", function(event) {
    okay.style.display = "inline-block";
    setting.style.display = "none";

    for(let i=0; i<todolistText.length; i++) {
      todolistText[i].style.display = "block";
    }
    for(let i=0; i<todolistNewlist.length; i++) {
      todolistNewlist[i].style.display = "none";
    }
  });

  // 체크리스트 확인
  okay.addEventListener("click", function(event) {
    for(let i=0; i<todolistNewlist.length; i++){
      todolistNewlist[i].textContent = todolistText[i].value
      okay.style.display = "none";
      setting.style.display = "inline-block";
    }

    for(let i=0; i<todolistText.length; i++){
      todolistText[i].style.display = "none";
    }
    for(let i=0; i<todolistNewlist.length; i++){
      todolistNewlist[i].style.display = "inline";
    }
  });


  // 이미지로 다운로드하기
  btn.addEventListener("click", function(event) {
    //html2canvas 사용 방법 복사
    html2canvas(document.body).then(function(canvas) {
      let el = document.getElementById("target");
      
      // 앵커 태그의 속성에 Data URL을 넣어주고 클릭 이벤트만 발생
      el.href = canvas.toDataURL("image/jpeg");
      el.download = 'myTodolist.jpg';
      el.click();
    });
  });


});