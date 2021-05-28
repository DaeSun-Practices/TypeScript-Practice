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


enum SubjectEnum{
    Computer,
    Physics,
    Chemistry,
    Biology,
    Linguistics,
    Sociology,
    Philosophy,
    Economics
}

// interface는 대문자로 시작하자.
interface Student {
    studentID:number;
    studentName: 'Kim' | 'Lee' | 'Song', //리터럴 타입
    age?:number; //?가 붙으면 있어도 되고 없어도 상관 없어지는 선택적 property가 된다.
    gender:boolean;
    subject:SubjectEnum;  //Enum
    courseCompleted:boolean;

    readonly addComment?: (comment: string) => string;
}

let student1:Student = {
    'studentID':2018320161,
    'studentName': "Kim", //리터럴 타입으로 변환
    'gender':true,
    'age':22,
    'subject':SubjectEnum.Computer,
    'courseCompleted':true
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
        'studentName':'Song',
        'gender':gender,
        'subject':SubjectEnum.Computer,
        'courseCompleted':courseCompleted
    };
}

function saveStudentDetails(student: Student):void{

}

saveStudentDetails(student1);