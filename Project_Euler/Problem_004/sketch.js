let finito = false;

for (let i = 999998; i >= 100000 && !finito; i--) {
  if (i.toString().substring(0, 3).split("").reverse().join("") == i.toString().substring(3, 6)) {
    for (let j = 999; j >= 100; j--) {
      if (i % j === 0) {
        if ((i / j).toString().length === 3 && j.toString().length === 3) {
          console.log(i);
          console.log(i / j + " and " + j);
          finito = true;
          break;
        }
      }
    }
  }
}


/*
Website
http://nexusbug.com/

github Repo
https://github.com/nexusbug/

About
https://projecteuler.net/

Problem 4
*/
