// 배포(Netlify/GitHub Actions) 때: 환경변수·Secrets 중 PRIVATE_ 로 시작하는 값으로 private.config.js 를 만듭니다.
// 값이 하나도 없으면 기존 private.config.js(로컬용)를 그대로 둡니다.
const fs = require('fs');
const env = Object.fromEntries(Object.entries(process.env).filter(([k]) => k.startsWith('PRIVATE_')));
const keys = Object.keys(env);
const filled = keys.filter((k) => String(env[k]).trim() !== '');
if (keys.length) {
  fs.writeFileSync('private.config.js', 'window.PRIVATE_CONFIG = ' + JSON.stringify(env, null, 2) + ';\n');
  console.log('private.config.js 생성: 전체 ' + keys.length + '개 중 값이 있는 항목 ' + filled.length + '개');
  console.log('값이 있는 항목: ' + (filled.join(', ') || '(없음)'));
  if (!filled.length) console.log('::warning title=PRIVATE Secrets 비어 있음::GitHub Secrets 에 값이 입력되지 않았습니다. 이름(PRIVATE_GROOM_PHONE 등)과 값을 확인하세요.');
} else {
  console.log('PRIVATE_ 환경변수 없음 - private.config.js 를 만들지 않습니다.');
  console.log('::warning title=PRIVATE 환경변수 없음::워크플로의 env 항목이 Secrets 를 읽지 못했습니다.');
}
