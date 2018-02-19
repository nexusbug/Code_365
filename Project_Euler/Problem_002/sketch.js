let prev = 0;
let next = 1;
let holder = 0;

let total = 0;

for (let i = 0; i < 500; i++) {
  holder = prev;
  prev = next;
  next += holder;

  if (next >= 4000000) {
    console.log(prev);
    console.log(total);
    break;
  }

  if (next % 2 == 0) {
    total += next;
  }
}


/*
Website
http://nexusbug.com/

github Repo
https://github.com/nexusbug/

About
https://projecteuler.net/

Problem 2
*/
