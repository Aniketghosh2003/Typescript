"use strict";
function calculatetax(income, taxyear) {
    if (income <= 0 && taxyear <= 2010) {
        return 0;
    }
    else {
        return income - 10000;
    }
}
console.log(calculatetax(20000, 2021));
//# sourceMappingURL=function.js.map