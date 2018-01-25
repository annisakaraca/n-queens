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
  let numOfPieces = 0;
  let rounds = 0;
  let board = new Board({n: n});

    function traverseTheBoard(rowStart, colStart) {
      let hasChanged =0;
      if (numOfPieces === n) {
        solutionCount++;
        numOfPieces--;
        return
      }
      let rStart = rowStart;
      let cStart = colStart;

      for (let row = rStart; row < board.rows().length; row++ ) {
        if (hasChanged !== 0) {
          cStart = 0;
        }
        for (let col = cStart; col < board.rows().length; col++) {
          board.togglePiece(row,col);
          numOfPieces++;
          if (board.hasAnyRooksConflicts()) {
            board.togglePiece(row, col);
            numOfPieces--;
          } else {
            if (col === board.rows().length - 1) {
              traverseTheBoard(row + 1, 0)
            } else traverseTheBoard(row, col + 1);
            board.togglePiece(row, col)
          }
        }
        hasChanged++;
      }
      numOfPieces--;
    }
    traverseTheBoard(0,0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if (n === 2 || n === 3) {
    return {n: n};
  }
  let solution = 0;
  let numOfPieces = 0;
  let board = new Board({n: n});

  function traverseTheBoard(rowStart, colStart) {
    let hasChanged =0;
    if (numOfPieces === n) {
      solution = board.rows();
      return solution;
    }
    let rStart = rowStart;
    let cStart = colStart;

    for (let row = rStart; row < board.rows().length; row++ ) {
      if (hasChanged !== 0) {
        cStart = 0;
      }
      for (let col = cStart; col < board.rows().length; col++) {
        board.togglePiece(row,col);
        numOfPieces++;
        if (board.hasAnyQueensConflicts()) {
          board.togglePiece(row, col);
          numOfPieces--;
        } else {
          if (col === board.rows().length - 1) {
            traverseTheBoard(row + 1, 0)
          } else traverseTheBoard(row, col + 1);
          if (solution !== 0) {
            return solution;
          }
          board.togglePiece(row, col)
        }
      }
      hasChanged++;
    }
    numOfPieces--;
  }
  traverseTheBoard(0,0);
  console.log('Solution for ' + n + ' Queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  let numOfPieces = 0;
  let rounds = 0;
  let board = new Board({n: n});

  function traverseTheBoard(rowStart, colStart) {
    let hasChanged =0;
    if (numOfPieces === n) {
      solutionCount++;
      numOfPieces--;
      return
    }
    let rStart = rowStart;
    let cStart = colStart;

    for (let row = rStart; row < board.rows().length; row++ ) {
      if (hasChanged !== 0) {
        cStart = 0;
      }
      for (let col = cStart; col < board.rows().length; col++) {
        board.togglePiece(row,col);
        numOfPieces++;
        if (board.hasAnyQueensConflicts()) {
          board.togglePiece(row, col);
          numOfPieces--;
        } else {
          if (col === board.rows().length - 1) {
            traverseTheBoard(row + 1, 0)
          } else traverseTheBoard(row, col + 1);
          board.togglePiece(row, col)
        }
      }
      hasChanged++;
    }
    numOfPieces--;
  }
  traverseTheBoard(0,0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
