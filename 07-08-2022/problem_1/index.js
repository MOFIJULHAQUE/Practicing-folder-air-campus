

//Given a string, remove all the whitespaces from the end and then return the new string

function removeSpace(str) {
    return str.trimEnd();
}
console.log(removeSpace(
    "   airCampus      "));
exports.removeSpace = removeSpace