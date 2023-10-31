/// <reference path="./index.ts" /> - чтоб заработал надо в конфиге указать "module": "amd"
// console.log(A.a)
import { c } from './index'; //"module": "ES6", в конце надо указать расширение файла js, иначе при сборке будет ошибка
console.log(c);
