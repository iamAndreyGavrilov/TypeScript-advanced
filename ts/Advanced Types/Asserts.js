"use strict";
// Asserts - это специальный оператор, который позволяет вам указать, что значение является более конкретным типом, чем его текущий тип.
const a = {};
assertUser(a);
a.name = 'Vasya';
// asserts function
function assertUser(obj) {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('Object is not a User');
}
