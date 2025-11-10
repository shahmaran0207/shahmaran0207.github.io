# Design Document

## Overview

Aboutme.html 파일에 Career(경력) 섹션을 추가하여 사용자의 직장 경력 정보를 표시합니다. 이 섹션은 Education 섹션과 Certificate 섹션 사이에 위치하며, 기존 섹션들과 동일한 디자인 패턴을 따릅니다.

## Architecture

### 구조적 배치

```
Aboutme.html
├── Education Section (기존)
├── Career Section (신규 추가) ← 여기에 추가
└── Certificate Section (기존)
```

### HTML 구조

Career 섹션은 다음과 같은 계층 구조를 가집니다:

```html
<div class="career-container">
  <div class="eduandawards">
    <div class="profile-title">Career</div>
  </div>
  <div class="career-content">
    <div class="career-item">
      <!-- 회사 정보 -->
      <div class="aboutMe-title">
        <div class="about-main">(주)라임에스</div>
        <div class="about-title">
          <div class="button-text">R&D 연구원</div>
        </div>
      </div>
      <!-- 기간 및 직무 정보 -->
      <div class="career-details">
        <div class="sub-main">
          <div class="date-text">근무기간</div>
          <div class="sub-sub">2024.05.12 ~ 2025.05.12</div>
        </div>
        <div class="sub-main">
          <div class="date-text">직무</div>
          <div class="sub-sub">GIS웹개발자</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Components and Interfaces

### 1. Career Container
- **클래스**: `career-container`
- **목적**: Career 섹션 전체를 감싸는 컨테이너
- **스타일**: Education 섹션의 `education-container`와 동일한 스타일 적용
  - `width: 100%`
  - `justify-content: flex-start`
  - `align-items: flex-start`
  - `gap: 80px`
  - `display: flex`
  - `margin-top: 60px` (Certificate 섹션과 동일한 간격)

### 2. Career Title
- **클래스**: `profile-title`
- **내용**: "Career"
- **스타일**: 기존 섹션 제목과 동일
  - `color: white`
  - `font-size: 40px`
  - `font-weight: 700`
  - `line-height: 52px`

### 3. Career Content
- **클래스**: `career-content`
- **목적**: 경력 항목들을 담는 컨테이너
- **스타일**: `gnu` 클래스와 유사한 스타일 적용
  - `margin-left: 50px`
  - `flex: 1 1 0`
  - `flex-direction: column`
  - `gap: 40px`
  - `display: flex`

### 4. Career Item
- **클래스**: `career-item`
- **목적**: 개별 경력 정보를 담는 컨테이너
- **스타일**: `gnu-title` 클래스와 유사한 구조
  - `flex-direction: column`
  - `gap: 16px`
  - `display: flex`

### 5. Company Information
- **클래스**: `aboutMe-title`, `about-main`, `about-title`, `button-text`
- **내용**: 회사명과 직급
- **스타일**: Education 섹션의 학교명 표시 방식과 동일

### 6. Career Details
- **클래스**: `career-details`
- **목적**: 근무기간과 직무 정보를 담는 컨테이너
- **스타일**: 
  - `flex-direction: column`
  - `gap: 8px`
  - `display: flex`

## Data Models

### Career Information Structure

```javascript
{
  company: "(주)라임에스",
  position: "R&D 연구원",
  period: {
    start: "2024.05.12",
    end: "2025.05.12"
  },
  role: "GIS웹개발자"
}
```

## CSS Styling

### 새로운 CSS 클래스

```css
.career-container {
    width: 100%;
    margin-top: 60px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 80px;
    display: flex;
}

.career-content {
    margin-left: 50px;
    flex: 1 1 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
    display: flex;
}

.career-item {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: flex;
}

.career-details {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
}
```

### 기존 클래스 재사용

다음 기존 클래스들을 재사용합니다:
- `.eduandawards` - 섹션 제목 컨테이너
- `.profile-title` - 섹션 제목 텍스트
- `.aboutMe-title` - 회사명과 직급 컨테이너
- `.about-main` - 회사명
- `.about-title` - 직급 배지 컨테이너
- `.button-text` - 직급 텍스트
- `.sub-main` - 정보 행 컨테이너
- `.date-text` - 라벨 텍스트
- `.sub-sub` - 값 텍스트

## Responsive Design

### 반응형 브레이크포인트

기존 CSS의 미디어 쿼리 패턴을 따라 다음 브레이크포인트에서 조정이 필요합니다:

1. **모바일 (max-width: 768px)**
   - `.career-content { margin-left: 20px; }`
   - 텍스트 크기 조정

2. **태블릿 (769px ~ 1024px)**
   - `.career-container { flex-direction: column; }`
   - 중앙 정렬 적용

3. **데스크톱 (1025px 이상)**
   - 기본 스타일 유지

### 반응형 CSS 추가

```css
@media (min-width: 851px) and (max-width: 912px) {
    .career-content {
        margin-left: 7%;
    }
}

@media (min-width: 913px) and (max-width: 1024px) {
    .career-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .career-content {
        margin-left: 20%;
        margin-top: -10%;
    }
}

@media (min-width: 1025px) and (max-width: 1080px) {
    .career-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .career-content {
        margin-left: 20%;
    }
}
```

## Integration Points

### 1. HTML 삽입 위치

Aboutme.html 파일에서 다음 위치에 Career 섹션을 삽입합니다:

```html
</div> <!-- education-container 종료 -->

<!-- Career Section 추가 위치 -->
<div class="career-container">
  ...
</div>

<div class="certificate1"> <!-- certificate 섹션 시작 -->
```

### 2. CSS 파일 수정

`html/css/styles.css` 파일에 새로운 CSS 클래스를 추가합니다.

## Visual Design

### 색상 스키마
- 배경색: `#232323` (기존 섹션과 동일)
- 텍스트 색상: `white`
- 배지 배경색: `#373737`
- 폰트: Pretendard (기존과 동일)

### 타이포그래피
- 섹션 제목: 40px, bold (700)
- 회사명: 24px, bold (700)
- 직급 배지: 16px, bold (700)
- 라벨: 20px, bold (700)
- 값: 20px, medium (500)

### 간격
- 섹션 간 여백: 60px (상단)
- 내부 요소 간격: 16px
- 정보 행 간격: 8px

## Accessibility

- 시맨틱 HTML 구조 유지
- 적절한 색상 대비 (white on #232323)
- 반응형 디자인으로 모든 기기에서 접근 가능
- 텍스트 크기 조정 가능

## Testing Strategy

### 1. 시각적 테스트
- Education 섹션과 스타일 일관성 확인
- Certificate 섹션과의 간격 확인
- 다양한 화면 크기에서 레이아웃 확인

### 2. 반응형 테스트
- 모바일 (320px ~ 768px)
- 태블릿 (769px ~ 1024px)
- 데스크톱 (1025px 이상)
- 초대형 화면 (2560px 이상)

### 3. 브라우저 호환성
- Chrome
- Firefox
- Safari
- Edge

### 4. 콘텐츠 테스트
- 회사명 표시 확인
- 근무기간 표시 확인
- 직급 표시 확인
- 직무 표시 확인

## Implementation Notes

1. **HTML 구조**: Education 섹션의 구조를 참고하여 동일한 패턴으로 작성
2. **CSS 클래스**: 기존 클래스를 최대한 재사용하여 일관성 유지
3. **반응형**: 기존 미디어 쿼리 패턴을 따라 각 브레이크포인트에서 적절히 조정
4. **확장성**: 향후 여러 경력을 추가할 수 있도록 `.career-item` 구조로 설계
