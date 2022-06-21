const array = require('./Practice_Problems');
let sum = 0;
array.forEach((element) => {
    element["salary"] = Number(element["salary"].replace("$", " "));
    sum = sum + element["salary"];
}, []);

console.log(sum);