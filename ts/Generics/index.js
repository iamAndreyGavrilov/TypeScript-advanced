"use strict";
// const num: Array<number> = [1,2,3];
//
// async function test() {
//     const a = await new Promise<number>((resolve, reject) => {
//         resolve(1);
//     })
// }
//
// const check: Record<string, boolean> = {
//     a: true,
//     b: false
// }
// =====================================================================================================================
function logMiddleWare(data) {
    console.log(data);
    return data;
} // T - тип данных, который мы передаем в функцию
const logNumber = logMiddleWare(6); // указываем тип данных, который мы передаем в функцию
const logString = logMiddleWare('6'); // указываем тип данных, который мы передаем в функцию
function getSplitedArr(data) {
    const res = data.length / 2;
    return data.splice(0, res);
}
const spliteArr = getSplitedArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [1,2,3,4,5]
const spliteArr2 = getSplitedArr(['1', '2', '3', '4', '5']); // ['1','2','3']
// =====================================================================================================================
