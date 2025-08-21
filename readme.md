# 📊 Embrain 엠브레인 기업 웹사이트

한국의 선도적인 마케팅 리서치 및 데이터 분석 기업 "엠브레인(Embrain)"의 공식 웹사이트를 클론한 프로젝트입니다.

## 라이브 데모

<div align="center">

### **[배포된 웹사이트 보기](https://research-platform-website.vercel.app/)**

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://research-platform-website.vercel.app/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://research-platform-website.vercel.app/)

**별도 설치 없이 바로 체험 가능**

</div>

## 프로젝트 개요

이 프로젝트는 실제 운영 중인 마케팅 리서치 기업 엠브레인의 웹사이트를 클론하여 제작한 기업 홍보 웹사이트입니다. 서비스 소개, 패널 빅데이터 시스템, 마케팅 리서치 서비스, 트렌드 리포트, 서비스 문의 등 기업의 핵심 비즈니스를 효과적으로 전달합니다.


## 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업, 접근성 고려
- **CSS3**: Flexbox, Grid, CSS Variables, 키프레임 애니메이션
- **JavaScript (ES6+)**: DOM 조작, 이벤트 핸들링, 모듈 패턴
- **jQuery 3.7.1**: DOM 조작, 이벤트 처리, AJAX

### UI/UX 특징
- **모던 디자인**: 블루 톤 기반 기업 아이덴티티
- **스크롤 애니메이션**: 뷰포트 진입 시 텍스트/이미지 애니메이션
- **반응형 네비게이션**: 데스크톱 드롭다운, 모바일 햄버거 메뉴
- **클리핑 애니메이션**: 이미지 reveal 효과

### 데이터 관리
- **LocalStorage**: 서비스 문의 데이터 영구 저장
- **JSON**: 패널 데이터 구조화
- **폼 검증**: 실시간 입력 유효성 검사

## 프로젝트 구조

```
research-platform-website/
│
├── 📄 index.html                    # 메인 홈페이지
│
├── 🎨 css/                          # 스타일시트
│   ├── style.css                   # 글로벌 스타일 & 헤더/푸터
│   ├── index.css                   # 메인 페이지 스타일
│   ├── data_panel.css              # 패널 빅데이터 페이지
│   ├── research_marketing.css      # 마케팅 리서치 페이지
│   ├── service_ask.css             # 서비스 문의 페이지
│   ├── side.main.css               # 트렌드 리포트 페이지
│   ├── effect.css                  # 애니메이션 효과
│   └── font.css                    # 웹폰트 & 타이포그래피
│
├── 🖼️ img/                          # 이미지 리소스
│   ├── logo/                       # 브랜드 로고 (블루/화이트)
│   ├── index/                      # 메인 페이지 이미지
│   ├── data_panel/                 # 패널 데이터 관련 이미지
│   ├── research_marketing/         # 마케팅 리서치 이미지
│   ├── service_ask/                # 문의 폼 아이콘
│   ├── side.main/                  # 트렌드 리포트 썸네일
│   └── footer/                     # SNS 아이콘
│
├── ⚙️ js/                           # JavaScript 파일
│   ├── header.js                   # 네비게이션 & 드롭다운
│   ├── index.js                    # 메인 페이지 애니메이션
│   ├── data_panel.js               # 패널 데이터 인터랙션
│   ├── research_marketing.js       # 마케팅 리서치 기능
│   ├── service_ask.js              # 문의 폼 처리 & 검증
│   └── script.js                   # 공통 유틸리티
│
├── 📊 json/                         # 데이터 파일
│   └── datapanel_data.json         # 패널 데이터 샘플
│
└── 📃 pages/                        # 서브 페이지
    ├── data_panel.html             # 패널 빅데이터 서비스
    ├── research_marketing.html     # 마케팅 리서치 서비스
    ├── service_ask.html            # 서비스 문의
    └── side.main.html              # 트렌드 리포트
```

## 실행 방법

### 온라인에서 바로 체험

**가장 쉬운 방법** - 별도 설치 없이 바로 사용 가능합니다.

👉 **[https://research-platform-website.vercel.app/](https://research-platform-website.vercel.app/)**

### 로컬 환경에서 실행

#### 요구 사항
- 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- 로컬 웹 서버 (Live Server 권장)

#### 설치 및 실행

1. **저장소 클론**
```bash
git clone https://github.com/Emma10003/research-platform-website.git
cd research-platform-website
```

2. **VS Code Live Server 실행**
- VS Code에서 프로젝트 열기
- Live Server 확장 프로그램 설치
- `index.html` 우클릭 → "Open with Live Server"

3. **브라우저에서 접속**
```
http://localhost:5500
```

## 핵심 기능 구현

### 1. 동적 텍스트 애니메이션 (index.js)

```javascript
// 메인 타이틀 글자별 애니메이션
function deepDataSplitLetters() {
  for (let i = 0; i < 2; i++) {
    let content = $(`#text-row${i + 1}`).text();
    let html = content
      .split("")
      .map((char) => `<span class="charChild">${char}</span>`)
      .join("");
    $(`#text-row${i + 1}`).html(html);
  }
}

// 순차적 등장 효과
function addFlyInEffect() {
  deepDataSplitLetters();
  $(".charChild").each(function (index) {
    const delay = index * 0.07;
    $(this).css({
      "animation-delay": `${delay}s`,
      opacity: "1",
    }).addClass("intro-effect");
  });
}
```

### 2. 스크롤 기반 애니메이션 (effect.css)

```css
/* 뷰포트 진입 시 텍스트 등장 */
.text-appear {
  animation-name: textAppear;
  animation-timeline: view();
  animation-range: entry 10% cover 50vh;
}

