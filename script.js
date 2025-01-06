function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
}

function invert(array) {
    return array.map(num => -num);
}

function stringClean(s){
    return s.replace(/\d/g, "");
}

function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}