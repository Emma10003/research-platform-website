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
        $(".snb-list-wrap").show();
        $("#dHead").addClass("active-snb");
        // $("#dHead").addClass("bar-slidedown");

        // 텍스트 애니메이션 클래스
        $(".snb-list-cell").removeClass("snb-text-slidedown");
        $(".snb-list-cell").addClass("snb-text-slideup");
    });
    // 마우스가 영역을 벗어난 경우
    $(".header-inner").on("mouseleave", function () {
        $(".snb-list-wrap").hide();
        $("#dHead").removeClass("active-snb");
        // $("#dHead").removeClass("bar-slidedown");

        // 텍스트 애니메이션 클래스
        $(".snb-list-cell").addClass("snb-text-slidedown");
        $(".gnb-list").css("border-bottom", "none");
    });
}
