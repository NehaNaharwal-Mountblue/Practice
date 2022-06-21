const array = require('./Practice_Problems');

let average_country_sum = array.reduce((acc, eachElement) => {
    let salary_sum = parseFloat(eachElement["salary"].slice(1))
    if(acc.hasOwnProperty(eachElement["location"])){
        acc[eachElement["location"]] = (acc[eachElement["location"]] + salary_sum) / 2;
    }
    else{
        acc[eachElement["location"]] = salary_sum;
    }
    return acc;
}, []);

console.log(average_country_sum);