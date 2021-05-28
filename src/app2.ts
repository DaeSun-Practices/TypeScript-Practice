let someValue: any = 5; //any type
someValue = 'hello';
someValue = true;

let price: number | string = 5; // union type
price = 'free'

type StrOrNum = number | string; // tyoe aliases



//                                       ?로 선택적 매개변수로 만들 수 있다.
function sendGreeting (message : string, userName?: string, familyName = "There"):void{
    console.log(`${message}, ${userName}, ${familyName}`);
}

sendGreeting("Hello")

// arrow function
const sendGreeting2 = (message : string, userName?: string, familyName = "There"):void => {
    console.log(`${message}, ${userName}, ${familyName}`);
}

sendGreeting2("Hello")



class Employee{
    private _fullName: string; //private로 설정함 -> 변경, 읽기도 안됨
    age: number;
    jobTitle: string;
    hourlyRate: number;
    workingHoursPerWeek: number;

    //constructor에 역시 parameter를 제공할수도 있다.
    constructor(){
        this._fullName = "SongDaeSun"
        this.age = 22
        this.jobTitle = "Engineer"
        this.hourlyRate = 300
        this.workingHoursPerWeek = 80
    }

    //getter
    get fullName () {
        return this._fullName;
    }

    //setter
    set fullName (value: string) {
        this._fullName = value;
    }
    
    printEmployeeDetails = () : void =>{
        console.log(`${this._fullName}의 직업은 ${this.jobTitle}입니다.`)
    }
}

let employee1 = new Employee();
employee1.printEmployeeDetails();

console.log(employee1.fullName);
employee1.fullName = "KimDaeSun";
console.log(employee1.fullName);