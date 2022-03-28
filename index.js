"use strict";

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











