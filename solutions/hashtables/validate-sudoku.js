let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function validateRows(sudoku) {
    let set;
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        set = new Set();
        for (let colIndex = 0; colIndex < 9; colIndex++) {
            let currElement = sudoku[rowIndex][colIndex];
            if (currElement != '.' && set.has(currElement)) {
                return false;
            }

            set.add(currElement);
        }
    }
    return true;
}

function validateColumns(sudoku) {
    let set;
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        set = new Set();
        for (let colIndex = 0; colIndex < 9; colIndex++) {
            let currElement = sudoku[colIndex][rowIndex];
            if (currElement != '.' && set.has(currElement)) {
                return false;
            }

            set.add(currElement);
        }
    }
    return true;
}

function validateBlocks(sudoku, startRow, startCol) {
    if (startRow == 9 || startCol == 9) {
        return true;
    }
    let set = new Set();
    for (let rowIndex = startRow; rowIndex < startRow + 3; rowIndex++) {
        for (let colIndex = startCol; colIndex < startCol + 3; colIndex++) {
            let currElement = sudoku[colIndex][rowIndex];
            if (currElement != '.' && set.has(currElement)) {
                return false;
            }

            set.add(currElement);
        }
    }

    return validateBlocks(sudoku, startRow + 3, startCol) && validateBlocks(sudoku, startRow, startCol + 3);
}

function validateSudoku(sudoku) {
    let rowsValid = validateRows(sudoku);
    if (!rowsValid) {
        return "False";
    }

    let columnsValid = validateColumns(sudoku);
    if (!columnsValid) {
        return "False";
    }

    let blocksValid = validateBlocks(sudoku, 0, 0);
    if (!blocksValid) {
        return "False";
    }

    return "True";
}

let sudoku = [];
for (let index = 0; index < 9; index++) {
    let row = readLine().split(" ");
    sudoku.push(row);
}

console.log(validateSudoku(sudoku));