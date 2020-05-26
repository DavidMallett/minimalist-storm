import { createGuid } from "./utility";

export interface GameObjConfig {
    name: string;
    ownerId: string;
    text: string;
    typeLine: string;
    types: string[];
    keywords: string[];
    power?: number;
    toughness?: number;
//    damage?: number;
    loyalty?: number;
    manaCost: string;
    cmc: number;
    colors: string[];
}

export class GameObj {
    private id: string;
    private name: string;
    private ownerId: string;
    private text: string;
    private typeLine: string;
    private types: string[];
    private keywords: string[];
    private power?: number;
    private toughness?: number;
    private loyalty?: number;
    private damage?: number;
    private manaCost: string;
    private cmc: number;
    private colors: string[];
    

    public constructor(config: GameObjConfig) {
        this.id = createGuid();
        this.name = config.name;
        this.ownerId = config.ownerId;
        this.text = config.text;
        this.typeLine = config.typeLine;
        this.types = config.types;
        this.keywords = config.keywords;
        this.manaCost = config.manaCost;
        this.cmc = config.cmc;
        this.colors = config.colors;
        (config.power) ? this.power = config.power : () => ({});
        (config.toughness) ? this.toughness = config.toughness : () => ({});
        (config.loyalty) ? this.loyalty = config.loyalty : () => ({});
    }

    /**
     * @returns {string} id
     */
    public getId(): string {
        return this.id;
    }

    /**
     * @param {string} id
     */
    public setId(v: string): void {
        this.id = v;
    }

    /**
     * @returns {string} name
     */
    public getName(): string {
        return this.name;
    }

    /**
     * @param {string} name
     */
    public setName(v: string): void {
        this.name = v;
    }

    /**
     * @returns {string} ownerId
     */
    public getOwnerId(): string {
        return this.ownerId;
    }

    /**
     * @param {string} ownerId
     */
    public setOwnerId(v: string): void {
        this.ownerId = v;
    }

    /**
     * @returns {string} text
     */
    public getText(): string {
        return this.text;
    }

    /**
     * @param {string} text
     */
    public setText(v: string): void {
        this.text = v;
    }

    /**
     * @returns {string} typeLine
     */
    public getTypeLine(): string {
        return this.typeLine;
    }

    /**
     * @param {string} typeLine
     */
    public setTypeLine(v: string): void {
        this.typeLine = v;
    }

    /**
     * @returns {string[]} types
     */
    public getTypes(): string[] {
        return this.types;
    }

    /**
     * @param {string[]} types
     */
    public setTypes(v: string[]): void {
        this.types = v;
    }

    /**
     * @returns {string[]} keywords
     */
    public getKeywords(): string[] {
        return this.keywords;
    }

    /**
     * @param {string[]} keywords
     */
    public setKeywords(v: string[]): void {
        this.keywords = v;
    }

    /**
     * @returns {number} power
     */
    public getPower(): number {
        return this.power || 0;
    }

    /**
     * @param {number} power
     */
    public setPower(v: number): void {
        this.power = v;
    }

    /**
     * @returns {number} toughness
     */
    public getToughness(): number {
        return this.toughness || 0;
    }

    /**
     * @param {number} toughness
     */
    public setToughness(v: number): void {
        this.toughness = v;
    }

    /**
     * @returns {number} damage
     */
    public getDamage(): number {
        return this.damage || 0;
    }

    /**
     * @param {number} damage
     */
    public setDamage(v: number): void {
        this.damage = v;
    }

    /**
     * @returns {string} manaCost
     */
    public getManaCost(): string {
        return this.manaCost;
    }

    /**
     * @param {string} manaCost
     */
    public setManaCost(v: string): void {
        this.manaCost = v;
    }

    /**
     * @returns {number} cmc
     */
    public getCmc(): number {
        return this.cmc;
    }

    /**
     * @param {number} cmc
     */
    public setCmc(v: number): void {
        this.cmc = v;
    }

    /**
     * @returns {string[]} colors
     */
    public getColors(): string[] {
        return this.colors;
    }

    /**
     * @param {string[]} colors
     */
    public setColors(v: string[]): void {
        this.colors = v;
    }

    /**
     * @returns {number} loyalty
     */
    public getLoyalty(): number {
        return this.loyalty || 0;
    }

    /**
     * @param {number} loyalty
     */
    public setLoyalty(v: number): void {
        this.loyalty = v;
    }

    
}
