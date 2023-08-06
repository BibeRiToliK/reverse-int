module.exports = function reverse (n) {
   let nStr = n.toString();
   let res = ""
   for (i = nStr.length; i !== 0; i--) {
    res += nStr[i-1];
 }
    return parseInt(res)
};
