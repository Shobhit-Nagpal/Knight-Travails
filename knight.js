const Node = (position, path) => {
    return {position, path};
}

const createBoard = () => {
    const board = [];

    for (let i = 0 ; i < 8 ; i++) {
        for (let j = 0 ; j < 8 ; j++) {

            board.push([i,j]);
            
        }
    }

    return board;
}

const chessboard = createBoard();

const legalKnightMoves = (pos) => {

    const moves = [];

    if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
        console.log("Invalid");
        return null;
    }

    moves.push([pos[0]+2, pos[1]+1], [pos[0]+2, pos[1]-1], [pos[0]-2, pos[1]+1], [pos[0]-2, pos[1]-1], [pos[0]+1, pos[1]+2], [pos[0]-1, pos[1]+2], [pos[0]+1, pos[1]-2], [pos[0]-1, pos[1]-2]);
    //console.log(moves);

    const legalMoves = moves.filter((move) => !(move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7));
    //console.log(legalMoves);

    return legalMoves;

}

//legalKnightMoves([7,7]);

const BFS = (start, destination) => {

    const queue = [Node(start,[start])];
    const visited = new Set();

    while(queue.length > 0) {

        const current = queue.shift();
        visited.add(current.position);

        if (current === null) continue;

        if (JSON.stringify(current.position) === JSON.stringify(destination)) return current.path;

        let moves = legalKnightMoves(current.position);

        moves = moves.filter( (move) => !(visited.has(move)));

        moves.forEach((move) => queue.push(Node(move, [...current.path, move])));

    }
}


const knightMoves = (start, destination) => {

    if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) {
        console.log("Invalid entry on the start coordinates");
        return null;
    }

    if (destination[0] < 0 || destination[0] > 7 || destination[1] < 0 || destination[1] > 7) {
        console.log("Invalid entry on the destination coordinates");
        return null;
    }

    //call BFS algorithm here
    const path = BFS(start,destination);
    return path;

}

console.log(knightMoves([0,0], [7,7]));