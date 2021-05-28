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

let student1:Student = {
    'studentID':2018320161,
    'studentName':"SongDaeSun",
    'gender':true,
    'age':22,
    'subject':"Computer",
    'courseCompleted':true
}

// interface는 대문자로 시작하자.
interface Student {
    studentID:number;
    studentName:string;
    age?:number; //?가 붙으면 있어도 되고 없어도 상관 없어지는 선택적 property가 된다.
    gender:boolean;
    subject:string;
    courseCompleted:boolean;

    readonly addComment?: (comment: string) => string;
}

                                           
function getStudentDetails(studentID: number)
//return 되는 값의 type을 더욱 명확히 개시
/*
:{
    studentID:number;
    studentName:string;
    age:number;
    gender:boolean;
    subject:string;
    courseCompleted:boolean;
}*/
:Student // interface를 return 하도록 만들 수 있다. 보기가 더 깔끔하다.

{
    return {
        'studentID':studentID,
        'studentName':studentName,
        'gender':gender,
        'subject':subject,
        'courseCompleted':courseCompleted
    };
}

function saveStudentDetails(student: Student):void{

}

saveStudentDetails(student1);