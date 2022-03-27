
"use strict";

let countSheep = function (num) {
    //your code here
    let str = "sheep...";
    let number = num;
    let answer = "";
    if (number > 0) {
        for (let i = 0; i != number; i++) {
            answer += (i + 1) + " " + str;
        }
        return answer;
    } else {
        return "";
    }
};

console.log(countSheep(0));