@keyframes textAppear {
  0% {
    opacity: 0;
    scale: 0.5;
    transform: translateY(500px);
  }
  100% {
    opacity: 1;
    scale: 1;
    transform: translateY(0);
  }
}

/* 이미지 클리핑 애니메이션 */
@keyframes shapeAnimation {
  0% { clip-path: circle(25% at 50% 50%); }
  100% { clip-path: circle(100% at 50% 50%); }
}
```

### 3. 서비스 문의 시스템 (service_ask.js)

```javascript
// 실시간 폼 검증
function inputRequiredCheck() {
  const inputService = $("#ask-category").val().trim();
  const inputName = $("#inquiry-name").val().trim();
  const inputFirm = $("#inquiry-firm").val().trim();
  const inputPhone = $("#inquiry-tel").val().trim();
  const inputEmail = $("#inquiry-email").val().trim();
  const inputContents = $("#inquiry-contents").val().trim();

  // 필수 필드 체크
  if (inputService === "") {
    showAlert("서비스 유형을 선택해 주세요.");
    return;
  }
  // ... 기타 검증 로직

  saveInquiry();
}

// 로컬 스토리지에 문의 데이터 저장
function saveInquiry() {
  let inquiryList = JSON.parse(localStorage.getItem("inquiryList") || "[]");
  const newInquiry = {
    id: `${inputName}${inputTel.slice(7, 11)}`,
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
}
```

### 4. 반응형 네비게이션 (header.js)

```javascript
// 드롭다운 메뉴 애니메이션
function gnbDropdown() {
  $(".header-inner").on("mouseenter", function () {
    $(".snb-list-wrap").show();
    $("#dHead").addClass("active-snb");
    $(".snb-list-cell").addClass("snb-text-slideup");
  });

  $(".header-inner").on("mouseleave", function () {
    $(".snb-list-wrap").hide();
    $("#dHead").removeClass("active-snb");
    $(".snb-list-cell").addClass("snb-text-slidedown");
  });
}

// 모바일 햄버거 메뉴
mobileMenuBtn.on("click", function () {
  mobileGnbWrap.addClass("active");
});
```

### 5. 패널 데이터 시각화

```css
/* 원형 아이콘 컨테이너 */
.beyond-container .item-img {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  border: 4px solid #0066cc;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 호버 효과 */
.beyond-container .btn-group-inner:hover {
  background-color: #f5f5f5;
  transition: background-color 0.3s;
}
```


## 디자인 시스템

### 컬러 팔레트
```css
:root {
  --primary-blue: #0066cc;
  --text-black: #111111;
  --text-gray: #444444;
  --light-gray: #d3d7db;
  --background-gray: #4c647f;
  --white: #ffffff;
  --required-red: #ff0000;
}
```

### 타이포그래피
- **Primary Font**: Pretendard (한글 최적화 웹폰트)
- **Weight Range**: 300 (Light) ~ 900 (Black)
- **Font Classes**: `.font300` ~ `.font900`, `.fontBlue`, `.fontWhite`
- **Responsive Scaling**: 미디어 쿼리별 폰트 크기 조정

### 애니메이션 시스템
- **Duration**: 0.25s ~ 4s (콘텐츠에 따라 차등)
- **Easing**: cubic-bezier() 커스텀 곡선
- **Performance**: transform & opacity 우선 사용
- **Accessibility**: `prefers-reduced-motion` 지원

## 반응형 디자인

### 데스크톱 (1024px+)
- 풀화면 히어로 섹션 (100vh)
- 3단 컬럼 레이아웃
- 호버 인터랙션 + 드롭다운 메뉴

### 태블릿 (768px - 1023px)
- 2단 컬럼 레이아웃
- 터치 친화적 버튼 크기 (최소 44px)
- 글자 크기 조정 (36px → 28px)

### 모바일 (480px - 767px)
- 1단 컬럼 레이아웃
- 햄버거 메뉴 + 전체화면 네비게이션
- 패딩 및 마진 최적화

### 소형 모바일 (360px - 479px)
- 최소 폰트 크기 보장 (10px+)
- 간소화된 애니메이션
- 핵심 콘텐츠 우선 표시

## 테스트 시나리오

### 서비스 문의 폼 테스트
1. [서비스 문의 페이지](https://research-platform-website.vercel.app/pages/service_ask.html) 접속
2. 필수 필드 누락 시 경고 메시지 확인
3. 정상 입력 후 제출 → 로컬스토리지 저장 확인
4. 브라우저 개발자 도구 → Application → Local Storage → `inquiryList` 확인

### 반응형 디자인 테스트
1. 브라우저 개발자 도구 (F12) 열기
2. 디바이스 모드 활성화 (Ctrl/Cmd + Shift + M)
3. 다양한 화면 크기로 테스트
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

### 애니메이션 테스트
1. 메인 페이지 로드 → "Deep data, better insights" 타이핑 효과 확인
2. 스크롤 다운 → 섹션별 텍스트 등장 애니메이션 확인
3. 네비게이션 호버 → 드롭다운 슬라이드 효과 확인

## 브라우저 호환성

### 지원 브라우저
- ✅ Chrome 90+ (권장)
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### 핵심 기능 호환성
- ✅ CSS Grid & Flexbox
- ✅ CSS Custom Properties (CSS Variables)
- ✅ ES6+ JavaScript (Arrow Functions, Template Literals)
- ✅ jQuery 3.7.1
- ✅ LocalStorage/SessionStorage
- ✅ CSS Animations & Keyframes


<div align="center">

**Deep data, better insights - 엠브레인과 함께하는 데이터 혁신**

🔗 **[웹사이트 체험하기](https://research-platform-website.vercel.app/)**

</div>
