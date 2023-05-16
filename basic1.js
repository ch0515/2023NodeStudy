const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(req, res){
  res.setHeader('Content-type', 'text/html');
  if(url == '/'){
    //스트리밍 방식으로 index의 html 코드들을 전송
    //파일입출력 : 파일을 한꺼번에 처리함
    fs.createReadStream(path.join(__dirname, 'html', '/html/404.html')).pipe(res);
  };
});
server.listen(3333);