function mazeRunner(maze, directions) {

  // find start
  let x, y //position laberinth
  for (let i = 0; i < maze.length; i++) {
    let j = maze[i].findIndex(e => e == 2);  // find where the player is
    if (j > -1) { x = j, y = i; break }
  }

  // moves
  for (let dir of directions) {
    switch (dir) {
      case 'N': y--; break;
      case 'S': y++; break;
      case 'E': x++; break;
      case 'W': x--; break;
    }
    if (x < 0 || y < 0 || y > maze.length - 1 || x > maze[y].length - 1) return "Dead" // out of bounds
    let here = maze[y][x]
    if (here == 1) return "Dead" // hit wall
    if (here == 3) return "Finish" // find end
  }

  return "Lost"
}

let maze = [
[1, 1, 1, 1, 1, 1, 1],
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