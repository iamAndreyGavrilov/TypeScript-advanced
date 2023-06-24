// // Union - это тип, который может быть одним из нескольких значений
// function logId(id: number | string) {
//   console.log(id)
//     if (typeof id === 'string') {
//         console.log(id.toUpperCase())
//     } else {
//         console.log(id)
//     }
// }
// logId(123)
// logId('123')
// // logId(true) // error
//
// function logError(err: string | string[]){
//     if (Array.isArray(err)) {
//         console.log(err.join(','))
//     } else {
//         console.log(err)
//     }
// }
//
// function logObj(obj: {a: number} | {b: number}) {
//     if ('a' in obj) {
//         console.log(obj.a)
//     } else {
//         console.log(obj.b)
//     }
//
// }
