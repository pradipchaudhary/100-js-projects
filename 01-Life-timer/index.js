const nowDate = new Date();
console.log(nowDate);
//
this.years = function (startYear) {
    var currentYear = new Date().getFullYear(),
        years = [];
    startYear = startYear || 1980;
    while (startYear <= currentYear) {
        years.push(startYear++);
    }
    return years;
};

console.log(this.years(2019 - 20));

// console.log(this.years);
