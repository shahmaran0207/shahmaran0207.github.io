# Requirements Document

## Introduction

포트폴리오 웹사이트의 Aboutme.html 파일에 Career(경력) 섹션을 추가하는 기능입니다. Education 섹션과 Certificate 섹션 사이에 새로운 Career 섹션을 삽입하여 사용자의 경력 정보를 표시합니다.

## Glossary

- **Career Section**: 사용자의 경력 정보를 표시하는 HTML 섹션
- **Aboutme.html**: 포트폴리오 웹사이트의 프로필 정보를 담고 있는 HTML 파일
- **Education Section**: 학력 정보를 표시하는 기존 섹션
- **Certificate Section**: 자격증 정보를 표시하는 기존 섹션
- **Portfolio System**: 전체 포트폴리오 웹사이트 시스템

## Requirements

### Requirement 1

**User Story:** 포트폴리오 방문자로서, 나는 개발자의 경력 정보를 확인하고 싶다. 그래야 개발자의 실무 경험을 파악할 수 있다.

#### Acceptance Criteria

1. WHEN 사용자가 Aboutme 섹션을 스크롤할 때, THE Portfolio System SHALL Education 섹션 아래에 Career 섹션을 표시한다
2. THE Portfolio System SHALL Career 섹션에 "Career" 제목을 표시한다
3. THE Portfolio System SHALL 회사명 "(주)라임에스"를 표시한다
4. THE Portfolio System SHALL 근무 기간 "2024.05.12 ~ 2025.05.12"를 표시한다
5. THE Portfolio System SHALL 직급 "R&D 연구원"을 표시한다
6. THE Portfolio System SHALL 직무 "GIS웹개발자"를 표시한다

### Requirement 2

**User Story:** 포트폴리오 관리자로서, 나는 Career 섹션이 기존 섹션들과 일관된 디자인을 유지하기를 원한다. 그래야 전체 페이지의 통일성이 유지된다.

#### Acceptance Criteria

1. THE Portfolio System SHALL Career 섹션에 Education 섹션과 동일한 CSS 클래스 구조를 적용한다
2. THE Portfolio System SHALL Career 섹션의 레이아웃을 Education 섹션과 유사하게 구성한다
3. THE Portfolio System SHALL Career 섹션의 폰트, 색상, 간격을 기존 섹션들과 일치시킨다
4. THE Portfolio System SHALL Career 섹션과 Certificate 섹션 사이에 적절한 여백을 제공한다

### Requirement 3

**User Story:** 포트폴리오 방문자로서, 나는 모바일 기기에서도 Career 섹션을 명확하게 볼 수 있기를 원한다. 그래야 어떤 기기에서든 정보를 확인할 수 있다.

#### Acceptance Criteria

1. WHEN 사용자가 모바일 기기에서 페이지를 열 때, THE Portfolio System SHALL Career 섹션을 반응형으로 표시한다
2. THE Portfolio System SHALL 작은 화면에서 텍스트가 적절히 줄바꿈되도록 한다
3. THE Portfolio System SHALL 모든 화면 크기에서 Career 정보의 가독성을 유지한다
