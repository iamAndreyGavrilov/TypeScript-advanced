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

function logMiddleWare<T>(data: T): T {
    console.log(data)
    return data
} // T - тип данных, который мы передаем в функцию

const logNumber: number = logMiddleWare<number>(6) // указываем тип данных, который мы передаем в функцию
const logString: string = logMiddleWare<string>('6') // указываем тип данных, который мы передаем в функцию

function getSplitedArr<T>(data: Array<T>):Array<T> {
    const res = data.length / 2
    return data.splice(0, res)
}

const spliteArr = getSplitedArr([1,2,3,4,5,6,7,8,9,10]) // [1,2,3,4,5]
const spliteArr2 = getSplitedArr(['1','2','3','4','5']) // ['1','2','3']

const split: <T>(data: Array<T>) => Array<T> = getSplitedArr // указываем тип данных, который мы передаем в функцию
// =====================================================================================================================

// TODO: Generic в типах


interface ILogLine<T> {
    timeStamp: Date,
    data: T
}

type LogLineType<T> = {
    timeStamp: Date,
    data: T
}

const logLine: LogLineType<{ a:number }> = {
    timeStamp: new Date(),
    data: {
        a: 1,
    }
}