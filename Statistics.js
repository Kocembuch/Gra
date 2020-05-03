class Statistics {
    constructor() {
        this.gameResults = [];

    }

    addGameToStatistics(win, bid) {
        let gameResult = {
            win,
            bid,
        }
        // console.log(gameResult);
        this.gameResults.push(gameResult)
    }

    showGameStatistics() {
        
        let games = this.gameResults.length; 
        let wins = this.gameResults.filter(result => result.win).length;
        let looses = this.gameResults.filter(result => !result.win).length;
        console.log(games, wins, looses);
        return [games, wins, looses]
    }
}

const stats = new Statistics();