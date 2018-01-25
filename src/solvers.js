/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  let board = new Board({n: n});
  var solution = undefined;
  for(var x = 0; x < board.rows().length; x++) {
    for(var y = 0; y < board.rows()[x].length; y++) {
      board.togglePiece(x, y);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(x,y);
      }
    }
  }
  solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  let numOfSolutions = [1, 1, 2, 6, 24, 120, 720, 5040, 40320];
  let board = new Board({n: n});
  (function traverseTheBoard(rowStart, colStart) {
    if (!(numOfSolutions[n] === solutionCount)) {
    for (let row = rowStart; row < board.rows().length; row++) {
      for (let col = colStart; col < board.rows().length; col++) {
        if (board.rows()[row][col] !== 1) {
          board.togglePiece(row, col);
          if (board.hasAnyRooksConflicts()) {
            board.togglePiece(row, col);
          } else {
            traverseTheBoard(row, col);
          }
        }
      }
    }
  }
  }(0,0));
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};
  // for (let firstRow = 0; firstRow < board.rows().length; firstRow++) {
  //   for (let firstCol = 0; firstCol < board.rows().length; firstCol++) {
  //     board.togglePiece(firstRow, firstCol);
  //     numOfPieces++;
  //     if (n === numOfPieces) {
  //       solutionCount++;
  //     }
  //       for (let secondRow = 0; secondRow < board.rows().length; secondRow++) {
  //         for (let secondCol = 0; secondCol < board.rows().length; secondCol++) {
  //           if (!board.rows()[secondRow][secondCol]) {
  //           board.togglePiece(secondRow, secondCol);
  //           numOfPieces++;
  //           if (board.hasAnyRooksConflicts()) {
  //             board.togglePiece(secondRow, secondCol);
  //             numOfPieces--;
  //           } else {
  //             if (n === numOfPieces) {
  //               solutionCount++;
  //             }
  //           }
  //           }
  //         }
  //       }
  //       board = new Board({n: n})
  //     }
  //   }



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  let board = new Board({n: n});
  var solution = undefined;
  for(var x = 0; x < board.rows().length; x++) {
    for(var y = 0; y < board.rows().length; y++) {
      board.togglePiece(x, y);
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(x,y);
      }
    }
  }
  solution = board.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
