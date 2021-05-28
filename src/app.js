function logName(name) {
    console.log(name);
}
logName("Hello World!");
var studentID = 12345;
var studentName = 'Junny Kim';
var age = 21;
var gender = true;
var subject = "TypeScript";
var courseCompleted = true;
var SubjectEnum;
(function (SubjectEnum) {
    SubjectEnum[SubjectEnum["Computer"] = 0] = "Computer";
    SubjectEnum[SubjectEnum["Physics"] = 1] = "Physics";
    SubjectEnum[SubjectEnum["Chemistry"] = 2] = "Chemistry";
    SubjectEnum[SubjectEnum["Biology"] = 3] = "Biology";
    SubjectEnum[SubjectEnum["Linguistics"] = 4] = "Linguistics";
    SubjectEnum[SubjectEnum["Sociology"] = 5] = "Sociology";
    SubjectEnum[SubjectEnum["Philosophy"] = 6] = "Philosophy";
    SubjectEnum[SubjectEnum["Economics"] = 7] = "Economics";
})(SubjectEnum || (SubjectEnum = {}));
var student1 = {
    'studentID': 2018320161,
    'studentName': "Kim",
    'gender': true,
    'age': 22,
    'subject': SubjectEnum.Computer,
    'courseCompleted': true
};
function getStudentDetails(studentID) {
    return {
        'studentID': studentID,
        'studentName': 'Song',
        'gender': gender,
        'subject': SubjectEnum.Computer,
        'courseCompleted': courseCompleted
    };
}
function saveStudentDetails(student) {
}
saveStudentDetails(student1);
