import { EventEmitter } from "events";

export const handler: EventEmitter = new EventEmitter();

handler.on("error", function(errMsg) {
    console.log(errMsg, this);
});

handler.on("gameStart", () => {

});

handler.on("passPriority", function() {

});
