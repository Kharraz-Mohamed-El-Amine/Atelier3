const nombres=[1,7,10,8,9];
const maximum = nombres.reduce((acc, current) => current > acc ? current : acc);
console.log("Maximum:", maximum);