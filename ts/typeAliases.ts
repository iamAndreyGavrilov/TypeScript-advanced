// Type Aliases - это просто псевдонимы для типов, которые вы определяете.
type httpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

function makeRequest(url: string, method: httpMethod) {
    // ...
}

makeRequest('http://example.com', 'GET'); // OK

type User = {
    name: string;
    age: number;
    skills: string[];
}

type Role = {
    name: string;
    role: string;
}
// Объединение типов
type UserWithRole = {
    user: User;
    role: Role;
}

let user : UserWithRole = {
    user: {
        name: 'John',
        age: 30,
        skills: ['JS', 'TS']
    },
    role: {
        name: 'John',
        role: 'Admin'
    }
}