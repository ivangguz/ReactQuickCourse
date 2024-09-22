//String number boolean
let userID: string | number = 'abc1';
userID = 123;

// Declaring object and whats inside it
let user : User;

type User = {
    name: string;
    age:  number;
    isAdmin: boolean;
    id: string; //123
}

user = {
    name: "max",
    age:  34,
    isAdmin: true,
    id: 'abc' //123
}

//Working with arrays LESSON
// let hobbies: Array<string>;
let hobbies: string[];  //number[], boolean[]
//{name: string, age: number}[]

hobbies = ['sports', 'cooking', 'reading'];

//ADDING TYPES TO FUNCTIONS LESSON
function add(a: number, b: number) {
    const result = a +b;
    return result;
}

type AddFn = (a: number, b: number) => number;

function calculate(
    a: number,
    b: number,
    calcFn: AddFn
){
    calcFn(a, b);
}


calculate(2, 5, add);

// Interface its essentially to define objects
interface Credentials {
    password: string;
    email: string;
}
// You can easily add this like this below
// interface Credentials {
//     mode: string;
// }

let creds: Credentials;

creds = {
    password: 'abc',
    email: "caeaw@gmail.com"
}

class AuthCredentials implements Credentials{
    email: string;
    password: string;
    userName: string;
}

function login(credentials: Credentials){

}

login(creds)
// or
login(new AuthCredentials())

// type Admin = {
//     permissions: string[]
// }
// type AppUser = {
//     userName: string;
// }

// type AppAdmin = Admin & AppUser;

interface Admin  {
    permissions: string[]
}
interface AppUser{
    userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
    permissions:['login'],
    userName: 'Max'
}

type Role = 'admin' | 'user' | 'editors';

let role: Role;// 'admin', 'user', 'editor'

role = 'admin';
role = 'user';
role = 'editors';
// role = 'abc';

function performAction(action: string | number, role: Role){
    if(role === 'admin' && typeof action === 'string'){
        //..
    }
}

// Typescript narrowing
function combine(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        // So in this case the if statement is accesed only if they bot are numbers, so typescript says
        // oh, they are numbers, so it will return ONLY a number, nevertheless it is only
        // treaded as a number inside the if statement not out of it
        return a + b;
    }
   
    return `${a} ${b}`;
}

let roles: Array<Role>;
roles = ['admin', 'editors'];

type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    },
}

const userStorage: DataStorage<User> = {
    storage: [],
    add(user){

    }
}

function merge<T, U>(a: T, b: U){
    return{
        ...a,
        ...b,
    };
}

  
const newUser = merge<{name: string}, {age: number}>(
    {name: 'Max'}, {age: 32}
);

