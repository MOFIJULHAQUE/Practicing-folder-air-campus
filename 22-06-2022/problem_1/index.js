// am to PM ( 24 hr to 12hr)
function amPm(hr, min) {
    if (hr == 0) {
        if (min < 10) min = '0' + min
        hr = hr < 10 ? '0' + hr : hr;
        return ('12:' + min + ' AM');
    } else if (hr >= 12) {
        hr = hr - 12;
        min = min < 10 ? '0' + min : min;
        hr = hr < 10 ? '0' + hr : hr;
        if (hr == 0) {
            return ('12:' + min + ' PM');
        } else {
            return (hr + ':' + min + ' PM');
        }
    } else {
        min = min < 10 ? '0' + min : min;
        hr = hr < 10 ? '0' + hr : hr;
        return (hr + ':' + min + ' AM');
    }
}
console.log(amPm(24, 10));
exports.amPm = amPm


