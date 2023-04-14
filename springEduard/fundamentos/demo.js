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


function avg(){
  let result = 0;
  for(let i = 0; i<arguments.length; i++){
    result += arguments[i];
  }

  return arguments.length ? (result / arguments.length) : 0;

}

console.log(avg(10, 20, 30));
console.log(avg(...t));

t.filter(item => item % 2);