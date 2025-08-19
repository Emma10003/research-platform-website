$(function () {
    emblemChange();
    $(window).on("resize", emblemChange);
    /* ------------------------------
    Section 1 : 텍스트 애니메이션
    ------------------------------ */
    // 이펙트 클래스 추가
    addFlyInEffect();

    /* ------------------------------
    Section 3
    ------------------------------ */
    $("")
});

/* ===========================================================
Header 로고
=========================================================== */
// 윈도우 넓이가 1280px 이하이면 로고 심플한 걸로 바꾸기
function emblemChange() {
    const browserWidth = window.innerWidth;
    if (browserWidth <= 1290) {
        $("#blue-logo").attr("src", "../img/logo/nav_logo_blue.png");
        return;
    } else {
        $("#blue-logo").attr("src", "../img/logo/logo_blue.png");
    }
}

/* ===========================================================
Section 1
=========================================================== */
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

// charChild에 애니메이션 적용
function addFlyInEffect() {
    deepDataSplitLetters();

    // 각 글자에 순차적으로 애니메이션 적용
    $(".charChild").each(function (index) {
        // 각 글자의 애니메이션 시작 지연시간 계산
        const delay = index * 0.07;
        // 계산된 지연시간을 해당 요소의 style 속성으로 직접 추가
        $(this).css({
            "animation-delay": `${delay}s`,
            opacity: "1",
        });

        // 애니메이션 효과를 위한 클래스 추가
        $(this).addClass("intro-effect");
        console.log("애니메이션 시작");
    });

    // 애니메이션 종료 후 클래스 제거
    $(".charChild").on("animationend", function () {
        console.log("애니메이션 종료");
        $(this).removeClass("intro-effect");
        $("#dHead").addClass("active").show({ delay: 3000 });
    });
}

/* ===========================================================
Section 3 : 스크롤할 때 이미지와 텍스트 올라가는 효과
=========================================================== */
function imageScroll() {
    if(window.loca)
    $(".text-cell").addClass("active");
}
