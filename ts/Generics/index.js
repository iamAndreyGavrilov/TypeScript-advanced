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
// TODO: Generic в функциях
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
const split = getSplitedArr; // указываем тип данных, который мы передаем в функцию
const logLine = {
    timeStamp: new Date(),
    data: {
        a: 1,
    }
};
// =====================================================================================================================
//TODO: Ограничение generic c помощью extends
class Vehicle {
    constructor(run) {
        this.run = run;
    }
}
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
class LCV extends Vehicle {
    constructor(run, capacity) {
        super(run);
        this.capacity = capacity;
    }
}
const vehicle = kmToMiles(new Vehicle(100));
const lcv = kmToMiles(new LCV(100, 1000));
// const test = kmToMiles({ bug: 1000 }) // error - так как не наследуется от Vehicle
// =====================================================================================================================
// TODO: Generic в классах
class Resp {
    constructor(data, error) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}
const resp = new Resp('data', 500);
const resp2 = new Resp('data');
class HTTPResp extends Resp {
    constructor(status, data, error) {
        super(data, error);
        this.status = status;
    }
}
const httpResp = new HTTPResp(200, 'data', 500);
