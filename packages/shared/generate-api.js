const orval = require('orval');
const config = require('../../ovral.config');

async function generateApi() {
  try {
    await orval.generate(config.petstore);
    console.log('API 클라이언트 코드 생성이 완료되었습니다.');
  } catch (error) {
    console.error('API 클라이언트 코드 생성 중 오류가 발생했습니다:', error);
  }
}

generateApi();
