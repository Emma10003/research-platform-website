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

    // 텍스트 애니메이션 클래스
    $(".snb-list-cell").removeClass("snb-text-slidedown");
    $(".snb-list-cell").addClass("snb-text-slideup");
  });
  // 마우스가 영역을 벗어난 경우
  $(".header-inner").on("mouseleave", function () {
    $(".snb-list-wrap").hide();
    $("#dHead").removeClass("active-snb");

    // 텍스트 애니메이션 클래스
    $(".snb-list-cell").removeClass("snb-text-slidedown");
    $(".snb-list-cell").addClass("snb-text-slidedown");
    $(".gnb-list").css("border-bottom", "none");
  });
}

$(document).ready(function () {
  const dHead = $("#dHead");
  const snbListWraps = $(".snb-list-wrap");
  const mobileMenuBtn = $(".mobile-menu-btn");
  const mobileGnbWrap = $(".mobile-gnb-wrap");
  const mobileMenuClose = $(".mobile-menu-close");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      dHead.addClass("active");
    } else {
      dHead.removeClass("active");
    }
  });

  $(".gnb-list-cell").hover(
    function () {
      if ($(window).width() > 768) {
        const snb = $(this).find(".snb-list-wrap");
        if (snb.length) {
          dHead.addClass("active-snb");
          snb.stop().slideDown(300);
        }
      }
    },
    function () {
      if ($(window).width() > 768) {
        const snb = $(this).find(".snb-list-wrap");
        if (snb.length) {
          snb.stop().slideUp(300, function () {
            if ($(".snb-list-wrap:visible").length === 0) {
              dHead.removeClass("active-snb");
            }
          });
        }
      }
    }
  );

  mobileMenuBtn.on("click", function () {
    mobileGnbWrap.addClass("active");
  });

  mobileMenuClose.on("click", function () {
    mobileGnbWrap.removeClass("active");
  });

  if ($(window).scrollTop() > 0) {
    dHead.addClass("active");
  }

  dHead.css("display", "block");
});
