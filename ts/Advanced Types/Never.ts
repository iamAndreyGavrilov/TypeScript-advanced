// // Never - это тип, который никогда не должен происходить.
//
// // Например, функция, которая всегда должна генерировать ошибку или останавливать выполнение.
//
// // Вот пример функции, которая возвращает ничего, но никогда не заканчивает свое выполнение:
//
// function error(message: string): never {
//     throw new Error(message);
// }
//
// type paymentAction = 'refund' | 'pay' | 'payroll';
//
// function performAction(action: paymentAction) {
//     switch (action) {
//         case 'refund':
//             // do something
//             break;
//         case 'pay':
//             // do something
//             break;
//         case 'payroll':
//             // do something
//             break;
//         default:
//             const _: never = action;
//             throw new Error('Invalid action');
//     }
// }
//
// // исчерпывающая проверка
//
// function isString(x: string | number): boolean {
//     if (typeof x === 'string') {
//         return true;
//     } else if (typeof x === 'number') {
//         return false;
//     }
//     error('error');
// }