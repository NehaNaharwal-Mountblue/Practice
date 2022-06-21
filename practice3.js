const array = require('./Practice_Problems');

array.forEach((element) => {
    element["salary"] =  Number(element["salary"].replace("$", " ")*1000);
}, []);

console.log(array);