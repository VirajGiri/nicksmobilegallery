
var curYear = new Date();

function getYear(data) {
    if(data){
      return  curYear.getFullYear(data);
    }else {
        return curYear.getFullYear();
    }
}
function getYearList() {
    var startYear = 2017;
    var YearList = [];
    for(var year = getYear(); year >= startYear; year -- ) {
        YearList.push(year);
    }
    return YearList;
}