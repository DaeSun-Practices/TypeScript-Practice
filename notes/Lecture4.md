# 4강 - interface
// interface는 대문자로 시작하자.
interface Student {
    studentID:number;
    studentName:string;
    age?:number; //?가 붙으면 있어도 되고 없어도 상관 없어지는 선택적 property가 된다.
    gender:boolean;
    subject:string;
    courseCompleted:boolean;
}
## method의 interface
addComment (comment: string): string;
addComment: (comment: string) => string;
사실 둘 다 하는 일은 똑같다. 표현만 다른 것이다.

## ReadOnly Property
readonly addComment?: (comment: string) => string;
readonly를 쓰면 수정이 불가능하다.

## TIP!
TS를 사용할꺼면 더 많은 type에 대한 정보를 최대한으로 제공하는 방향을 생각해보라.