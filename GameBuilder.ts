import { GameGraphicsSubsystem } from './GameGraphicsSubsystem.ts';
import { GameNetworkSubsystem } from './GameNetworkSubsystem.ts';
import { GameLogicSubsystem } from './GameLogicSubsystem.ts';
import { GameSoundSubsystem } from './GameSoundSubsystem.ts';

import { GameWorld } from './GameWorld.ts';

import { Game } from './Game.ts';

export class GameBuilder {
    constructor() {

    }

    private initGraphicsSubsystem(): GameGraphicsSubsystem {
        return new GameGraphicsSubsystem("GPU init ... ");
    } 

    private buildNetworkSubsystem(): GameNetworkSubsystem {
        return new GameNetworkSubsystem("initializing TCP/IP stack ... ");
    } 

    private buildGameWorld(gm: string, splm: string): GameWorld {
        return new GameWorld(gm, splm);
    } 
    
    private buildGameLogic(): GameLogicSubsystem {
        return new GameLogicSubsystem("Game Logic module ... ");
    } 

    private initSoundSubsystem(): GameSoundSubsystem {
        return new GameSoundSubsystem("Initializing ASIO audio subsystem ... ");
    } 

    async buildGame(): Promise<Game> {
        const gameWorld = this.buildGameWorld("Steps to Heaven", "Neural Network Logic");
        const game = new Game(gameWorld);

        const graphicsSubsystem = this.initGraphicsSubsystem();
        game.addSubsystem(graphicsSubsystem);

        const networkSubsystem = this.buildNetworkSubsystem();
        game.addSubsystem(networkSubsystem);

        game.addSubsystem(this.buildGameLogic());
        game.addSubsystem(this.initSoundSubsystem());
        
        return await game;
    }
}