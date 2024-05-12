/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

  let p = 0; // first
  let q = 0; // second
  let sum = 1;
  for(let i = 0; i < n.length; i++) {
    p = q;
    q = sum;
    sum = p+q;
  }
  return sum;
};





function fb(n){

  let n1 = 0;
  let n2 = 1;
  let sum  = n1 + n2
  for(let i = 0; i < n.length; i++) {
    sum = n1 + n2
    n1 = n2
    n2 = sum;
  }
  return sum

}


