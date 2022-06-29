'use strict';
function century(year) {
    let result = 0;
    for (let i = 0; i < year; i++) {
        if (i % 100 === 0) {
            result++;
        }
    }
    return result;
}

console.log(century(1988));

/* Math.ceil would not have been precise enough when new decade number (e.g 2000 --> 20century instead of 21):
function century(year) {
  return Math.ceil(year / 100);
}
century(1);     // 1
century(88);    // 1
century(1988);  // 20
century(2000);  // 20
century(2001);  // 21

*/
