console.log(div[0]);
console.log(div[1]);

function btn2() {
  const div = document.getElementById("testId"); // 여기서는 Element로 s가 안붙었다
  console.log(div);
}
// css때 사용. id는 고유, class 여러군대 지정 name은 폼태그와 많이 써 . 그밖에는 안써. name은 사용자에게 입력받을 때 키 받는거?(?)거기에서만 쓰고 브라우저에서도 인식안함(?).

// 길게 getElementById 이런거 안외워도 됨. 이것만 알면됨(querySelector   <-이렇게 해도 된다고 강사님이강조하심(여러번 강조하심). 결국에는 나중에 querySelector쓴다.)

function btn6() {
  const div = document.querySelectorAll(".testClass");
  div[0].textContent = "<span>안녕하세요</span>";
  div[1].innerHTML = "<span>안녕하세요</span>";
}

function btn8() {
  const div = document.querySelector("#testId");
  div.style.color = "orange";
  div.style.backgroundColor = "yellow";
}

function btn9() {
  div2.classlist.add("black");
}
function btn10() {}
function btn11() {}
function btn12() {}

function btn13() {
    // 자식 객체 생성
    cosnt p = document.createElement("p");
    p.innerHTML = "Lorem Ipsum";
    //부모 객체에 추가
    div2.appendChild(p);
}


//  1번 문제에서
const input =~~~~
input.value                    
//로 접근해라.