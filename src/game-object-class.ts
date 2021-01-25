import { Card, Cards, CardFace, CardIdentifier } from "scryfall-sdk";

/** A class to represent any object that can exist in the game: a Card, Token, Emblem, etc are all GameObjects */
export class GameObject {

    name: string;
    id: string;
    type_line: string;
    supertypes: string[] = [];
    types: string[] = [];
    subtypes: string[] = [];
    cmc: number;
    mana_cost?: string | null;
    // mana_cost?: string;
    power?: number;
    toughness?: number;
    loyalty?: number;
    colors?: string[] | null;
    color_identity: string[];
    oracle_text?: string | null;
}

