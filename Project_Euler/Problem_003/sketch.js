dv(600851475143);
dv(59569);

function dv(x) {

  let ln = x.toString().length;
  let start = 5 * (10 ** (ln / 3));
  let end = 6 * (10 ** (ln / 3));

  for (let i = start; i <= end; i++) {
    if (x % i == 0) {
      console.log(i);
      return i;
    }
  }
}







// primeFactor(102);


// function primeFactor(x) {
//   if (x > 2) {
//     for (let i = x - 1; i > 2; i--) {
//       if (x % i == 0) {
//         // let division = x / i;
//         console.log(i);
//         // primeFactor(i);
//       }
//     }
//   } else if (x == 2) {
//     console.log(2);
//   } else {
//     console.log("impossible");
//   }
// }




/*
Website
http://nexusbug.com/

github Repo
https://github.com/nexusbug/

About
https://projecteuler.net/

Problem 3
*/
