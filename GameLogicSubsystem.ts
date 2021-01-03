import { Subsystem } from './Subsystem.ts';


export class GameLogicSubsystem implements Subsystem {
    name: string;
    constructor(n: string) {
        this.name = n;
    }

    execute() {
        console.log(`Executing ${this.name} subsystem...`);
    }
}