"use strict";
// let arr:number[] = [1,2,3,4,5];
// console.log(arr);
//let user:[number,string,boolean] = [1,"John",true];tuple
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
//this means Small is 0, Medium is 1 and Large is 2
console.log(Size.Small);
//# sourceMappingURL=index.js.map