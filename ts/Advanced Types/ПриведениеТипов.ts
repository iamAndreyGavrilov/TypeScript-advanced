// // Приведение типов - это преобразование типа переменной к другому типу.
// // Приведение типов в TypeScript осуществляется с помощью оператора <тип> или с помощью ключевого слова as.
//
// interface Employee {
//     name: string;
//     salary: number;
//     location: string;
// }
//
// const employee: Employee = {
//     name: 'John',
//     salary: 1000,
//     location: 'USA'
// }
//
// interface Admin {
//     name: string;
//     role: number;
// }
//
//
// // Приведение одного объекта к другому объекту
// function employeeToAdmin(employee: Employee): Admin {
//     return {
//         name: employee.name,
//         role: 1
//     }
// }