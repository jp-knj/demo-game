import { Schema, type } from "@colyseus/schema";

export class RoomState extends Schema {
    @type("string")
    mySynchronizedProperty: string = 'Hello world'
}