// Interfaces - это способ описать структуру объекта. Они определяются с помощью ключевого слова interface.

interface User {
    id: number;
    name: string;
    age?: number; // необязательное свойство
    skills: string[];

    logInfo: (id: number) => string; // метод
}

type User2 = {
    id: number;
    name: string;
    age?: number; // необязательное свойство
    skills: string[];

    logInfo: (id: number) => string; // метод
}

interface Role {
    role: string;
}

interface UserWithRole extends User, Role {
    // можно добавить свои свойства
   createdAt: Date;
}

let user: UserWithRole = {
    id: 1,
    name: 'John',
    age: 25,
    skills: ['HTML', 'CSS'],
    role: 'admin',
    createdAt: new Date(),

    logInfo(id: number): string {
        return `User with id ${id} has a name ${this.name}`;
    }
}