function btn1() {
  console.log("최소값 : ", Math.min(5, 9, 7, -3)); // -3
  console.log("최대값 : ", Math.max(5, 9, 7, -3)); // 9
  console.log("절대값 : ", Math.abs(-8.8888)); //8.8888
}

function btn2() {
  const number = 2.725;
  console.log("반올림 : ", Math.round(number)); // 2
  console.log("버림 : ", Math.floor(number)); // 2
  console.log("올림 : ", Math.ceil(number)); // 3
}

function btn3() {
  console.log(Math.random()); // 0 ~ 1 숫자 중 무작위

  let result = Math.floor(Math.random() * 10 + 1); // 1 ~ 10   //경수. 10: 개수, 1: 시작점
}

function btn4() {
    const now = new Date();
    console.log(now)

    console.log("년 : ", now.getFullYear()); // 2023
    console.log("월 : ", now.getMonth()+1); // 12, 0 ~ 11
    console.log("일 : ", now.getDate()+1); // 12, 0 ~ 11
    console.log("시 : ", now.getHours()); // 12, 0 ~ 11
    console.log("분 : ", now.getMinutes()+1); // 12, 0 ~ 11
    console.log("초 : ", now.getSeconds()); // 12, 0 ~ 11
}

    function btn5() {
        //년, 월, 일, 시, 분, 초
        const a = new Date(2025, 1, 5, 11, );
        console.log(now)
    
        console.log("년 : ", now.getFullYear()); // 2023
        console.log("월 : ", now.getMonth()+1); // 12, 0 ~ 11
        console.log("일 : ", now.getDate()+1); // 12, 0 ~ 11
        console.log("시 : ", now.getHours()); // 12, 0 ~ 11
        console.log("분 : ", now.getMinutes()+1); // 12, 0 ~ 11
        console.log("초 : ", now.getSeconds()); // 12, 0 ~ 11
    
