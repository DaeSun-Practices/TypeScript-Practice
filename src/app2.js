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
var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        this.fullName = 'SongDaeSun';
        this.age = 22;
        this.jobTitle = 'Engineer';
        this.houlyRate = 300;
        this.workingHoursPerWeek = 80;
        this.printEmployeeDetails = function () {
            console.log(_this.fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + "\uC785\uB2C8\uB2E4.");
        };
    }
    return Employee;
}());
var employee1 = new Employee();
employee1.printEmployeeDetails();
