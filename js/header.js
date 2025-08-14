/* ==============================================
                    header 영역
============================================== */
$(function () {
    gnbDropdown();
});

// header 마우스 hover -> 세부 메뉴 슬라이드 등장 효과
function gnbDropdown() {
    // 마우스가 영역에 들어온 경우
    $(".header-inner").on("mouseenter", function () {
        $(".snb-list").fadeIn();
        $(".snb-list-cell").removeClass("snb-text-slidedown");
        $(".snb-list-cell").addClass("snb-text-slideup");
        // $(".snb-list-wrap").addClass("bar-slidedown");
    });
    // 마우스가 영역을 벗어난 경우
    $(".header-inner").on("mouseleave", function () {
        $(".snb-list").fadeOut("fast");
        $(".snb-list-cell").removeClass("snb-text-slideup");
        $(".snb-list-cell").addClass("snb-text-slidedown");
    });
}
