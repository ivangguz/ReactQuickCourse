var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//String number boolean
var userID = 'abc1';
userID = 123;
// Declaring object and whats inside it
var user;
user = {
    name: "max",
    age: 34,
    isAdmin: true,
    id: 'abc' //123
};
//Working with arrays LESSON
// let hobbies: Array<string>;
var hobbies; //number[], boolean[]
//{name: string, age: number}[]
hobbies = ['sports', 'cooking', 'reading'];
//ADDING TYPES TO FUNCTIONS LESSON
function add(a, b) {
    var result = a + b;
    return result;
}
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(2, 5, add);
// You can easily add this like this below
// interface Credentials {
//     mode: string;
// }
var creds;
creds = {
    password: 'abc',
    email: "caeaw@gmail.com"
};
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) {
}
login(creds);
// or
login(new AuthCredentials());
var admin;
admin = {
    permissions: ['login'],
    userName: 'Max'
};
var role; // 'admin', 'user', 'editor'
role = 'admin';
role = 'user';
role = 'editors';
// role = 'abc';
function performAction(action, role) {
    if (role === 'admin' && typeof action === 'string') {
        //..
    }
}
// Typescript narrowing
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        // So in this case the if statement is accesed only if they bot are numbers, so typescript says
        // oh, they are numbers, so it will return ONLY a number, nevertheless it is only
        // treaded as a number inside the if statement not out of it
        return a + b;
    }
    return "".concat(a, " ").concat(b);
}
var roles;
roles = ['admin', 'editors'];
var textStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    },
};
var userStorage = {
    storage: [],
    add: function (user) {
    }
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var newUser = merge({ name: 'Max' }, { age: 32 });
