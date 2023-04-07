// https://www.scaler.com/academy/mentee-dashboard/class/59875/homework/problems/158/?navref=cl_pb_nv_tb

function isValidSudoku(a) {
  let map = new Map();
  let size = a.length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < 9; j++) {
      let cellNumber = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      let ch = a[i].charAt(j);

      if (ch !== ".") {
        if (
          map.get(`row${i}${ch}`) ||
          map.get(`col${j}${ch}`) ||
          map.get(`cell${cellNumber}${ch}`)
        ) {
          return 0;
        } else {
          map.set(`row${i}${ch}`, 1);
          map.set(`col${j}${ch}`, 1);
          map.set(`cell${cellNumber}${ch}`, 1);
        }
      }
    }
  }

  return 1;
}

console.log(
  isValidSudoku([
    "53..7....",
    "6..195...",
    ".98....6.",
    "8...6...3",
    "4..8.3..1",
    "7...2...6",
    ".6....28.",
    "...419..5",
    "....8..79",
  ])
);
