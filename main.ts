import { GameBuilder } from './GameBuilder.ts';
import { Game } from './Game.ts';

const main = async () => {
    const gameBuilder = new GameBuilder();

    const game: Game = await gameBuilder.buildGame();

    setInterval(() => {
        game.render();
        game.update();
    }, 2000);
}

main();