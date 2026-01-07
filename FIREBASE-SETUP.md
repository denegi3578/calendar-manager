# 🔥 Firebase 설정 가이드

## 📋 Firebase 프로젝트 생성

### 1단계: Firebase Console 접속

1. https://console.firebase.google.com 접속
2. Google 계정으로 로그인
3. "프로젝트 추가" 클릭

---

### 2단계: 프로젝트 설정

1. **프로젝트 이름 입력**
   - 예: `calendar-tasks`

2. **Google Analytics** (선택사항)
   - 원하면 활성화, 아니면 비활성화

3. **프로젝트 만들기** 클릭
   - 30초 정도 기다리면 완성!

---

### 3단계: 웹 앱 추가

1. 프로젝트 개요 화면에서
2. **웹 아이콘 (</>)** 클릭
3. **앱 닉네임** 입력
   - 예: `Calendar Tasks Web`
4. **Firebase Hosting 설정** 체크 (선택)
5. **앱 등록** 클릭

---

### 4단계: Firebase 설정 복사

화면에 아래와 같은 코드가 나타납니다:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "calendar-tasks-xxxxx.firebaseapp.com",
  projectId: "calendar-tasks-xxxxx",
  storageBucket: "calendar-tasks-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:xxxxxxxxxxxxxx"
};
```

**이 코드를 복사하세요!** 📋

---

### 5단계: index.html 수정

`index.html` 파일을 열고:

```javascript
// 🔥 Firebase 초기화 (배포 시 여기에 본인의 설정을 넣으세요)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",           // ← 여기를
  authDomain: "YOUR_PROJECT_ID...", // ← 복사한
  projectId: "YOUR_PROJECT_ID",     // ← 코드로
  storageBucket: "YOUR_PROJECT...", // ← 교체
  messagingSenderId: "YOUR_MESS...",// ← 하세요!
  appId: "YOUR_APP_ID"              // ←
};
```

**복사한 설정으로 교체!**

---

### 6단계: Authentication 활성화

1. 왼쪽 메뉴에서 **Authentication** 클릭
2. **시작하기** 클릭
3. **로그인 방법** 탭 선택
4. **Google** 선택
5. **사용 설정** 토글 ON
6. **프로젝트 지원 이메일** 선택
7. **저장** 클릭

---

### 7단계: Firestore 활성화

1. 왼쪽 메뉴에서 **Firestore Database** 클릭
2. **데이터베이스 만들기** 클릭
3. **보안 규칙 선택**
   - "프로덕션 모드에서 시작" 선택
4. **위치 선택**
   - `asia-northeast3 (서울)` 추천
5. **사용 설정** 클릭

---

### 8단계: 보안 규칙 설정

Firestore Database → **규칙** 탭:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 사용자는 자기 데이터만 읽고 쓸 수 있음
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

**게시** 클릭!

---

### 9단계: 승인된 도메인 추가

Authentication → **설정** → **승인된 도메인**:

- `localhost` (이미 있음)
- `127.0.0.1` (이미 있음)
- **배포한 도메인 추가** (예: `calendar-tasks.vercel.app`)

---

## ✅ 완료!

이제 앱을 실행하면:

1. 로그인 화면이 나타남
2. "Google 계정으로 로그인" 클릭
3. 계정 선택
4. 로그인 완료!

---

## 🔄 작동 방식

```
사용자 로그인
    ↓
Google 인증
    ↓
Firestore에서 데이터 불러오기
    ↓
앱 사용
    ↓
데이터 변경 시 자동으로 Firestore에 저장 (1초 디바운스)
    ↓
다른 기기에서 로그인 → 같은 데이터!
```

---

## 💡 주요 기능

✅ **자동 동기화**
- 데이터 변경 1초 후 자동 저장
- 다른 기기에서 즉시 반영

✅ **오프라인 지원**
- 오프라인에서도 작동
- 온라인 복귀 시 자동 동기화

✅ **실시간 업데이트**
- Firestore persistence 활성화
- 탭 간 동기화

✅ **보안**
- 각 사용자는 자신의 데이터만 접근
- Google 인증 사용

---

## 🐛 문제 해결

### "로그인 팝업이 안 떠요"

**원인:** 팝업 차단
**해결:** 브라우저 설정에서 팝업 허용

### "동기화가 안 돼요"

1. 개발자 도구 → Console 확인
2. Firebase 설정 확인
3. 보안 규칙 확인
4. 네트워크 연결 확인

### "승인되지 않은 도메인"

Authentication → 설정 → 승인된 도메인에 추가

### "Firestore 권한 오류"

보안 규칙이 제대로 설정되었는지 확인

---

## 📊 Firebase 무료 한도

**Spark 플랜 (무료):**
- Firestore: 읽기 50,000 / 쓰기 20,000 / 삭제 20,000 (일일)
- Storage: 1GB
- Authentication: 무제한

**개인 사용엔 충분해요!**

---

## 🚀 배포 시 주의사항

1. **Firebase 설정 보안**
   - API Key는 공개되어도 괜찮음 (보안 규칙이 중요)
   - 하지만 GitHub에 올릴 땐 환경변수 권장

2. **도메인 등록**
   - Vercel/Netlify 배포 후
   - Firebase Console에서 도메인 추가

3. **보안 규칙 검토**
   - 규칙이 제대로 작동하는지 테스트

---

## 📞 참고 링크

- [Firebase 문서](https://firebase.google.com/docs)
- [Firestore 보안 규칙](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Authentication](https://firebase.google.com/docs/auth)

---

## 🎉 완성!

이제 모든 기기에서 할일이 동기화됩니다!

- 📱 모바일에서 추가 → 💻 PC에서 보임
- 💻 PC에서 완료 → 📱 모바일에서 체크
- ☁️ 클라우드에 안전하게 저장
