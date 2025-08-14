/* ==============================================
                    공통 적용 영역
============================================== */
$(function(){
    // 화면 면적에 따라 로고 변경
    emblemChange();
})

// 윈도우 넓이가 1280px 이하이면 로고 심플한 걸로 바꾸기
function emblemChange() {
    const browserWidth = window.innerWidth;
    if (browserWidth <= 1290) {
        $("#blue-logo").attr("src", "../img/logo/nav_logo_blue.png");
        return;
    }
}
