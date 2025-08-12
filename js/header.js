$(function () {
    // 페이지 처음 시작할 때 header 숨김
    // $("#dHead").hide();
    emblemChange();
});

// 윈도우 넓이가 1280px 이하이면 로고 심플한 걸로 바꾸기
function emblemChange() {
    const browserWidth = window.innerWidth;
    if (browserWidth <= 1290) {
        $("#blue-logo").attr("src", "../img/logo/nav_logo_blue.png");
        return;
    }
}

// active 효과 넣기

//
