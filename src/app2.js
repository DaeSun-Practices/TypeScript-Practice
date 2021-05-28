var someValue = 5; //any type
someValue = 'hello';
someValue = true;
var price = 5; // union type
price = 'free';
//                                       ?로 선택적 매개변수로 만들 수 있다.
function sendGreeting(message, userName, familyName) {
    if (familyName === void 0) { familyName = "There"; }
    console.log(message + ", " + userName + ", " + familyName);
}
sendGreeting("Hello");
// arrow function
var sendGreeting2 = function (message, userName, familyName) {
    if (familyName === void 0) { familyName = "There"; }
    console.log(message + ", " + userName + ", " + familyName);
};
sendGreeting2("Hello");
