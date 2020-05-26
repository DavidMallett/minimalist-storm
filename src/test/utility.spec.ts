import { DecklistEntry, DEFAULT_FS_READ_ENCODING } from "../constants";
import { buildDeck, fetchFromApi, fetchFromCache, getCard } from "../utility";
import { expect, test, xtest } from "@jest/globals"
import { CardInterface } from "../interfaces";
import fs from "fs";

const jsonpath: string = "./src/storm.json";

test("should test fetchFromApi", async (done) => {
    const delver: CardInterface = await fetchFromApi("Delver of Secrets");
    console.log(JSON.stringify(delver));
    expect(delver).toBeTruthy();
    expect(delver.cmc).toBeTruthy();
    expect(delver.manaCost).toBeTruthy();
    expect(delver.name).toBeTruthy();
    expect(delver.type).toBeTruthy();
    expect(delver.colors).toBeTruthy();

    done!();
});

test("should test fetchFromCache", async (done) => {
    const delver: CardInterface = await fetchFromCache("Delver of Secrets");
    console.log(JSON.stringify(delver));
    expect(delver).toBeTruthy();
    expect(delver.cmc).toBeTruthy();
    expect(delver.manaCost).toBeTruthy();
    expect(delver.name).toBeTruthy();
    expect(delver.type).toBeTruthy();
    expect(delver.colors).toBeTruthy();

    done!();
});

test("should test getCard", async (done) => {
    const delver: CardInterface = await getCard("Delver of Secrets");
    console.log(JSON.stringify(delver));
    expect(delver).toBeTruthy();
    expect(delver.cmc).toBeTruthy();
    expect(delver.manaCost).toBeTruthy();
    expect(delver.name).toBeTruthy();
    expect(delver.type).toBeTruthy();
    expect(delver.colors).toBeTruthy();

    done!();
});

test("should test buildDeck", async (done) => {
    const decklist: string = fs.readFileSync(jsonpath, DEFAULT_FS_READ_ENCODING);
    expect(decklist).toBeTruthy();
    const decklistObj: DecklistEntry[] = JSON.parse(decklist) as DecklistEntry[];
    const deck: CardInterface[] = await buildDeck(decklistObj);
    expect(deck).toBeTruthy();
    expect(deck.length).toBe(60);
    
});
