"use strict";
/*
{
let countSheep = function (num) {
  
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


let zero = function (num) {
    let arrSheep = '';
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            arrSheep += `${i} sheep...`;
        }
    } return arrSheep;
};

    const one = length =>
        Array.from({ length }, (_, i) => ++i + ' sheep...').join('');


    const two = length =>
        Array.from([length], (_, i) => ++i + ' sheep...').join('');


    const three = length =>
        Array.from(length, (_, i) => ++i + ' sheep...').join('');


    const four = num => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');

}
*/

function longestZero(s1, s2) {

    let str = s1 + s2;
    let answer = [];
    let newStr = str.split("").sort();
    for (let i = 0; i < newStr.length; i++){
        if (newStr[i] === newStr[i + 1]) {
            newStr.shift();
            i--;
        } else {
            answer.push(newStr[i]);
        }
    }
    return answer.join("");
}


function longestOne(s1, s2) {
    return (s1 + s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}


const longestTwo = (s1, s2) => Array.from(s1 + s2)
    .sort()
    .filter((x, i, a) => x !== a[i - 1])
    .join('');



function longestFour(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}


const longestFive = (s1, s2) => [...new Set(s1 + s2)].sort().join('');