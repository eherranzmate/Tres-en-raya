let content = '-';
let player = document.body.querySelector('h1');
let player1 = 'X';
let player2 = 'O'
let currentPlayer = 1;


let tbl$$ = document.querySelector('#board');

let btn$$ = document.querySelector('#startGame');
btn$$.addEventListener('click', startGame);


function startGame () {
    tbl$$.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        let rows$$ = document.createElement('tr');
        for (var j = 0; j < 3; j++) {
            let columns$$ = document.createElement("td");
            columns$$.addEventListener('click', placeToken);
            columns$$.textContent = content;
            rows$$.appendChild(columns$$);
        }
        tbl$$.appendChild(rows$$);
    }  

}

startGame();


function placeToken () {
    if (this.textContent === content) {
        if(currentPlayer === 1) {
            this.textContent = player1;
        } else {
            this.textContent = player2;  
        }
        
        let winner = checkWinner ();
        if(winner) {
            alert ('Ha ganado el Jugador ' + currentPlayer);
        } else {
            changePlayer()
        }
    }
        
}

 
function checkWinner () {
    let board = arrayBoard ()
    console.log(board)
    if (board[0][0] !== content) {
        if (
            (board[0][0] === board[0][1] && board[0][0] === board[0][2]) ||
            (board[0][0] === board[1][0] && board[0][0] === board[2][0]) ||
            (board[0][0] === board[1][1] && board[0][0] === board[2][2]) 
        ) {
            return true;
        }
    }
         
    if (board[0][1] !== content) {
        if (
            (board[0][1] === board[1][1] && board[0][1] === board[2][1])
        ) {
            return true;
        }
    }

    if (board[0][2] !== content) {
        if (
            (board[0][2] === board[1][2] && board[0][2] === board[2][2]) ||
            (board[0][2] === board[1][1] && board[0][2] === board[2][0]) 
        ) {
            return true;
        }
    }
    
    if (board[1][0] !== content) {
        if (
            (board[1][0] === board[1][1] && board[1][0] === board[1][2])
        ) {
            return true;
        }
    }

    if (board[2][0] !== content) {
        if (
            (board[2][0] === board[2][1] && board[2][0] === board[2][2])
        ) {
            return true;
        }
    }
    return false;
}
                                        

function changePlayer () {
    if(currentPlayer === 1) {
        currentPlayer = 2;
        player.textContent = 'Jugador 1';
    } else {
        currentPlayer = 1;
        player.textContent = 'Jugador 2';
    }
}



function arrayBoard () {
    let board = [];
    let rows = tbl$$.querySelectorAll('tr');
    for(let row of rows) {
        let cells = []; 
        let columns = row.querySelectorAll('td');
        for(let column of columns){
            cells.push(column.textContent);  
        }

        board.push(cells);
        
    }  
    
    return board;

}

console.log(arrayBoard())

arrayBoard()







