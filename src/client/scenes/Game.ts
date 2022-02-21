import Phaser from 'phaser'
import * as Colyseus from 'colyseus.js';
import JMP = Phaser.Create.Palettes.JMP;

export default class Game extends Phaser.Scene
{
    private client: Colyseus.Client = new Colyseus.Client('ws://localhost:2567');
    constructor()
    {
        super('hello-world')
    }

    preload() {
        this.load.image('board', 'asset/dice/pieceBlue_border10.png')
    }

    // @see https://docs.colyseus.io/colyseus/client/client/#join-roomname-string-options-any
    async create() {
        const {width, height} = this.scale;
        const board = this.add.image(width * 0.5, height * 0.5, 'board');
        const room = await this.client.joinOrCreate('ludo')

        room.onMessage('keydown', message => {
            console.log(`client: ${message}`);
        })

        this.input.keyboard.on('keydown', (evt: KeyboardEvent) => {
            room.send('keydown', evt.key);
        })
    }
}
