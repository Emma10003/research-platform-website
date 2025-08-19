/* ==============================================
                서비스문의 영역
============================================== */

$(function () {
    // 모달팝업
    $(".icon-form-tip").click(openPopUpServiceAsk);
    $(".form-check-wholeInfo").click(openPopUpPersonalInfo);

    // 체크박스
    $("#chkAgree").click(() => {
        if ($("#chkAgree").prop("checked")) {
            changeCheckIconBlue();
            $("#chkAgree").click(changeCheckIconGray);
        } else {
            changeCheckIconGray();
            $("#chkAgree").click(changeCheckIconBlue);
        }
    });

    // 글자수세기
    textCount();

    // 입력여부 확인
    $(".submit-btn").click(inputRequiredCheck);
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
    $("#inquiry-contents").keyup((e) => {
        const count = $("#inquiry-contents").val().length;
        $(".text-count").html(`<strong>${count}</strong>`);
    });
}

// 입력창 입력확인
function inputRequiredCheck() {
    const inputService = $("#ask-category").val().trim();
    const inputName = $("#inquiry-name").val().trim();
    const inputFirm = $("#inquiry-firm").val().trim();
    const inputPhone = $("#inquiry-tel").val().trim();
    const inputEmail = $("#inquiry-email").val().trim();
    const inputContents = $("#inquiry-contents").val().trim();

    if (inputService === "") {
        $("#alertpop-service").addClass("actived");
        $("#alertpop-service").prepend(
            `
                <div class="alertpop-wrap">
                    <div class="alertpop-item">
                        <div class="alertpop-title font600">서비스 유형을 선택해 주세요.</div>
                    </div>
                    <div class="alertpop-item">
                        <div class="alertpop-btn">
                            <button type="button" class="fontBlue font600" id="check-btn">확인</button>
                        </div>
                    </div>
                </div>
                `
        );
        $("#form-service").focus();
        return;
    }

    if (inputName === "") {
        $("#alertpop-name").addClass("actived");
        $("#alertpop-name").prepend(
            `
                <div class="alertpop-wrap">
                    <div class="alertpop-item">
                        <div class="alertpop-title font600">이름을 입력해 주세요.</div>
                    </div>
                    <div class="alertpop-item">
                        <div class="alertpop-btn">
                            <button type="button" class="fontBlue font600" id="check-btn">확인</button>
                        </div>
                    </div>
                </div>
                `
        );
        $("#inquiry-name").focus();
        return;
    }

    if (inputFirm === "") {
        $("#alertpop-firm").addClass("actived");
        $("#alertpop-firm").prepend(
            `
                <div class="alertpop-wrap">
                    <div class="alertpop-item">
                        <div class="alertpop-title font600">기관 또는 회사명을 입력해 주세요.</div>
                    </div>
                    <div class="alertpop-item">
                        <div class="alertpop-btn">
                            <button type="button" class="fontBlue font600" id="check-btn">확인</button>
                        </div>
                    </div>
                </div>
                `
        );
        $("#inquiry-firm").focus();
        return;
    }

    if (inputPhone === "") {
        $("#alertpop-tel").addClass("actived");
        $("#alertpop-tel").prepend(
            `
                <div class="alertpop-wrap">
                    <div class="alertpop-item">
                        <div class="alertpop-title font600">연락처를 입력해 주세요.</div>
                    </div>
                    <div class="alertpop-item">
                        <div class="alertpop-btn">
                            <button type="button" class="fontBlue font600" id="check-btn">확인</button>
                        </div>
                    </div>
                </div>
                `
        );
        $("#inquiry-tel").focus();
        return;
    }

    if (inputEmail === "") {
        $("#alertpop-email").addClass("actived");
        $("#alertpop-email").prepend(
            `
                <div class="alertpop-wrap">
                    <div class="alertpop-item">
                        <div class="alertpop-title font600">이메일을 입력해 주세요.</div>
                    </div>
                    <div class="alertpop-item">
                        <div class="alertpop-btn">
                            <button type="button" class="fontBlue font600" id="check-btn">확인</button>
                        </div>
                    </div>
                </div>
                `
        );
        $("#inquiry-email").focus();
        return;
    }

    if (inputContents === "") {
        $("#alertpop-contents").addClass("actived");
        $("#alertpop-contents").prepend(
            `
                <div class="alertpop-wrap">
                    <div class="alertpop-item">
                        <div class="alertpop-title font600">문의사항을 입력해 주세요.</div>
                    </div>
                    <div class="alertpop-item">
                        <div class="alertpop-btn">
                            <button type="button" class="fontBlue font600" id="check-btn">확인</button>
                        </div>
                    </div>
                </div>
                `
        );
        $("#alertpop-contents").focus();
        return;
    }

    saveInquiry();
}

// 팝업 닫기
function closeInputPopup() {
    $(".alertpop").removeClass("actived");
}

// 입력한 데이터 localStorage에 저장
function saveInquiry() {
    const serviceCate = $("#ask-category").val().trim();
    const inputName = $("#inquiry-name").val().trim();
    const inputFirm = $("#inquiry-firm").val().trim();
    const inputTel = $("#inquiry-tel").val().trim();
    const inputEmail = $("#inquiry-email").val().trim();
    const inputContents = $("#inquiry-contents").val().trim();

    if ($("#chkAgree").prop("checked")) {
        let inquiryList = JSON.parse(localStorage.getItem("inquiryList") || "[]");
        // id : 이름 + 전화번호 뒤 네자리 조합으로 생성
        const idSetting = `${inputName}${inputTel.slice(7, 11)}`;

        const newInquiry = {
            id: idSetting,
            category: serviceCate,
            name: inputName,
            firm: inputFirm,
            tel: inputTel,
            email: inputEmail,
            contents: inputContents,
            submitDate: new Date().toLocaleString("ko-KR"),
        };

        inquiryList.push(newInquiry);
        localStorage.setItem("inquiryList", JSON.stringify(inquiryList));

        alert("문의가 정상적으로 접수되었습니다.");

        location.reload();
    } else {
        alert("개인정보 수집 및 이용 동의에 체크해 주세요.");
        return;
    }
}
