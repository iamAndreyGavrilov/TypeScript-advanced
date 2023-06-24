// Type Guard - это функция, которая проверяет, является ли объект экземпляром определенного класса или интерфейса.

interface User {
    name: string;
    email: string;
    login: string;
}

const user: User = {
    name: 'John',
    email: 'asd@asdsa.com',
    login: 'john123'
}

interface Admin {
    name: string;
    role: number;
}

function logId(id: string | number) {
    if (isString(id)) {
        console.log(id)
    } else {
        console.log(id)
    }
    console.log(id)
}

// Функция Type Guard
function isString(id: string | number): id is string {
    return typeof id === 'string'
}

// Функция Type Guard
// user is Admin - user является Admin
function isAdmin(user: User | Admin): user is Admin {
    return 'role' in user
}

function setRole(user: User | Admin) {
    if (isAdmin(user)) {
        user.role = 1
    } else {
        throw new Error('User is not admin')
    }
}