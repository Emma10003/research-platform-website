/* ==============================================
                서비스문의 영역
============================================== */

$(function () {
    $(".icon-form-tip").click(openPopUpServiceAsk);
    $(".form-check-wholeInfo").click(openPopUpPersonalInfo);

    $("#chkAgree").click(() => {
        if (!$("#chkAgree").prop("checked")) {
            changeCheckIconBlue();
            $("#chkAgree").click(changeCheckIconGray);
        } else {
            changeCheckIconGray();
            $("#chkAgree").click(changeCheckIconBlue);
        }
    });

    textCount();
});

// 문의내용 모달팝업
function openPopUpServiceAsk() {
    $(".service-ask-modal-page").addClass("actived");
    $(".service-ask-modal").css("opacity", "1");
    $(".service-ask-modal").prepend(
        `
        
        <div class="service-ask-modal-wrap" id="modal-popup" onclick="closePopUpServiceAsk()">
            <div class="service-ask-modal-grid">
                <div class="service-ask-modal-grid-inner innertitle">
                    <div class="service-ask-modal-title-grid">
                        <div class="title-grid-item fontBlue font700">이런 내용을 작성해 주세요</div>
                        <div class="title-grid-item">
                            <span class="icon-close">
                                <img src="../img/service_ask/icon-pop-close-blue.png" />
                            </span>
                        </div>
                    </div>
                </div>
                <div class="service-ask-modal-grid-inner innercontent">
                    <div class="service-ask-modal-content">
                        <ul>
                            <li>* 이 조사를 수행하고자 하는 계기가 무엇이며, 어떠한 내용을 알고 싶은가요?</li>
                            <li>* 조사 결과를 어떻게 활용하실 예정인가요?</li>
                            <li>* 조사를 하고 싶은 대상자는 누구인가요?</li>
                            <li>* 몇 명을 대상으로 조사 응답을 받고자 하시나요?</li>
                            <li>* (정량조사 시) 문항은 몇 문항인가요?</li>
                            <li>* 설문 설계 서비스가 필요하신가요?</li>
                            <li>* 보고서까지의 결과물을 희망하시나요?</li>
                            <li>* 조사 결과를 언제까지 받아 보셔야 하나요?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `
    );
}

function closePopUpServiceAsk() {
    $(".service-ask-modal-page").removeClass("actived");
    $(".service-ask-modal-wrap").remove();
}

// 개인정보 수집 [전문보기] 모달팝업
function openPopUpPersonalInfo() {
    $(".personal-info-modal-page").addClass("actived");
    $(".personal-info-modal").css("opacity", "1");
    $(".personal-info-modal").prepend(
        `
        
        <div class="personal-info-modal-wrap" id="modal-popup" onclick="closePopUpPersonalInfo()">
            <div class="personal-info-modal-grid">
                <div class="personal-info-modal-grid-inner innertitle">
                    <div class="personal-info-modal-title-grid">
                        <div class="title-grid-item fontBlue font700">개인정보 수집 및 이용동의</div>
                        <div class="title-grid-item">
                            <span class="icon-close">
                                <img src="../img/service_ask/icon-pop-close-blue.png" />
                            </span>
                        </div>
                    </div>
                </div>
                <div class="personal-info-modal-grid-inner innercontent">
                    <div class="personal-info-modal-content">
                        <div class="content-item">
                            <div class="item-title font600">수집하는 개인정보 항목</div>
                            <div class="item-desc fontGray">이름, 이메일주소, 휴대전화번호, 기관명/회사명</div>
                        </div>
                        <div class="content-item">
                            <div class="item-title font600">수집 및 이용목적</div>
                            <div class="item-desc fontGray">서비스 상담 및 제공</div>
                        </div>
                        <div class="content-item">
                            <div class="item-title font600">보유 및 이용기간</div>
                            <div class="item-desc fontGray">수집일로 부터 6개월</div>
                        </div>
                        <div class="content-item-last">
                            <div class="item-desc fontGray">개인정보 수집 및 이용에 동의하지 않으실 경우 서비스 이용이 불가합니다.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    );
}

function closePopUpPersonalInfo() {
    $(".personal-info-modal-page").removeClass("actived");
    $(".personal-info-modal-wrap").remove();
}

// 개인정보 수집 체크 시 이미지 변경
function changeCheckIconBlue() {
    $(".form-check-icon img").attr("src", "../img/service_ask/icon-checkbox-blue.png");
}

function changeCheckIconGray() {
    $(".form-check-icon img").attr("src", "../img/service_ask/icon-checkbox-gray.png");
}

// 문의내용 글자수 세기
function textCount() {
    const count = $("#inquiry-contents").val().length;
    console.log("글자 수: ", count);
    
}
