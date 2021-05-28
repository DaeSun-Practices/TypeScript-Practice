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