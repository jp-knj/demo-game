import {ArraySchema, Schema, type} from "@colyseus/schema";

class PieceState extends Schema {
    @type('number')
    x = 0;

    @type('number')
    y = 0;
}

class PlayerState extends Schema {
    @type('string')
    id:string

    @type([PieceState])
    piecesInYard: PieceState[] | undefined

    @type([PieceState])
    piecesOnBoard: PieceState[] | undefined

    constructor(id:string) {
        super();
        this.id = id
        const pieces = new ArraySchema();
        if (pieces !== undefined) {
            this.piecesInYard = pieces;
            this.piecesOnBoard = pieces;
        }
    }
}
export class LudoGameState extends Schema {

    @type([PlayerState])
    playerStates: PlayerState[] | undefined

    constructor() {
        super();
        const pieces = new ArraySchema();
        if (pieces !== undefined) {
            this.playerStates = pieces
        }
    }
}
