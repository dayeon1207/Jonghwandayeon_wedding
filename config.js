// 여기만 채우면 됩니다. (비워두면 해당 기능만 비활성)
window.INVITE_CONFIG = {
  // Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹)에서 복사
  FIREBASE: {
    apiKey: "AIzaSyDfS0TIOko07NRv7SS5pk9BaPFFkcuVhj4",
    authDomain: "wedding-invitation-64e0b.firebaseapp.com",
    projectId: "wedding-invitation-64e0b",
    storageBucket: "wedding-invitation-64e0b.firebasestorage.app",
    messagingSenderId: "725529009754",
    appId: "1:725529009754:web:b2f82ae61a2e3f2f8d4263"
  },
  KAKAO_JS_KEY: "",                              // 카카오 JavaScript 키
  GOOGLE_PHOTOS_URL: "https://naver.me/5T0pWYYl",   // 하객 사진 업로드 링크 (Dropbox 파일 요청 등)
  PHOTO_DEADLINE: "2027-03-06T23:59:59+09:00",           // 이 시각(한국시간) 이후에는 청첩장의 업로드 버튼이 닫힘 (결혼식 2주 후)
  ROUTE_MAP: "assets/route.jpg",                             // 예: "assets/route.jpg" (260927약도 업로드 후)
  NAVER_MAP_CLIENT_ID: "po39mk825f",                                   // 네이버 클라우드 플랫폼 > Maps > Dynamic Map 의 Client ID (README 참고)
  INTRO_VIDEO: "assets/intro.mp4",                                          // 예: "assets/intro.mp4" (h264 mp4, faststart 권장)
  INTRO_VIDEO_POSTER: "assets/intro_poster.jpg",                                    // 선택: 영상 로딩 전 표시할 이미지 경로
  VENUE_LAT: 37.4184882,                                      // 아이벡스컨벤션(양지로 17) 위도
  VENUE_LNG: 126.8827907,
  GALLERY: [ /* 예: "assets/g1.jpg", "assets/g2.jpg" */ ]
};
