
const a = [2, 6];
const b = [24, 36];
const c = [12, 18];
const d = [4, 18];

function getTotalX(a, b) {
    let count = 0;
    for (i=1; i<=100; i++) {
      if (a.every(elem => i % elem === 0)) {
        if (b.every(elem => elem % i === 0)) {
          count++;
        }
      };
    };
    return count;
  };