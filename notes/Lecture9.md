# 9강
## constructor

## Access Modifier
클래스 외부로부터의 접근을 통제
- public : 외부접근 허용
- private : 외부접근 차단
- protected : 상속받은 자식 클래스에서 접근 가능

기본적으로 public이다.

## Get/Set

## constructor & access modifier
```
constructor(
    private _fullName:string,
    private _age:number,
    private _jobTitle:string,
    private _hourly:string,
    public workingHoursPerWeek: number
){}
```