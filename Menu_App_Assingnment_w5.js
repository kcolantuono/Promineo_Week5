class Game { //Class of specific instance of a game
    constructor(name) {
        this.name = name
    }
}

class Menu {
    constructor() {
        this.gameLibrary = [];
    }

    start() { //where application starts
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '0' :
                    selection = 0;
                    break;
                case '1' :
                    this.addGame();
                    break;
                case '2' :
                    this.removeGame();
                    break;
                case '3' :
                    this.displayLibrary();
                    break;
                case '4' :
                    this.chooseGame();
                    break;
                default:
                    this.badResponse();
                    break;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
            Game Selector
        ~~~~~~~~~~~~~~~~~~~~~
        0) exit
        1) add new game
        2) remove game
        3) view game library
        4) choose game for me
        `);
    }

    addGame() {
        let name = prompt('Enter name for new game: ');
        this.gameLibrary.push(new Game(name));
        alert(`"${name}" has now been added at index: ${this.gameLibrary.length - 1}`);
    }

    removeGame() {
        let index = prompt('Enter the index for what game to remove: ');
        if (index >= 0 && index < this.gameLibrary.length) {
            this.gameLibrary.splice(index,1);
            alert('Game removed!')
        } else {
            alert('Game not found. Check the game index and try again');
        }
    }

    displayLibrary() {
        if (this.gameLibrary.length > 0) {
            let display = 'Game Library: \n';
            for (let i in this.gameLibrary){
                display += `${i}) ${this.gameLibrary[i].name}\n`;
            }
            alert(display);
        } else {
            alert("No games in library. Pretty boring tbh");
        }
    }

    chooseGame() {
        if (this.gameLibrary.length != 0) {
            alert(`You should go play: ${this.gameLibrary[Math.floor(Math.random() * this.gameLibrary.length)].name}`);
        } else {
            alert('Not enough games in library. Please add more games!');
        }
    }

    badResponse() {
        alert("please give a valid response");
    }
}

let menu = new Menu();
menu.start();