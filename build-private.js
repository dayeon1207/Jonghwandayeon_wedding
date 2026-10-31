// Netlify(Git 연동) 배포용: 환경변수 중 PRIVATE_ 로 시작하는 값으로 private.config.js 를 만듭니다.
// 환경변수가 하나도 없으면 기존 private.config.js 를 그대로 둡니다.
const fs = require('fs');
const env = Object.fromEntries(Object.entries(process.env).filter(([k]) => k.startsWith('PRIVATE_')));
if (Object.keys(env).length) {
  fs.writeFileSync('private.config.js', 'window.PRIVATE_CONFIG = ' + JSON.stringify(env, null, 2) + ';\n');
  console.log('private.config.js 생성 (' + Object.keys(env).length + '개 값)');
} else {
  console.log('PRIVATE_ 환경변수 없음 - private.config.js 를 만들지 않습니다.');
}
