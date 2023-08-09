const express = require('express');

const opp = express();

opp.get("/set", (req, res) => {
  res.setHeader("Set-Cookie", "name=CM");
  res.setHeader("Set-Cookie", "age=19");
  res.send("쿠키 set");
});

//쿠키 읽기
opp.get("/get", (req, res)=>{
  const cookie = req.headers.cookie;
  if(cookie){
    res.send(cookie);
  }else{
    res.send("쿠키 없음!!!");
  }
});

opp.listen(3000);