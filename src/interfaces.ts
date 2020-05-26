import * as mtg from "mtgsdk-ts/out/IMagic";
import { EventEmitter } from "events";

export interface CardInterface {
  name: string;
  types: string[];
  type: string; // NOT the typeline; simply one of the possible Card types
  manaCost: string;
  cmc: number;
  colors: string[];
  uuid?: string;
  [key: string]: any;
}

export interface SdkCard {
  name: string;
  manaCost: string;
  cmc: number;
  colors: (keyof typeof mtg.Color)[];
  colorIdentity: (keyof typeof mtg.ColorIdentity)[];
  type: string;
  supertypes: string[];
  types: string[];
  subtypes: string[];
  rarity: keyof typeof mtg.Rarity;
  set: string;
  setName: string;
  artist: string;
  flavor?: string;
  layout: keyof typeof mtg.Layout;
  multiverseid: number;
  imageUrl: string;
  variations: number[];
  printings: string[];
  originalText: string;
  originalType: string;
  legalities: mtg.BlockLegality[];
  id: string;
  power?: number;
  toughness?: number;
  loyalty?: number;
}

export interface StormHandStats {
  serum: number;
  sleight: number;
  opt: number;
  dritual: number;
  pritual: number;
  manamorphose: number;
  gifts: number;
  pastInFlames: number;
  barals: number;
  mancers: number;
  peerThruDepths: boolean; // since it's a one-of
  repeal: boolean;
  remand: number; // replacing unsub with this since it cantrips
}

export interface ManaPool {
  redManaFloating: number;
  blueManaFloating: number;
  colorlessFloating: number;
}

export interface PilotProps {
  life: number;
  hand: CardInterface[];
  library: CardInterface[];
  yard: CardInterface[];
  controls: any[]; // includes Game Objects
}

export interface StormGoldfishStateTree {
  pool: ManaPool;
  stormCount: number;
  life: number;
  landForTurn: boolean;
  turn: number;
  step: string;
  phase: string;
  manaCostReduction: number;
  decisions: PlayerDecisions;
//  listeners: (() => void)[];
  events: EventEmitter;
}

export interface Trigger {
  type?: string;

}

export interface StaticEffect {
  type?: string;

}

export interface Land {
  supertype?: string;
  type: string;
  subtype?: string;
  entersTapped: boolean;
  tapped: boolean;
  tap(): void;
}

export interface PlayerDecisions {
  cardsInHand: string[];
  needsRedMana: number;
  needsBlueMana: number;
}
