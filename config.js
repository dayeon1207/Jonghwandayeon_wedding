// 여기만 채우면 됩니다. (비워두면 해당 기능만 비활성)
window.INVITE_CONFIG = {
  // Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹)에서 복사
  FIREBASE: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  },
  KAKAO_JS_KEY: "",                              // 카카오 JavaScript 키
  GOOGLE_PHOTOS_URL: "",                         // 구글 포토 공유앨범 링크 (추후 입력)
  ROUTE_MAP: "assets/route.jpg",                             // 예: "assets/route.jpg" (260927약도 업로드 후)
  NAVER_MAP_CLIENT_ID: "po39mk825f",                                   // 네이버 클라우드 플랫폼 > Maps > Dynamic Map 의 Client ID (README 참고)
  INTRO_VIDEO: "assets/intro.mp4",                                          // 예: "assets/intro.mp4" (h264 mp4, faststart 권장)
  INTRO_VIDEO_POSTER: "assets/intro_poster.jpg",                                    // 선택: 영상 로딩 전 표시할 이미지 경로
  VENUE_LAT: 37.4163,                                         // 지도 검색 실패 시 대체 좌표 (아이벡스컨벤션 / 대략값 - 네이버지도에서 확인 후 수정)
  VENUE_LNG: 126.8815,
  GALLERY: [ /* 예: "assets/g1.jpg", "assets/g2.jpg" */ ]
};
