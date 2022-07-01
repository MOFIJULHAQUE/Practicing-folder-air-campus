// Write a code to take time in seconds and convert it into hour, mins and seconds
function time(seconds) {
    let hh = Math.floor(seconds / 3600);
    let mm = Math.floor(seconds / 60) - hh * 60;
    let sec = (seconds % 60);

    // return 
    return ("In " + seconds + " seconds " + hh + " hour " + mm + " minutes " + sec + " seconds are possible");
}
console.log(time(5000));
exports.time = time

