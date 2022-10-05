let kotoday = new Date().toLocaleDateString(`ko-KR`, {
    timeZone: `Asia/Seoul`

})

let today = new Date();
 
console.log(today);

console.log(today.getFullYear());
console.log(today.getMonth()+ 1);
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinuites());
console.log(today.getSeocond());


