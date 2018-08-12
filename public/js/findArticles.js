
function sortPfo(obj) {
    if (obj.Portfolio != "non") {
        return true;
    }
    return false;
}

function isValidDate(d) {
  var date = new Date(d.Date)
  return (date instanceof Date && !isNaN(date));
}

function sortByDate(obj1, obj2) {
    var date1 = new Date(obj1.Date)
    var date2 = new Date(obj2.Date)
    if (date1 == date2) {
        return 0;
    }
    else if (date1 < date2) {
        return 1;
    }
    return -1;
}

class findArticles {
    constructor() {
        this.obj = require("../Publication.json");
        this.obj = this.obj.filter(sortPfo);
        this.obj = this.obj.filter(isValidDate);
        this.obj = this.obj.sort(sortByDate);
    }
    getArticles(id) {
        return(this.obj[id]);
    }
}

var a = new findArticles();
module.exports= a;

