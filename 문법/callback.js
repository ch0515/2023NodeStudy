function somefunc(callback){
  console.log("somefunc 실행");

  //somefunc의 기능을 수행하고 난 후에
  //callback()가 실행된다.  자바스크립트에서 순서가 잇어야 하는데 그거때문에 쓴대 비동기 왜 쓰는지
  callback();
}

somefunc(function(){
  console.log("콜백함수 실행");
});