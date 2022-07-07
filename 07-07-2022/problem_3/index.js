// A teacher is about to take the attendance of the class, you being the monitor someone informs you that one student is missing. Check if the student is present in the class or not.
function attendance(studentsInClass, student) {

    if (studentsInClass.includes(student)) {
        return "Present";
    } else {
        return "Not Present";
    }
}
console.log(attendance([2, 5, 10, 7, 5], 7));
exports.attendance = attendance