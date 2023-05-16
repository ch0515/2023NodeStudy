const fs = require('fs');

fs.unlink('[기밀].txt', err => {
  if(err) throw err;

  console.log('삭제 완료');
});