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
var student1 = {
    'studentID': 2018320161,
    'studentName': "SongDaeSun",
    'gender': true,
    'age': 22,
    'subject': "Computer",
    'courseCompleted': true
};
function getStudentDetails(studentID) {
    return {
        'studentID': studentID,
        'studentName': studentName,
        'gender': gender,
        'subject': subject,
        'courseCompleted': courseCompleted
    };
}
function saveStudentDetails(student) {
}
saveStudentDetails(student1);
