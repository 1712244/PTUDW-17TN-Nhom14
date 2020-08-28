function now() {
    return new Date()
}

function stringToDate(YYYY_MM_DD) {
    return new Date(YYYY_MM_DD)
}

function DateTimetoDate(date, time) {
    d = date.split("/")
    t = time.split(":")
    return new Date(d[2],d[1],d[0],t[0],t[1],0,0);
}

function DateToDMY(current_datetime) {
    let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
    return formatted_date;
}

function toStringDDMMYYYY(date) {
    var month = parseInt(date.getMonth())+1
    return date.getDate() + '/' + month  + '/' + date.getFullYear();
}

function ToHHMM(time) {
    return time.getHours() + ":" + (time.getMinutes() < 10?'0':'') + time.getMinutes();
}

function dateToNiceString(myDate) {
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    return month[myDate.getMonth()] + " " + myDate.getDate() + " " + myDate.getFullYear() + " " + strTime;
}


module.exports = {
    now,
    stringToDate,
    dateToNiceString,
    DateToDMY,
    ToHHMM,
    toStringDDMMYYYY,
    DateTimetoDate
}