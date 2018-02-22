function p3(value) {
  for (let i = 2; i <= value; i++) {
    if (value % i === 0) {
      console.log(value / i);
    }
  }
}

p3(600851475143);



// dv(600851475143);

// function dv(x) {
//
//   let ln = x.toString().length;
//   let start = 5 * (10 ** (ln / 3));
//   let end = 6 * (10 ** (ln / 3));
//
//   for (let i = 50000; i <= 60000; i++) {
//     if (x % i == 0) {
//       // console.log(i);
//       // console.log(x/i);
//       return x/i;
//     }
//   }
// }
//
//
// primeFactor(dv(600851475143));
//
//
// function primeFactor(x) {
//   if (x > 2) {
//     for (let i = x - 1; i > 2; i--) {
//       if (x % i == 0) {
//         // let division = x / i;
//         console.log(i);
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
