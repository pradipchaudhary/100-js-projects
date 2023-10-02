// const years = function () {
// let startYear = new Date().getFullYear();
// console.log(startYear);
//     const currentYear = new Date().getFullYear();
//     const years = [];
//     startYear = startYear || 1980;
//     while (startYear <= currentYear) {
//         years.push(startYear++);
//     }
//     return years;
// };

// console.log(years());

const years = function () {
    const currentYear = new Date().getFullYear();
    let years = [];
    let startYear = 1980;
    for (let i = startYear; i <= currentYear; i++) {
        years.push(i);
    }

    return years;
};
