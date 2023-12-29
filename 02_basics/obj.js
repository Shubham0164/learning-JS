// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.greetings = function(){
    console.log("Hello JS User");
}
JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
