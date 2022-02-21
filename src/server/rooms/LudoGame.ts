import { Room, Client } from "colyseus";
import { LudoGameState } from "./schema/LudoGameState";

export class LudoGame extends Room<LudoGameState> {
    onCreate(options: any) {
        this.setState(new LudoGameState());

        // @see https://docs.colyseus.io/colyseus/server/room/#onmessage-type-callback
        this.onMessage('keydown', (client, message) => {
            // @see https://docs.colyseus.io/colyseus/server/room/#sendtype-message
            client.send('keydown', message);
        });
    }

    onJoin(client: Client, options:any){
        console.log(client.sessionId, "joined!");
    }
    onLeave(client: Client, consented: boolean) {
        console.log(client.sessionId, "left!");
    }
    onDispose() {
        console.log("room", this.roomId, "disposing...");
    }
}

