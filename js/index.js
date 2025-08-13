$(function () {
    /* ------------------------------
    Section 1 : 텍스트 애니메이션
    ------------------------------ */
    // 텍스트 쪼개기
    deepDataSplitLetters();
    // 이펙트 클래스 추가
    addFlyInEffect();
});

/* ===========================================================
Section 1
=========================================================== */
// 글자 하나하나 big->normal 사이즈로 날아오는 것 처럼 보이는 효과

// 텍스트 쪼개기
function deepDataSplitLetters() {
    for (let i = 0; i < 2; i++) {
        let content = $(`#text-row${i + 1}`).text();
        console.log("content: ", content);
        let html = content
            .split("")
            .map((char) => `<span class="charChild">${char}</span>`)
            .join("");

        $(`#text-row${i + 1}`).html(html);
    }
}

function addFlyInEffect() {
    // 각 글자에 순차적으로 애니메이션 적용
    $(".charChild").each(function (index) {
        // 각 글자의 애니메이션 시작 지연시간 계산
        const delay = index * 0.05;
        // 계산된 지연시간을 해당 요소의 style 속성으로 직접 추가
        $(this).css({
            "animaion-delay": `${delay}s`,
            "transform-origin": `translate(${100 - (index - 1) * 10}% , 50%)`,
            "transform" : `translate()`
        });
        // 애니메이션 효과를 위한 클래스 추가
        $(this).addClass("intro-effect");
    });

    // 애니메이션 종료 후 클래스 제거
    $(".charChild").on("animationend", function () {
        $(this).removeClass("intro-effect");
    });
}
