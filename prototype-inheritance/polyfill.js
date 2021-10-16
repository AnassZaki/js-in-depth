String.prototype.includes =
  String.prototype.includes ||
  function (searchStr, position) {
    "use strict";
    if (typeof position !== "number") {
      start = 0;
    }

    if (position + searchStr.length > this.length) {
      return false;
    } else {
      return this.indexOf(searchStr, position) !== -1;
    }
  };
