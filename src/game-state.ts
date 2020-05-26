import { noop } from "lodash";
import { EventEmitter } from "events";
import { ManaPool, StaticEffect, Trigger, PilotProps } from "./interfaces";
import { Pilot } from "./pilot";

const PHASES: string[] = ["Beginning", "Precombat Main", "Combat", "Postcombat Main", "Ending"];
const STEPS: string[] = ["Untap", "Upkeep", "Draw Step", "Begin Combat", "Declare Attackers", "Declare Blockers", "Combat Damage", "End of Combat", "End Step", "Cleanup"];
const DEFAULT_GAME_STATE_CONFIG: GameStateConfig = {
    turn: 0,
    phase: "Beginning",
    step: "Upkeep",
    stormCount: 0,
    events: new EventEmitter({ captureRejections: true }),
    stateBasedEffects: [],
    pilot: new Pilot("path"),
    currentStack: [],
    nextAction: "new"
};

export interface GameStateConfig {
    turn: number;
    step: string;
    phase: string;
    stormCount: number;
    events: EventEmitter;
    stateBasedEffects: StaticEffect[];
    pilot: Pilot;
    opponent?: PilotProps;
    currentStack: any[];
    nextAction: string;
}

export class GameState {
    private turn: number;
    private step: string;
    private phase: string;
    private stormCount: number;
    private events: EventEmitter;
    private stateBasedEffects: StaticEffect[];
    private pilot: Pilot;
    private opponent: PilotProps;
    private currentStack: any[];
    public nextAction: string;
    

    public constructor(config: GameStateConfig) {
        this.turn = config.turn;
        this.step = config.step;
        this.phase = config.phase;
        this.stormCount = config.stormCount;
        this.events = config.events;
        this.stateBasedEffects = config.stateBasedEffects;
        this.pilot = config.pilot;
        (config.opponent) ? this.opponent = config.opponent : noop();
        this.currentStack = config.currentStack;
        
    }

    /**
     * @returns {number} turn
     */
    public getTurn(): number {
        return this.turn;
    }

    /**
     * @param {number} turn
     */
    public setTurn(v: number): void {
        this.turn = v;
    }

    /**
     * @returns {string} step
     */
    public getStep(): string {
        return this.step;
    }

    /**
     * @param {string} step
     */
    public setStep(v: string): void {
        this.step = v;
    }

    /**
     * @returns {string} phase
     */
    public getPhase(): string {
        return this.phase;
    }

    /**
     * @param {string} phase
     */
    public setPhase(v: string): void {
        this.phase = v;
    }

    /**
     * @returns {number} stormCount
     */
    public getStormCount(): number {
        return this.stormCount;
    }

    /**
     * @param {number} stormCount
     */
    public setStormCount(v: number): void {
        this.stormCount = v;
    }

    /**
     * @returns {EventEmitter} events
     */
    public getEvents(): EventEmitter {
        return this.events;
    }

    /**
     * @param {EventEmitter} events
     */
    public setEvents(v: EventEmitter): void {
        this.events = v;
    }

    /**
     * @returns {StaticEffect[]} stateBasedEffects
     */
    public getStateBasedEffects(): StaticEffect[] {
        return this.stateBasedEffects;
    }

    /**
     * @param {StaticEffect[]} stateBasedEffects
     */
    public setStateBasedEffects(v: StaticEffect[]): void {
        this.stateBasedEffects = v;
    }

    /**
     * @returns {Pilot} pilot
     */
    public getPilot(): Pilot {
        return this.pilot;
    }

    /**
     * @param {Pilot} pilot
     */
    public setPilot(v: Pilot): void {
        this.pilot = v;
    }

    /**
     * @returns {PilotProps} opponent
     */
    public getOpponent(): PilotProps {
        return this.opponent;
    }

    /**
     * @param {PilotProps} opponent
     */
    public setOpponent(v: PilotProps): void {
        this.opponent = v;
    }

    /**
     * @returns {any[]} currentStack
     */
    public getCurrentStack(): any[] {
        return this.currentStack;
    }

    /**
     * @param {any[]} currentStack
     */
    public setCurrentStack(v: any[]): void {
        this.currentStack = v;
    }

    
}
