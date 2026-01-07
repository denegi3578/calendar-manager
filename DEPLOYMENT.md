# 📱 Calendar Tasks PWA 배포 가이드

## 🎯 완성된 파일들

```
📁 프로젝트 폴더/
├── 📄 index.html              (메인 HTML)
├── 📄 manifest.json           (PWA 설정)
├── 📄 service-worker.js       (오프라인 지원)
├── 📄 calendar-app.jsx        (React 앱 코드)
├── 🖼️ icon-192.png            (앱 아이콘 192x192) ← 생성 필요
├── 🖼️ icon-512.png            (앱 아이콘 512x512) ← 생성 필요
└── 📄 icon-generator.html     (아이콘 생성 도구)
```

---

## 🚀 배포 방법

### 옵션 1: Vercel (추천! ⭐)

**장점:**
- ✅ 완전 무료
- ✅ 자동 HTTPS
- ✅ 자동 배포 (Git push만 하면 됨)
- ✅ 빠른 속도 (CDN)
- ✅ 커스텀 도메인 가능

**배포 단계:**

1. **GitHub 레포 생성**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/[사용자명]/calendar-tasks.git
   git push -u origin main
   ```

2. **Vercel 배포**
   - https://vercel.com 접속
   - "Sign Up" (GitHub 계정으로)
   - "New Project" 클릭
   - GitHub 레포 선택
   - "Deploy" 클릭
   - 완료! 🎉

3. **URL 받기**
   - `https://calendar-tasks-xxx.vercel.app` 형태로 생성됨
   - 설정에서 커스텀 도메인 연결 가능

---

### 옵션 2: Netlify

**비슷하게 쉬움:**
1. https://netlify.com 접속
2. "Add new site" → "Import from Git"
3. GitHub 레포 선택
4. Deploy!

---

### 옵션 3: GitHub Pages (무료)

**배포 단계:**

1. **GitHub 레포 생성**
2. **Settings → Pages**
3. **Source: GitHub Actions 선택**
4. **`.github/workflows/deploy.yml` 생성:**

```yaml
name: Deploy PWA

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

5. **URL:** `https://[사용자명].github.io/calendar-tasks`

---

## 🎨 아이콘 생성하기

### 방법 1: 자동 생성 (추천)

1. `icon-generator.html` 열기
2. "192x192 다운로드" 버튼 클릭
3. "512x512 다운로드" 버튼 클릭
4. 프로젝트 폴더에 `icon-192.png`, `icon-512.png` 저장

### 방법 2: 직접 디자인

- Figma, Canva 등에서 192x192, 512x512 크기로 디자인
- PNG로 내보내기

---

## 📱 모바일 설치 방법

### Android (Chrome)

1. 웹사이트 접속
2. 하단에 "앱으로 설치하기" 배너 표시
3. "설치" 버튼 클릭
4. 홈 화면에 아이콘 추가됨!

**또는:**
- 메뉴(⋮) → "앱 설치" 또는 "홈 화면에 추가"

### iOS (Safari)

1. 웹사이트 접속
2. 공유 버튼 (⬆️) 클릭
3. "홈 화면에 추가" 선택
4. "추가" 클릭

---

## ✅ 테스트 체크리스트

배포 후 확인할 것:

- [ ] 웹사이트가 정상 작동하는가?
- [ ] 모바일에서 잘 보이는가?
- [ ] 설치 배너가 뜨는가?
- [ ] 설치 후 앱처럼 작동하는가?
- [ ] 오프라인에서도 작동하는가?
- [ ] 아이콘이 제대로 표시되는가?
- [ ] localStorage에 데이터가 저장되는가?

---

## 🔧 문제 해결

### "설치 배너가 안 뜨는데요?"

1. **HTTPS 확인:** Vercel/Netlify는 자동 HTTPS
2. **manifest.json 확인:** 브라우저 개발자도구 → Application → Manifest
3. **Service Worker 확인:** Application → Service Workers
4. **이미 설치됨:** 이미 설치했으면 안 뜸

### "오프라인이 안 되는데요?"

1. 개발자도구 → Application → Service Workers
2. "Update on reload" 체크 해제
3. 페이지 새로고침
4. 네트워크 끄고 테스트

### "아이콘이 안 보이는데요?"

1. `icon-192.png`, `icon-512.png` 파일 확인
2. 경로가 맞는지 확인 (루트 폴더에 있어야 함)
3. 브라우저 캐시 삭제 후 재설치

---

## 🎉 완료!

이제 친구들과 공유하세요:
- URL 공유
- "홈 화면에 추가하세요!" 안내

**PC에서도:**
- Chrome: 주소창 오른쪽 설치 아이콘 (➕) 클릭
- Edge: 똑같이 작동

---

## 📈 다음 단계 (선택사항)

1. **커스텀 도메인 연결**
   - Vercel 설정에서 도메인 추가
   - 예: `mytasks.com`

2. **Google Analytics 추가**
   - 사용자 통계 확인

3. **푸시 알림 구현**
   - Service Worker에 이미 준비됨
   - 백엔드 서버 필요

4. **다크모드**
   - CSS 추가

5. **데이터 동기화**
   - Firebase, Supabase 등 활용
   - 여러 기기 간 동기화

---

## 💡 팁

- **빠른 개발:** 로컬에서 테스트 시 `npx serve` 사용
- **디버깅:** Chrome DevTools → Application 탭 활용
- **성능 측정:** Lighthouse 점수 확인 (90+ 목표)

---

## 📞 참고 링크

- [PWA 체크리스트](https://web.dev/pwa-checklist/)
- [Vercel 문서](https://vercel.com/docs)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
