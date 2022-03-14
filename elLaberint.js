function mazeRunner(maze, directions) {

    // find start
    var x,y
    for (var j = 0; j < maze.length; j++) {
      var k = maze[j].findIndex(e=>e==2);
      if (k > -1) { x = k, y = j; break }
    }
    
    // moves
    for (var dir of directions) {
      switch (dir) {
        case 'N': y--; break;
        case 'S': y++; break;
        case 'E': x++; break;
        case 'W': x--; break;
      }
      if (x < 0 || y < 0 || y > maze.length-1 || x > maze[y].length-1) return "Dead" // out of bounds
      var here = maze[y][x]
      if (here == 1) return "Dead" // hit wall
      if (here == 3) return "Finish" // find end
    }
    
    return "Lost"
  }

var maze = [[1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 3],
[1, 0, 1, 0, 1, 0, 1],
[0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 1],
[1, 2, 1, 0, 1, 0, 1]];

console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]), "Finish");

console.log(mazeRunner(maze, ["N", "N", "N", "W", "W"]), "Dead");


console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"]), "Dead", "Expected Dead");

console.log(mazeRunner(maze, ["N", "E", "E", "E", "E"]), "Lost");