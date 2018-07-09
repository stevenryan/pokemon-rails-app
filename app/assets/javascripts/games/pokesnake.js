window.onload = function() {

    //variables that will hold data, direction values that change once you move
    var head, tail, cursors, snake, pokemon, gameText, playerDirection;
    var directions = Object.freeze({up: 0, down: 1, right: 2, left: 3});

    var canvasWidth = 896, canvasHeight = 704;
    var playerSize = 64;
    var x = 64, y = 0;
    var frameCounter = 0;
    var gameSpeed = 20;
    var score = 0;

    var game = new Phaser.Game(canvasWidth, canvasHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload() {
        game.load.image('pokeball', '../pokeball-tail.png');
        game.load.image('background', '../white-bg.png');
        // game.load.spritesheet('player', 'images/ash-player.png');
        game.load.image('1', '../sprites/1.png');
        game.load.image('2', '../sprites/2.png');
        game.load.image('3', '../sprites/3.png');
        game.load.image('4', '../sprites/4.png');
        game.load.image('5', '../sprites/5.png');
        game.load.image('6', '../sprites/6.png');
        game.load.image('7', '../sprites/7.png');
        game.load.image('8', '../sprites/8.png');
        game.load.image('9', '../sprites/9.png');
        game.load.image('10', '../sprites/10.png');
        game.load.image('11', '../sprites/11.png');
        game.load.image('12', '../sprites/12.png');
        game.load.image('13', '../sprites/13.png');
        game.load.image('14', '../sprites/14.png');
        game.load.image('15', '../sprites/15.png');
        game.load.image('16', '../sprites/16.png');
        game.load.image('17', '../sprites/17.png');
        game.load.image('18', '../sprites/18.png');
        game.load.image('19', '../sprites/19.png');
        game.load.image('20', '../sprites/20.png');
        game.load.image('21', '../sprites/21.png');
        game.load.image('22', '../sprites/22.png');
        game.load.image('23', '../sprites/23.png');
        game.load.image('24', '../sprites/24.png');
        game.load.image('25', '../sprites/25.png');
        game.load.image('26', '../sprites/26.png');
        game.load.image('27', '../sprites/27.png');
        game.load.image('28', '../sprites/28.png');
        game.load.image('29', '../sprites/29.png');
        game.load.image('30', '../sprites/30.png');
        game.load.image('31', '../sprites/31.png');
        game.load.image('32', '../sprites/32.png');
        game.load.image('33', '../sprites/33.png');
        game.load.image('34', '../sprites/34.png');
        game.load.image('35', '../sprites/35.png');
        game.load.image('36', '../sprites/36.png');
        game.load.image('37', '../sprites/37.png');
        game.load.image('38', '../sprites/38.png');
        game.load.image('39', '../sprites/39.png');
        game.load.image('40', '../sprites/40.png');
        game.load.image('41', '../sprites/41.png');
        game.load.image('42', '../sprites/42.png');
        game.load.image('43', '../sprites/43.png');
        game.load.image('44', '../sprites/44.png');
        game.load.image('45', '../sprites/45.png');
        game.load.image('46', '../sprites/46.png');
        game.load.image('47', '../sprites/47.png');
        game.load.image('48', '../sprites/48.png');
        game.load.image('49', '../sprites/49.png');
        game.load.image('50', '../sprites/50.png');
        game.load.image('51', '../sprites/51.png');
        game.load.image('52', '../sprites/52.png');
        game.load.image('53', '../sprites/53.png');
        game.load.image('54', '../sprites/54.png');
        game.load.image('55', '../sprites/55.png');
        game.load.image('56', '../sprites/56.png');
        game.load.image('57', '../sprites/57.png');
        game.load.image('58', '../sprites/58.png');
        game.load.image('59', '../sprites/59.png');
        game.load.image('60', '../sprites/60.png');
        game.load.image('61', '../sprites/61.png');
        game.load.image('62', '../sprites/62.png');
        game.load.image('63', '../sprites/63.png');
        game.load.image('64', '../sprites/64.png');
        game.load.image('65', '../sprites/65.png');
        game.load.image('66', '../sprites/66.png');
        game.load.image('67', '../sprites/67.png');
        game.load.image('68', '../sprites/68.png');
        game.load.image('69', '../sprites/69.png');
        game.load.image('70', '../sprites/70.png');
        game.load.image('71', '../sprites/71.png');
        game.load.image('72', '../sprites/72.png');
        game.load.image('73', '../sprites/73.png');
        game.load.image('74', '../sprites/74.png');
        game.load.image('75', '../sprites/75.png');
        game.load.image('76', '../sprites/76.png');
        game.load.image('77', '../sprites/77.png');
        game.load.image('78', '../sprites/78.png');
        game.load.image('79', '../sprites/79.png');
        game.load.image('80', '../sprites/80.png');
        game.load.image('81', '../sprites/81.png');
        game.load.image('82', '../sprites/82.png');
        game.load.image('83', '../sprites/83.png');
        game.load.image('84', '../sprites/84.png');
        game.load.image('85', '../sprites/85.png');
        game.load.image('86', '../sprites/86.png');
        game.load.image('87', '../sprites/87.png');
        game.load.image('88', '../sprites/88.png');
        game.load.image('89', '../sprites/89.png');
        game.load.image('90', '../sprites/90.png');
    }

    function create() {
        game.add.image(0, 0, 'background');
        gameText = game.add.text(canvasWidth, 0, "0", {
            font: "28px Arial",
            fill: "#000000",
        });
        //keep score text in top right of canvas
        gameText.anchor.setTo(1, 0);
        startGame();
        randomPokemon();
        cursors = game.input.keyboard.createCursorKeys();
    }

    function update() {
        gameText.text = score;
        updateDirection();
        frameCounter++;
        if (frameCounter == gameSpeed) {
            movePlayer();
            //adds new head image in the direction you're going in
            if (selfCollide()) {
              //alerts with score, clears the values
                alert("Game Over! You caught " + score + " Pokemon!");
                clearGame();
                startGame();
                score = 0;
                gameSpeed = 20;
                playerDirection = undefined;
                x = 64;
                y = 0;
                gameText.text = "";
            }
            if (pokemonCollide()) {
              //ups score and speed, generates a new random pokemon placement
                score++;
                pokemon.destroy();
                randomPokemon();
                gameSpeed--;
                if (gameSpeed <= 5) gameSpeed = 5;
            } else if (playerDirection != undefined) {
                removeTail();
                //deletes tail image after adding a new head image (looks like moving)
            }
            frameCounter = 0;
        }
    }

    function startGame() {
        head = new Object();
        newHead(0, 0);
        tail = head;
        newHead(64, 0);
        //starting location of player
    }

    function clearGame() {
        while (tail != null) {
            tail.image.destroy();
            tail = tail.next;
        }
        head = null;
    }

    function randomPokemon() {
        if (pokemon != undefined) pokemon.destroy();
        randomNum = Math.ceil(Math.random() * Math.floor(90)).toString();
        pokemon = game.add.image(0, 0, randomNum);
        do {
            pokemon.position.x = Math.floor(Math.random() * 14) * 64;
            pokemon.position.y = Math.floor(Math.random() * 11) * 64;
        } while (pokemonCollide());
        //generates random (x,y) location on a 64x64 grid
    }

    function newHead(x, y) {
        var newHead = new Object();
        newHead.image = game.add.image(x, y, 'pokeball');
        newHead.next = null;
        head.next = newHead;
        head = newHead;
    }

    function removeTail(x, y) {
        tail.image.destroy();
        tail = tail.next;
    }

    function pokemonCollide() {
        var growTail = tail;
        var collides = false;
        var tailLength = 0;
        while (growTail != null) {
            tailLength++;
            if (pokemon.position.x == growTail.image.position.x &&
                pokemon.position.y == growTail.image.position.y) {
                collides = true;
            }
            growTail = growTail.next;
        }
        return collides;
    }

    function selfCollide() {
        var growTail = tail;
        var collides = false;
        while (growTail.next != head) {
            if (growTail.image.position.x == head.image.position.x &&
                growTail.image.position.y == head.image.position.y) {
                collides = true;
            }
            growTail = growTail.next;
        }
        return collides;
    }

    function updateDirection() {
        if (cursors.right.isDown && playerDirection != directions.left) {
            playerDirection = directions.right;
        }
        if (cursors.left.isDown && playerDirection != directions.right) {
            playerDirection = directions.left;
        }
        if (cursors.up.isDown && playerDirection != directions.down) {
            playerDirection = directions.up;
        }
        if (cursors.down.isDown && playerDirection != directions.up) {
            playerDirection = directions.down;
        }
    }

    function movePlayer() {
        if (playerDirection == directions.right) {
            x += playerSize;
        } else if (playerDirection == directions.left) {
            x -= playerSize;
        } else if (playerDirection == directions.up) {
            y -= playerSize;
        } else if (playerDirection == directions.down) {
            y += playerSize;
        }
        if (x <= 0 - playerSize) {
            x = canvasWidth - playerSize;
        } else if (x >= canvasWidth) {
            x = 0;
        } else if (y <= 0 - playerSize) {
            y = canvasHeight - playerSize;
        } else if (y >= canvasHeight) {
            y = 0;
        }
        if (playerDirection != undefined) {
            newHead(x, y);
        }
    }
};
