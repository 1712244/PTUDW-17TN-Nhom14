function sameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}

function toDayString(d) {
  return d.toLocaleDateString("vi", { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' });
};

function toTimeString(d) {
  return d.toTimeString().substr(0, 5);
}

function toDueTimeString(date) {
  const msInDay =  (1000 * 3600 * 24);

  const today = new Date((new Date()).toDateString());
  const dueDay = new Date(date.toDateString());

  var timeDiff = Math.round((dueDay-today)/msInDay);  
  if (timeDiff < 0) {
    return "Trễ " + (-timeDiff) + " ngày";
  } else if (timeDiff == 0) {
    return "Hôm nay";
  } else {
    return "Còn " + (timeDiff) + " ngày";
  }
}

var hbs = require("hbs");

hbs.registerHelper("eachBorrow", function (borrow, options) {
  if (borrow.length == 0) {
    return "";
  }

  var ret = "";

  var prevTime = new Date(0);
  var curTime = borrow[0].bookedBorrowDate;
  const j = borrow.length;
  var i = 0;
  while (i < j){
    ret += '<div class="title-group" data-time='  + curTime.toISOString() + ">";
    if (!sameDay(curTime, prevTime)) {
      ret += '<div class="time-title">' + toDayString(curTime) + '</div>';
    }
    ret += '<div class="time-title second-title">' + toTimeString(curTime) + '</div></div>';
    ret += '<div class="borrow-list">';
    prevTime = curTime;

    do {
      ret += options.fn(borrow[i]);
      ++i;
      if (i >= j)
        break;
      curTime = borrow[i].bookedBorrowDate;
    } while (curTime.getTime() == prevTime.getTime())
    
    ret += '</div>';
  }
  return new hbs.handlebars.SafeString(ret);
});

hbs.registerHelper("eachReturn", function (borrow, options) {
  if (borrow.length == 0) {
    return "";
  }

  var ret = "";


  var prevTime = "";
  var curTime = borrow[0].dueDate;
  const j = borrow.length;
  var i = 0;
  while (i < j) {
    ret += '<div class="time-title data-due-time="'+ curTime.toISOString() +'">' + toDueTimeString(curTime) + '</div>';
    ret += '<div class="borrow-list">';
    prevTime = curTime;

    do {
      ret += options.fn(borrow[i]);
      ++i;
      if (i >= j)
        break;
      curTime = borrow[i].dueDate;
    } while (sameDay(curTime, prevTime))
    
    ret += '</div>';
  }

  return new hbs.handlebars.SafeString(ret);
});


hbs.registerHelper("datetimeToString", function(object, options) {
  return new hbs.handlebars.SafeString(object.toLocaleString());
});


hbs.registerHelper("dateToString", function(object, options) {
  return new hbs.handlebars.SafeString(object.toLocaleDateString());
});