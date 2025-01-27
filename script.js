const scoreDisplay = document.getElementById('score');
const width = 28;
let score = 0;
const grid = document.querySelector('.grid');

const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 2, 2, 2, 2, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 1, 2, 2, 2, 2, 1, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]


// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty


window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);


const squares = [];



function createBoard() {
    for (let i = 0; i < layout.length; i++){
        const square = document.createElement('div');
        square.id = i;  
        grid.appendChild(square);
        squares.push(square)

        if (layout[i] === 0) {
            squares[i].classList.add('pac-dot');
        }

        if (layout[i] === 1) {
            squares[i].classList.add('wall');
        }

        if (layout[i] === 2) {
            squares[i].classList.add('ghost-lair');
        }

        if (layout[i] === 3) {
            squares[i].classList.add('power-pellet');
        }
    }
};

createBoard();
document.addEventListener('keyup', movePacman)

let pacmanCurrentIndex = 490
squares[pacmanCurrentIndex].classList.add('pac-man')


function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove('pac-man');
    switch (e.key) {
        case 'ArrowLeft':
            if (pacmanCurrentIndex % width !== 0 && 
                !squares[pacmanCurrentIndex -1].classList.contains('wall') && 
                !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')) {
                pacmanCurrentIndex -= 1
            } 
            if (squares[pacmanCurrentIndex -1] === squares[363]) {
                pacmanCurrentIndex = 391
            }
            break
        case 'ArrowRight':
            if (pacmanCurrentIndex % width !== 0 && 
                !squares[pacmanCurrentIndex +1].classList.contains('wall') && 
                !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')) {
                pacmanCurrentIndex += 1
            }
            if (squares[pacmanCurrentIndex +1] === squares[392]) {
                pacmanCurrentIndex = 364
            }
            break
        case 'ArrowUp':
            if (pacmanCurrentIndex % width !== 0 && 
                !squares[pacmanCurrentIndex -width].classList.contains('wall') && 
                !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')) {
                pacmanCurrentIndex -= width
            }
            break
        case 'ArrowDown':
            if (pacmanCurrentIndex % width !== 0 && 
                !squares[pacmanCurrentIndex +width].classList.contains('wall') && 
                !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')) {
                pacmanCurrentIndex += width
            }
            break 
    }
    squares[pacmanCurrentIndex].classList.add('pac-man');
    feedPacdot();
    feedPowerPellet();
    checkForGameOver();
    checkForWin();
}

function feedPacdot () {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        score++;
        scoreDisplay.innerHTML = score
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
    }   
}

function feedPowerPellet () {
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        score += 10;
        scoreDisplay.innerHTML = score;
        ghosts.forEach(ghost => ghost.isScared = true);
        setTimeout(unScareGhosts, 10000);
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
    }
}

function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
}



class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN

    }
}


const ghosts = [
    new Ghost ('blinky', 348, 250),
    new Ghost ('pinky', 376, 400),
    new Ghost ('inky', 351, 300),
    new Ghost ('clyde', 379, 500),
]

ghosts.forEach(ghost => 
    squares[ghost.currentIndex].classList.add(ghost.className, 'ghost'))    

ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
    const directions = [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function () {
        if (
            !squares[ghost.currentIndex + direction].classList.contains('ghost') &&
            !squares[ghost.currentIndex + direction].classList.contains('wall')
        ) {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            ghost.currentIndex += direction
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')

        } else direction = directions[Math.floor(Math.random() * directions.length)]  

        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add('scared-ghost')
        }

        if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
            ghost.isScared = false
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            ghost.currentIndex = ghost.startIndex
            score += 100
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }
    }, ghost.speed)
}

function checkForGameOver () {
    if 
    (
        squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            setTimeout(function() { alert('YOU ARE A BIG FAT LOSER! BYE BYE LOSAH')}, 500)
        }    
}

function checkForWin() {
    if (score >= 274) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacman)
        setTimeout(function() { alert('You have WON!')}, 500)
    }
}

