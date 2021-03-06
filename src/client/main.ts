import 'regenerator-runtime/runtime'
import Phaser from 'phaser'

import Game from './scenes/Game'

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 700,
    height: 1024,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }},
    scene: [Game],
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT
    }
}

export default new Phaser.Game(config)
