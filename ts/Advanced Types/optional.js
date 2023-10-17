"use strict";
// // Optional - это тип, который позволяет указать, что значения могут быть или не быть
//
// interface User {
//     login: string;
//     password?: string; // Optional
// }
//
// const user: User = {
//     login: 'admin@mail.com'
// }
//
// function multiply(a: number, b?: number): number {
//     if (b) {
//         return a * b
//     } else {
//         return a * a
//     }
// }
//
// interface UserPro {
//     login: string;
//     password?: {
//         type: 'password' | 'token';
//     }
// }
//
// function testPass(user:UserPro) {
//     const t = user.password?.type
// }
