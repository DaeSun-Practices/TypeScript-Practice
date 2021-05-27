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
function getStudentDetails(studentID) {
    return {
        'studentID': studentID,
        'studentName': studentName,
        'age': age,
        'gender': gender,
        'subject': subject,
        'courseCompleted': courseCompleted
    };
}
