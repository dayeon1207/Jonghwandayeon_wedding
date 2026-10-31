# 박종환 ♥ 정다연 모바일 청첩장
## Netlify 배포
1. app.netlify.com/drop 에 이 `site` 폴더를 통째로 드래그 (또는 Add new site > Deploy manually)
2. 이후 수정 시 같은 사이트의 Deploys 탭에 폴더를 다시 드롭하면 URL 유지
## 설정 순서
1. Firebase: 프로젝트 생성 > Firestore Database 만들기 > 규칙에 firestore.rules 붙여넣기 > 웹 앱 등록 후 config.js 에 값 입력
2. 카카오: developers.kakao.com 앱 생성 > JavaScript 키를 config.js 에 입력, "플랫폼 키 > JavaScript SDK 도메인"과 "제품 링크 관리 > 웹 도메인" 두 곳에 Netlify 도메인 등록
3. ROMANTICE 폰트: assets/fonts/ROMANTICE.woff2(또는 .otf/.ttf) 로 넣기
4. 갤러리/약도: 사진을 assets/ 에 넣고 config.js 의 GALLERY, ROUTE_MAP 에 경로 입력
5. 갤러리(구글 드라이브): 드라이브 폴더를 "링크가 있는 모든 사용자 – 뷰어"로 공유 → console.cloud.google.com 에서 프로젝트 생성 > "Google Drive API" 사용 설정 > 사용자 인증 정보 > API 키 생성(HTTP referrer를 Netlify 도메인으로, API는 Drive API만 허용) → config.js 의 DRIVE_API_KEY 에 입력. Gallery 폴더 안 파일명은 1.jpg, 2.jpg … 순서
6. 네이버 지도: console.ncloud.com > Application > Maps 에서 Dynamic Map 신청 → 웹 서비스 URL에 Netlify 도메인 등록 → Client ID를 config.js 의 NAVER_MAP_CLIENT_ID 에 입력
7. 갤러리 사진(직접 업로드): `tools/photo-optimizer.html` 을 열어 원본을 선택 → 700px·JPEG 75%로 줄인 gallery.zip 다운로드 → 압축을 풀어 `assets/gallery/` 에 1.jpg, 2.jpg … 로 넣고 재배포. 9장을 넘으면 자동으로 옆으로 넘기는 페이지가 생깁니다.
8. 개인정보(전화번호·계좌번호·관리자 비밀번호): `private.config.js` 에서만 관리합니다(키는 모두 PRIVATE_ 로 시작). 이 파일은 `.gitignore` 에 있어 Git/GitHub 에는 올라가지 않습니다. 드래그 방식 배포는 폴더에 이 파일이 들어 있으면 되고, GitHub→Netlify 자동 배포는 Netlify 사이트 설정 > Environment variables 에 같은 이름(PRIVATE_GROOM_PHONE 등)으로 값을 넣으면 빌드 때 `build-private.js` 가 파일을 만들어 줍니다. 예시는 `private.config.example.js` 참고.
9. GitHub Pages(주소가 ○○○.github.io 인 경우)로 배포할 때: 저장소에는 `private.config.js` 가 없으므로 전화·계좌가 비어 보입니다. `.github/workflows/deploy.yml` 을 저장소에 올리고, 저장소 Settings > Pages > Source 를 **GitHub Actions** 로 바꾼 뒤, Settings > Secrets and variables > Actions 에 `private.config.example.js` 의 키 이름(PRIVATE_GROOM_PHONE 등)과 같은 이름으로 Secret 을 만드세요. push 할 때마다 배포 과정에서만 `private.config.js` 가 만들어집니다.
