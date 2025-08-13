$(function () {
    // 페이지 처음 시작할 때 header 숨김
    // $("#dHead").hide();
    emblemChange();
    gnbDropdown();
});

// 윈도우 넓이가 1280px 이하이면 로고 심플한 걸로 바꾸기
function emblemChange() {
    const browserWidth = window.innerWidth;
    if (browserWidth <= 1290) {
        $("#blue-logo").attr("src", "../img/logo/nav_logo_blue.png");
        return;
    }
}

// header 마우스 hover -> 세부 메뉴 슬라이드 등장 효과
function gnbDropdown() {
    console.log("gnbDropdown() 함수 실행");
    // 마우스가 영역에 들어온 경우
    $(".header-inner").on("mouseenter", function () {
        $(".header-inner").css({
            cursor: "pointer",
        });
        $(".snb-list").show();
    });
    // 마우스가 영역을 벗어난 경우
    $(".header-inner").on("mouseleave", function () {
        $(".snb-list").hide();
    });
}
