import { EventEmitter } from "events";

export const handler: EventEmitter = new EventEmitter({ captureRejections: true });

handler.on("error", function(errMsg) {
    console.log(errMsg, this);
});

handler.on("gameStart", () => {

});

handler.on("passPriority", function() {

});

handler.on("checkGameState", function(state) {
    // if (state.pilot.lifeTotal <= 0) {

    // }
    // for (pilots) => if pilot.life === 0 { pilot.loseGame(); }
    // for (field.permanents) => { if (perm.damage >= perm.toughness) {
    //      perm.die();

   // }}
})