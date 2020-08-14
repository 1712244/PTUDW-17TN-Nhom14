
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
}

module.exports.sameDay = function(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}

module.exports.toDayString = function(d) {
    return d.toLocaleDateString("vi", { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' });
};

module.exports.toTimeString = function(d) {
    return d.toTimeString().substr(0, 5);
}

module.exports.toDueTimeString = function(date) {
    const msInDay = (1000 * 3600 * 24);

    const today = new Date((new Date()).toDateString());
    const dueDay = new Date(date.toDateString());

    var timeDiff = Math.round((dueDay - today) / msInDay);
    if (timeDiff < 0) {
        return "Trễ " + (-timeDiff) + " ngày";
    } else if (timeDiff == 0) {
        return "Hôm nay";
    } else {
        return "Còn " + (timeDiff) + " ngày";
    }
}
