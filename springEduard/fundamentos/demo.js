a = 1;
b = 2;
c = a = b = 3;
'use strict';
console.log(`---> ${a + b}`);

function kk() {
  var a = "7";
  if (true) {
    var x = "bloque";
  }

  d = a + b;
  console.log(`---> ${d}`);
}

kk();
console.log(`---> fuera${d}`);
// if ((a = 1)) {
//   console.log(`Cierto`);
// }
