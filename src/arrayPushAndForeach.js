function arrayPushAndIncrement(n) {
    var array = [];
    var result = 0;
    for (var i = 1; i < n; i ++) {
        if (i % 3 == 0 || i % 5 == 0) {
            array.push(i);
        }
    }
    array.forEach(function (num) {
       result += num;
    });
    return result;
}
module.exports = arrayPushAndIncrement; // this is necessary for testing