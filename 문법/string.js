const str = "Hello world";

console.log(str.length); //11(띄어쓰기 포함)

console.log(str.slice(1,5));// 'ello' 
console.log(str.slice(1)); // 'ello world'
console.log(str.slice(-2)); //'ld'

//문자열 대체 (본체 변화X)
console.log(str.replace('world', 'everyone')); // 'hello everyone'


//대소문자 변환(본체 변화 x)
console.log(str.toUpperCase()) // 'HELLO WORLD'
console.log(str.toLowerCase()); // 'hello world'

//문자열 포함여부
console.log(str.includes('world')); //true
console.log(str.includes('hello')); //flase