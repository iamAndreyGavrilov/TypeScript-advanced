"use strict";
// Код к упражнению:
//
// Необходимо написать функцию сортировки любых
//
// объектов, которые имеют id по убыванию и по возрастанию
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
function sort(data, type) {
    if (type === 'asc') {
        return data.sort((a, b) => a.id - b.id);
    }
    else {
        return data.sort((a, b) => b.id - a.id);
    }
}
const sortAsc = sort(data, 'asc');
const sortDesc = sort(data, 'desc');
