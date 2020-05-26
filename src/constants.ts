import { GameStateConfig } from "./game-state";
import { EventEmitter } from "events";
import { Pilot } from "./pilot";
import { handler } from "./events";

export type DecklistEntry = {
    cardName: string,
    quantity: number
}

export const ACTION_TYPES: string[] = [
    "Trigger",
    "ActivatedAbility",
    "Spell",
    "exile",
    "destroy",
    "loseGame",
    "winGame",
    "returnToHand",
    "returnToBattlefield",
    "damage",
    "playLand"
]

export const TRIGGER_CONDITIONS: string[] = [
    "onSpell:$TypeCountered",
    "onSpell:$TypeCast",
    "onLandPlayed",
    "onCreatureAttack",
    "onBlockersDeclared",
    "onCombatDamageStep",
    "onUpkeep",
    "onObject:$TypeDestroyed",
    "onObject:$TypeLeavesBattlefield",
    "onObject:$TypeEntersBattlefield",
    "onObject:$TypeTap",
    "onObject:$TypeUntap",
    "onDrawStep",
    "onFirstMainPhase",
    "onBeginCombatStep",
    "onEndStep",
    "onCleanup",
    "onDamage:Obj",
    "onDamage:Player",
    "onCheckStateBasedEffects"
]

export const TARGET_GROUP_NAMES: string[] = [
    "allPlayers",
    "allCreatures",
    "allLands",
    "allPermanents",
    "allNonLandPermanents",
    "myCreatures",
    "myLands",
    "myPermanents",
    "myNonLandPermanents",
    "myGraveyard",
    "yourGraveyard",
    "myHand",
    "yourHand",
    "allSpells",
    "mySpells",
    "yourSpells",
    "allNonCreatureSpells",
    "myNonCreatureSpells",
    "yourNonCreatureSpells",
];

export const MAX_CARDS_IN_HAND = 7;
export const MINIMUM_DECK_SIZE = 60;
export const STARTING_LIFE = 20;
export const PHASES: string[] = ["Beginning", "Precombat Main", "Combat", "Postcombat Main", "Ending"];
export const STEPS: string[] = ["Untap", "Upkeep", "Draw Step", "Begin Combat", "Declare Attackers", "Declare Blockers", "Combat Damage", "End of Combat", "End Step", "Cleanup"];
export const START_GAME_STATE_CONFIG: GameStateConfig = {
    turn: 0,
    phase: "Beginning",
    step: "Upkeep",
    stormCount: 0,
    events: handler,
    stateBasedEffects: [],
    pilot: new Pilot(),
    currentStack: [],
    nextAction: "new"
};

export const DEFAULT_FS_READ_ENCODING = {
    encoding: "utf8",
    flag: "r+"
}

export const DEFAULT_FS_WRITE_ENCODING = {
    encoding: "utf8",
    flag: "w+"
}