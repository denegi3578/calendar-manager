# 📱 Calendar Tasks PWA + Firebase

할일 관리와 캘린더를 하나로 합친 Progressive Web App (클라우드 동기화 지원!)

## ✨ 주요 기능

### 📋 할일 관리
- ✅ 목록별 할일 관리
- ✅ 서브테스크
- ✅ 우선순위
- ✅ 미루기
- ✅ 알림

### 📅 달력 & 일과표
- ✅ 월간 달력 뷰
- ✅ 일과표 (타임라인)
- ✅ 반복 할일 (요일별)
- ✅ 완료/못함 추적

### 🔥 Firebase 동기화
- ✅ Google 로그인
- ✅ 클라우드 자동 동기화
- ✅ 모든 기기에서 같은 데이터
- ✅ 오프라인 지원

### ⚡ PWA 기능
- ✅ 홈 화면 아이콘
- ✅ 오프라인 작동
- ✅ 빠른 로딩
- ✅ 푸시 알림 지원

### ⌨️ 편의 기능
- ✅ 키보드 단축키 (Cmd/Ctrl+K)
- ✅ 드래그 앤 드롭
- ✅ 토글 UI (요일/날짜 선택)
- ✅ 빠른 추가 모달

---

## 🚀 빠른 시작

### 1️⃣ 아이콘 생성 (1분)
```
icon-generator.html 열기
→ 192x192 다운로드
→ 512x512 다운로드
```

### 2️⃣ Firebase 설정 (5분)
```
📄 FIREBASE-SETUP.md 파일 참조

1. Firebase Console에서 프로젝트 생성
2. Authentication 활성화 (Google)
3. Firestore 활성화
4. 설정 코드를 index.html에 붙여넣기
```

### 3️⃣ 배포 (5분)
```
📄 DEPLOYMENT.md 파일 참조

추천: Vercel
1. GitHub에 업로드
2. Vercel 연결
3. Deploy!
```

### 4️⃣ 모바일 설치
```
Android: 하단 "앱으로 설치" 배너 → 설치
iOS: 공유(⬆️) → 홈 화면에 추가
```

---

## 📁 파일 구조

```
📁 프로젝트/
├── 📄 index.html              ← Firebase SDK 포함
├── 📄 manifest.json           ← PWA 설정
├── 📄 service-worker.js       ← 오프라인 지원
├── 📄 calendar-app.jsx        ← React 앱 (Firebase 연동)
├── 🖼️ icon-192.png            ← 생성 필요
├── 🖼️ icon-512.png            ← 생성 필요
├── 📄 icon-generator.html     ← 아이콘 생성 도구
├── 📘 README.md               ← 이 파일
├── 📘 DEPLOYMENT.md           ← 배포 가이드
└── 📘 FIREBASE-SETUP.md       ← Firebase 설정 가이드
```

---

## 🔄 동기화 작동 방식

```
PC에서 작업
    ↓
Firestore에 자동 저장 (1초 디바운스)
    ↓
☁️ 클라우드
    ↓
모바일에서 확인 → 동일한 데이터!
```

**오프라인:**
- 오프라인에서도 작동
- 온라인 복귀 시 자동 동기화
- LocalStorage + Firestore persistence

---

## 💻 기술 스택

- **Frontend:** React 18
- **Backend:** Firebase (Firestore + Auth)
- **Storage:** LocalStorage + Firestore
- **Auth:** Google OAuth
- **PWA:** Service Worker + Manifest

---

## 📱 사용 화면

### 로그인
```
Google 계정으로 간편 로그인
→ 모든 기기에서 동일한 데이터
```

### 동기화 상태
```
✓ 동기화됨   (초록색)
⟳ 동기화 중  (노란색)
⚠ 오프라인   (빨간색)
```

### 프로필
```
우측 상단: 프로필 사진 + 로그아웃 버튼
```

---

## 🔐 보안

- ✅ 각 사용자는 자신의 데이터만 접근
- ✅ Firestore 보안 규칙 적용
- ✅ Google OAuth 인증
- ✅ HTTPS 필수

---

## 💰 비용

**Firebase Spark 플랜 (무료):**
- Firestore 읽기: 50,000/일
- Firestore 쓰기: 20,000/일
- Authentication: 무제한
- Storage: 1GB

**개인 사용에 충분!**

---

## 🐛 문제 해결

### 로그인이 안 돼요
1. Firebase 설정 확인
2. Authentication 활성화 확인
3. 승인된 도메인 확인

### 동기화가 안 돼요
1. 네트워크 연결 확인
2. 개발자 도구 → Console 확인
3. Firestore 보안 규칙 확인

### 앱이 느려요
- 브라우저 캐시 삭제
- Service Worker 업데이트

---

## 🎯 다음 단계

1. ✅ PWA 설치
2. ✅ Firebase 연동
3. ⬜ 커스텀 도메인 연결
4. ⬜ 다크모드 추가
5. ⬜ 푸시 알림 구현
6. ⬜ 공유 기능

---

## 📞 참고 자료

- [PWA 가이드](https://web.dev/pwa/)
- [Firebase 문서](https://firebase.google.com/docs)
- [React 문서](https://react.dev/)

---

## 📄 라이선스

MIT License

---

## 🙏 감사합니다!

문제가 있거나 개선 아이디어가 있으면 이슈를 남겨주세요!
