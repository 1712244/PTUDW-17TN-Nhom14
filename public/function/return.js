const view = document.getElementById("return-view");


var sections = [];
var sections_date = [];
var sections_pos = [];

pos_valid = false;

function initPos() {
    if (pos_valid) {
        return;
    }

    sections_pos = [];
    sections.forEach(function (e) {
        sections_pos.push(e.offsetTop - view.offsetTop);
    });
    pos_valid = true;
}

function initData() {
    'use strict';
    const section = document.querySelectorAll("#return-view > .time-title");
    var i = 0;

    sections = [];
    sections_date = [];

    var currentDay = null;
    var firstTime = false;
    section.forEach(function (e, i) {
        sections.push(e);
        sections_date.push(new Date(Date.parse(e.getAttribute("data-due-time"))));
    });
    initPos();
};

window.addEventListener("resize", function() {
    pos_valid = false;
});

function nearestDate(d) {
    var nearest = sections_date.length - 1;
    for (i in sections_date) {
        if (sections_date[i] >= d) {
            nearest = i;
            break;
        }
    }
    return nearest;
}

picker = new flatpickr("#date-input")

function gotoDate(d) {
    const nearest = nearestDate(d);
    sections[nearest].scrollIntoView(true);
    const date = sections_date[nearest];
    picker.setDate(date, false);
}

view.onscroll = function () {
    initPos();
    const scrollPosition = view.scrollTop + 50;
    var last = 0;
    for (i in sections) {
        if (sections_pos[i] <= scrollPosition) {
            last = i;
        } else {
            break;
        }
    }
    const date = sections_date[last];
    picker.setDate(date,  false);
};

function sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
}

picker.config.onChange.push(function(e) {
    const selected = picker.selectedDates[0];
    gotoDate(selected);
});


document.getElementById("btn-now").onclick = function(e) {
    gotoDate(new Date(new Date().getTime() - 30*60*1000));
}

initData();
gotoDate(new Date());
