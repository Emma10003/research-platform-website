$(function () {
    /* ------------------------------
    Section 1 : 텍스트 애니메이션
    ------------------------------ */
    // 텍스트 쪼개기
    deepDataSplitLetters();
    // 이펙트 클래스 추가
    const effectChar = $(".charChild");
    effectChar.addClass("intro-effect");
    
    // 애니메이션 끝난 후 클래스 제거
    effectChar.on("animationend", function () {
        $(this).removeClass("intro-effect");
    });
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
