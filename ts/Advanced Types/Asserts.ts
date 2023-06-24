// Asserts - это специальный оператор, который позволяет вам указать, что значение является более конкретным типом, чем его текущий тип.

interface User {
    name: string;
}

const a = {}
assertUser(a)
a.name = 'Vasya'

// asserts function
function assertUser(obj: unknown): asserts obj is User{
    if (typeof obj === 'object' && !!obj && 'name' in obj){
        return
    }
    throw new Error('Object is not a User')
}