import { Land, ManaPool, PlayerDecisions, StormGoldfishStateTree } from "./interfaces";
import { EventEmitter } from "events";

export class Pilot {
  life: number;
  landForTurn: boolean;

}



export const gameState: StormGoldfishStateTree = {
  stormCount: 0,
  pool: {
    redManaFloating: 0,
    blueManaFloating: 0,
    colorlessFloating: 0
  },
  life: 20,
  landForTurn: false,
  turn: 0,
  step: "untap",
  phase: "n/a",
  manaCostReduction: 0,
  decisions: {
    cardsInHand: [],
    needsRedMana: 0,
    needsBlueMana: 1
  },
  // listeners: [],
  events: new EventEmitter({ captureRejections: true })
}

// Things that happen between steps and phases should go here
gameState.events.on("stepOrPhaseChage", function() {
  gameState.pool = {
    redManaFloating: 0,
    blueManaFloating: 0,
    colorlessFloating: 0
  } // empty the mana pool
});

gameState.events.on("passPriority", function(ap, nap) {

});


export const theStack: any[] = [];

export class Island implements Land {
  public supertype: string = "basic";
  public type: string = "land";
  public subtype: string = "island";
  public entersTapped: boolean = false;
  public tapped: boolean = false;

  public tap(): void {
    if (this.tapped) {
      throw new Error("land already tapped");
    }
    this.tapped = true;
    gameState.pool.blueManaFloating++;
  }
}

export class Mountain implements Land {
  public supertype: string = "basic";
  public type: string = "land";
  public subtype: string = "mountain";
  public entersTapped: boolean = false;
  public tapped: boolean = false;

  public tap(): void {
    if (this.tapped) {
      throw new Error("land already tapped");
    }
    this.tapped = true;
    gameState.pool.redManaFloating++;
  }
}

export class SteamVents implements Land {
  public type: string = "land";
  public subtype: string = "island mountain";
  public entersTapped: boolean = false;
  public tapped: boolean = false;

  public constructor(payLife: boolean = true) {
    if (payLife) {
      
    }
  }

  public tap(): void {
    if (this.tapped) {
      throw new Error("land already tapped");
    }
    this.tapped = true;
    if (gameState.decisions.needsBlueMana > gameState.decisions.needsRedMana) {
      gameState.blueManaFloating++;
      gameState.decisions.needsBlueMana--;
    } else {
      gameState.redManaFloating++;
    }
  }
}
