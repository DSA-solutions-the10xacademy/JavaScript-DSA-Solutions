let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine());

let image = [];
for (let i = 0; i < n; i++) {
  image[i] = parseInt(readLine());
}

let m = parseInt(readLine());

let icon = [];
for (let i = 0; i < m; i++) {
  icon[i] = parseInt(readLine());
}

if (m <= 0 || n <= 0) {
  console.log(0);
} else {
  if (icon.length == 1) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (image[i] == icon[0])
        count++;
    }
    console.log(count);
  } else {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (i + 1 < n && image[i] == icon[0] && image[i + 1] == icon[1])
        count++;
    }
    console.log(count);
  }
}
