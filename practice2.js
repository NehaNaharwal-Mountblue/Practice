const array = require('./Practice_Problems');

array.forEach((element)=> {
    element["salary"] = Number(element["salary"].replace("$", " "));
});

console.log(array); 