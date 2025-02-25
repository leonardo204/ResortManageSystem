# 리조트 예약 시스템 프론트엔드

## 프로젝트 개요

본 프로젝트는 리조트 예약 시스템의 프론트엔드 부분을 담당합니다. React와 TypeScript를 기반으로 하여 현대적이고 사용자 친화적인 웹 인터페이스를 제공합니다.

### 기술 스택

- **핵심 프레임워크/라이브러리**
  - React 19.0.0
  - TypeScript 4.9.5
  - React Router DOM 7.2.0

- **상태 관리**
  - Zustand 5.0.3

- **UI 프레임워크**
  - Material-UI (MUI) 6.4.5
  - Tailwind CSS 3.4.17

- **API 통신**
  - Axios 1.7.9

- **코드 품질 관리**
  - ESLint
  - Prettier

## 주요 기능

1. **회원 관리**
   - 회원가입/로그인
   - 이메일 인증
   - 회원 정보 수정

2. **리조트 예약**
   - 객실 목록 조회
   - 예약 현황 확인
   - 예약 생성/수정/취소

3. **리뷰 시스템**
   - 리뷰 작성/수정/삭제
   - 리뷰 목록 조회

4. **장소 정보**
   - 주변 관광지 정보
   - 맛집 정보
   - 위치 기반 서비스

5. **게시판**
   - 공지사항
   - Q&A
   - 이벤트 게시판

## 프로젝트 구조

```
frontend/
├── src/
│   ├── api/          # API 통신 관련 코드
│   ├── components/   # 재사용 가능한 컴포넌트
│   │   ├── common/   # 공통 컴포넌트
│   │   ├── auth/     # 인증 관련 컴포넌트
│   │   └── resort/   # 리조트 관련 컴포넌트
│   ├── pages/        # 페이지 컴포넌트
│   │   ├── auth/     # 인증 페이지
│   │   ├── resort/   # 리조트 페이지
│   │   └── review/   # 리뷰 페이지
│   ├── store/        # Zustand 스토어
│   ├── types/        # TypeScript 타입 정의
│   └── utils/        # 유틸리티 함수
```

## 시작하기

### 필수 요구사항

- Node.js 16.x 이상
- npm 7.x 이상

### 설치 및 실행

1. **프로젝트 클론**
   ```bash
   git clone [repository-url]
   cd [repository-name]/frontend
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **환경 변수 설정**
   ```bash
   cp .env.example .env.development
   ```
   `.env.development` 파일을 열어 필요한 환경 변수를 설정합니다.

4. **개발 서버 실행**
   ```bash
   npm start
   ```

### 빌드 및 배포

- **개발 빌드**
  ```bash
  npm run build
  ```

### 코드 품질 관리

- **린트 검사**
  ```bash
  npm run lint        # 린트 검사
  npm run lint:fix    # 린트 검사 및 자동 수정
  ```

- **코드 포맷팅**
  ```bash
  npm run format      # 포맷팅 검사
  npm run format:fix  # 포맷팅 적용
  ```

## 환경 변수

| 변수명 | 설명 | 기본값 |
|--------|------|---------|
| REACT_APP_API_URL | API 서버 주소 | http://localhost:8080 |
| REACT_APP_API_TIMEOUT | API 타임아웃 (ms) | 5000 |
| REACT_APP_ENV | 실행 환경 | development |

## Git 브랜치 전략

- `main`: 프로덕션 코드
- `develop`: 개발 환경 통합 브랜치
- `fe/*`: 프론트엔드 개발 브랜치

## 커밋 메시지 컨벤션

본 프로젝트는 [Angular JS Commit Convention](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)을 따릅니다.
