function logName (name : string){
    console.log(name);
}

logName("Hello World!");


let studentID:number = 12345;
let studentName:string = 'Junny Kim';
let age:number = 21;
let gender:boolean = true;
let subject:string = "TypeScript";
let courseCompleted:boolean = true;

                                           
function getStudentDetails(studentID: number)
//return 되는 값의 type
:{
    studentID:number;
    studentName:string;
    age:number;
    gender:boolean;
    subject:string;
    courseCompleted:boolean;
}

{
    return {
        'studentID':studentID,
        'studentName':studentName,
        'age':age,
        'gender':gender,
        'subject':subject,
        'courseCompleted':courseCompleted
    };
}