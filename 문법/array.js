const arr = ["apple", "banana", "cherry", "apple"];

// data : 데티터, index : 데이터에 해당하는 idx()
arr.forEach(function (data, index) {
  //console.log(`${index} : ${data}`);
});

//return 값이 true에 해당하는 idx반환, 없으면 -1 반환
const cherryIndex = arr.findIndex((data) => data === "cherry");

console.log(cherryIndex);

arr.push("grape");

//배열 끝부분 데이터 꺼냄
const x = arr.pop();
