
export class GameWorld {
    gameMap: string;
    specificGameLogic: string;

    constructor(map: string, logic: string) {
        this.gameMap = map;
        console.log(`Setting up game map ${this.gameMap} ...`);
        this.specificGameLogic = logic;
    }
}