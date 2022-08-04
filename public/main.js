//Board

// class Board {
//     constructor(size) {
//         // Generate HTML divs
//     }
// }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// # Check unique numbers in row
// Create a array [1...size]
// Randomly pick a number from the array, then remove it from the array
// We can create a row with this, uniquely

//# Check unique numbers in rootsize * rootsize box
// let root = Math.sqrt(size)
// Create a array, fill it will elements,
// for(let i = 0; i < root; i++) {
//    for(let j=0; i< root; j++)
// push to array
//}
// Now we know which element prior to this are filled in box.
// fill the rest of the

//Sudoku
class Sudoku {
    constructor(size) {
        this.size = size; // Should be a perfect square
        // this.board = new Board(size);
        this.board = [[]];
        this.generate();
        this.print();
    }

    generate() {
        const size = this.size;
        for (let i = 0; i <= size; i++) {
            for (let j = 0; j <= size; j++) {
                //TODO: Make the 2 checks then set the value
                this.board[i][j] = getRandomInt(1, size);
            }
        }
    }
}
