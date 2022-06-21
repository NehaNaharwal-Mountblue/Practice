const array = require('./Practice_Problems');

let countrySalarySum = array.reduce((acc, eachElement) => {
    let salary_sum = Number(eachElement["salary"].slice(1))
    if(acc.hasOwnProperty(eachElement["location"])){
        acc[eachElement["location"]] += salary_sum;
    }
    else{
        acc[eachElement["location"]] = salary_sum;
    }
    return acc;
});

console.log(countrySalarySum);