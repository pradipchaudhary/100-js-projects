const nowDate = new Date();
<<<<<<< HEAD
//
// this.years = function (startYear) {
//     var currentYear = new Date().getFullYear(),
//         years = [];
//     startYear = startYear || 1980;
//     while (startYear <= currentYear) {
//         years.push(startYear++);
//     }
//     return years;
// };

// console.log(this.years(2019 - 20));
=======
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
>>>>>>> cc76e13e95a9fa439e30a5dd9ec1dc7a5f0ffe5b

// console.log(this.years);
