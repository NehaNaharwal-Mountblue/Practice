const array = require('./Practice_Problems');

const result = array.filter(jobs => jobs.job.includes("Web Developer"));
console.log(result);