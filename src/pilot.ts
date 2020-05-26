import { CardInterface } from "./interfaces";

const MAX_CARDS_IN_HAND = 7;
const MAX_LANDS_PER_TURN = 1;
const MINIMUM_DECK_SIZE = 60;
const STARTING_LIFE = 20;

export class Pilot {
    name: string;
    dci: number; // basically a numerical GUID
    life: number;
    poison: number = 0;
    hand: CardInterface[];
    library: CardInterface[];
    yard: CardInterface[];
    controls: any[]; // includes Game Objects
    owns: any[];

    public constructor(name: string = "Spike", dci?: number) {
        this.name = name;
        this.life = STARTING_LIFE;
        this.owns = [];
        this.controls = [];
        this.yard = [];
        this.hand = [];
        this.library = [];
        this.dci = dci || Math.floor(Math.random() * 99999999);
    }
}
