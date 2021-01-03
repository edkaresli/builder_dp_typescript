import { Subsystem } from './Subsystem.ts';
import { GameWorld } from './GameWorld.ts';

export class Game {
    private gameWorld; 
    private subsystemsList: Subsystem[];

    constructor(gw: GameWorld) {
        this.gameWorld = gw;
        this.subsystemsList = [];
    }

    addSubsystem(ss: Subsystem) {
        ss.execute();
        this.subsystemsList.push(ss);
    }

    setGameWorld(gw: GameWorld) {
        console.log(`Setting up game world ${gw.gameMap} ...`);
        this.gameWorld = gw;
    }

    render() {
        const time = new Date();
        console.log(`Rendering at ${time.toLocaleTimeString()} ...`);
    }

    update() {
        const time = new Date();
        console.log(`Updating at ${time.toLocaleTimeString()} ...`);
    }
}