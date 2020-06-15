var th = require("./time-helper");
var hbs = require("hbs");

hbs.registerHelper("eachBorrow", function (borrow, options) {
  if (borrow.length == 0) {
    return new hbs.handlebars.SafeString("");
  }

  var ret = "";

  var prevTime = new Date(0);
  var curTime = borrow[0].bookedBorrowDate;
  const j = borrow.length;
  var i = 0;
  while (i < j){
    ret += '<div class="title-group" data-time='  + curTime.toISOString() + ">";
    if (!th.sameDay(curTime, prevTime)) {
      ret += '<div class="time-title">' + th.toDayString(curTime) + '</div>';
    }
    ret += '<div class="time-title second-title">' + th.toTimeString(curTime) + '</div></div>';
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

  borrow.sort((a, b) => a.returnDueDate - b.returnDueDate);

  var ret = "";

  var prevTime = "";
  var curTime = borrow[0].returnDueDate;
  const j = borrow.length;
  var i = 0;
  while (i < j) {
    ret += '<div class="time-title data-due-time="'+ curTime.toISOString() +'">' + th.toDueTimeString(curTime) + '</div>';
    ret += '<div class="borrow-list">';
    prevTime = curTime;

    do {
      ret += options.fn(borrow[i]);
      ++i;
      if (i >= j)
        break;
      curTime = borrow[i].returnDueDate;
    } while (th.sameDay(curTime, prevTime))
    
    ret += '</div>';
  }

  return new hbs.handlebars.SafeString(ret);
});


hbs.registerHelper("datetimeToString", function(object, options) {
  if (!object) {
    return new  hbs.handlebars.SafeString("N/A");
  } else {
    return new hbs.handlebars.SafeString(object.toLocaleString());
  }
});


hbs.registerHelper("dateToString", function(object, options) {
  if (!object) {
    return new  hbs.handlebars.SafeString("N/A");
  } else {
    return new hbs.handlebars.SafeString(object.toLocaleDateString());
  }
});


// Helper zone

// Handy checking if equal handlebars helper
// Usage:
//       {{#if_eq a b}}
//          ....
//       {{else (optional)}}
//          ....
//       {{/if_eq}} 
hbs.registerHelper('if_eq', function(a, b, opts) {
  if (a == b) 
      return opts.fn(this);
  else
      return opts.inverse(this);
});
