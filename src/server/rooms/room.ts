import { Room, Client } from "colyseus";
import { RoomState } from "./schema/RoomState";

export class CustomRoom extends Room<RoomState> {
    onCreate(options: any) {
        this.setState(new RoomState());

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

