# 코드 관리 가이드라인

## 1. Repository 구조
```
/
├── frontend/          # Next.js 프로젝트
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/           # Backend 프로젝트
│   ├── src/
│   └── package.json
│
└── README.md
```

## 2. Git Branch 전략
```
main              # 안정적인 프로덕션 코드
├── develop       # 개발 환경 통합 브랜치
├── fe/*          # Frontend 개발
└── be/*          # Backend 개발
```

## 3. Git 사용 가이드

### 3.1 최초 개발 환경 설정

#### Frontend 개발자
```bash
# 1. repository clone
git clone [repository-url]
cd [repository-name]

# 2. develop 브랜치 생성 (팀 첫 설정 시에만)
git checkout -b develop
git push origin develop

# 3. frontend 개발 브랜치 생성
git checkout -b fe
git push origin fe
```

#### Backend 개발자
```bash
# 1. repository clone
git clone [repository-url]
cd [repository-name]

# 2. develop 브랜치 생성 (팀 첫 설정 시에만)
git checkout -b develop
git push origin develop

# 3. backend 개발 브랜치 생성
git checkout -b be
git push origin be
```

주의: develop 브랜치는 팀의 첫 설정 시 한 번만 생성하면 됩니다. 두 번째 개발자부터는 이미 생성된 develop 브랜치를 사용하면 됩니다.

### 3.2 일상적인 개발 작업
```bash
# Frontend 개발자는 fe 브랜치에서, Backend 개발자는 be 브랜치에서 작업

# 1. 작업 시작 전 develop 브랜치 최신화 후 자신의 브랜치로 머지
git checkout develop
git pull origin develop
git checkout fe  # 또는 be
git merge develop  # 충돌 발생 시 해결

# 2. 개발 작업 후 커밋 및 푸시
git add .
git commit -m "feat: 새로운 기능 추가"
git push origin fe  # 또는 be

# 3. develop 브랜치에 머지
git checkout develop
git merge fe  # 또는 be
git push origin develop
```

### 3.3 develop 브랜치를 main으로 머지
```bash
# 1. 모든 개발이 완료되고 테스트까지 마친 후 진행
git checkout main
git pull origin main
git merge develop
git push origin main
```

## 4. Commit 메시지 규칙
```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 코드 추가/수정
chore: 기타 변경사항
```

## 5. 환경 설정 관리
- 환경변수는 .env 파일로 관리
- .env 파일은 .gitignore에 포함하여 git에 커밋되지 않도록 설정
- .env.example 파일을 통해 필요한 환경변수 공유

```
frontend/.env.development
frontend/.env.production
backend/.env.development
backend/.env.production
```

## 6. API 인터페이스 관리
- API 문서는 README나 별도 문서로 관리
- 백엔드 API 개발 전에 인터페이스 먼저 협의
- 프론트엔드 개발을 위한 임시 API 응답 데이터 준비

## 7. 개발 규칙
- 작업 시작 전 develop 브랜치 pull 필수
- 커밋 전 코드 포맷팅 실행
- ESLint, Prettier 설정 공유
- 주간 코드 동기화 시간에 맞춰 진행상황 공유

## 8. 공통 설정 파일
### .gitignore
```
# Dependencies
node_modules/
.pnp/
.pnp.js

# Testing
coverage/

# Next.js
.next/
out/

# Production
build/
dist/

# Environment Variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.idea/
.vscode/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db
```
