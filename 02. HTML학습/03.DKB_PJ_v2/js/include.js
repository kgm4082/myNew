window.addEventListener("DOMContentLoaded",()=>{
    // JSON파일에 hcode변수에 할당함
    // JSON 파싱하여 할당하기
    let myjson = JSON.parse(JSON.stringify(hcode));
    console.log(myjson);

    // 데이터 넣을 대상
    // 1.상단영역
    let topPart = document.querySelector("#top");
    // 2.하단영역
    let bottomPart = document.querySelector("#info");
    // 3. 각 영역에 JSON 데이터 넣기
    topPart.innerHTML = myjson["상단영역"];
    bottomPart.innerHTML = myjson["하단영역"];
}); //////////////// 로딩구역 /////////////////