import _ from "lodash";
import fs from "fs";
import { DEFAULT_FS_WRITE_ENCODING as writeSettings, DEFAULT_FS_READ_ENCODING, DecklistEntry } from "./constants";
import { CardInterface, SdkCard } from "./interfaces";
import { Cards } from "mtgsdk-ts";
// import { CreatureCard, PlaneswalkerCard } from "mtgsdk-ts/out/IMagic";
import { promisify } from "util";


export function createGuid(len: number = 16): string {
  const chars: string = "abcdefghijklmnopqrstuvwxyz1234567890";
  const uuidLength: number = len;
  let result = "";
  for (let i: number = 0; i < uuidLength; i++) {
    result += chars.charAt(Math.random() * chars.length);
    if (i % 4 === 0 && i > 0) {
      result += "-";
    }
  }
  return result;
}

export async function getCard(name: string): Promise<CardInterface> {
    let result: CardInterface;
    try {
        result = await fetchFromCache(name);
    } catch(error) {
        // throw error;
        console.log(`caught error ${error}`, `fetching from API`);
        result = await fetchFromApi(name);
    }
    return Promise.resolve(result);
}

export async function fetchFromCache(name: string): Promise<CardInterface> {
    let card: SdkCard;
    try {
        card = JSON.parse(fs.readFileSync(`./cache/cardApiData/${_.kebabCase(name)}.json`, DEFAULT_FS_READ_ENCODING)) as SdkCard;
    } catch(e) {
        console.log("failed to load card from /cache/cardApiData. Attempting to read interface data...");
        try {
            card = JSON.parse(fs.readFileSync(`./cache/cardInterfaceData/${_.kebabCase(name)}.json`, DEFAULT_FS_READ_ENCODING)) as SdkCard;
        } catch(err) {
            console.log("could not read the file for card " + name, `it may need to be fetched from the API first`);
            throw err;
        }
        return Promise.resolve(card);
    }
    return Promise.resolve(card);
}

// const writeSettings = {
//     encoding: "utf8",
//     flag: "w+",
//     mode: 0o666,
// }

export async function fetchFromApi(name: string): Promise<CardInterface> {
    const apiResult: SdkCard[] = await Cards.where({ name });
    const myCard: SdkCard | undefined = apiResult.find((card, index, arr) => {
        return card.name === name;
    });
    if (_.isUndefined(myCard)) {
        throw new Error("either there is no card with that name or we couldn't reach the API and don't have the card cached locally");
    } else {
        fs.writeFileSync(`cache/cardApiData/${_.kebabCase(myCard.name)}.json`, JSON.stringify(myCard), writeSettings); // , () => ({});
            

        const myObj: CardInterface = {
            name,
            types: myCard.types,
            type: myCard.type,
            manaCost: myCard.manaCost,
            cmc: myCard.cmc,
            colors: myCard.colors
        };
        (myCard.power) ? Object.assign(myObj, { power: myCard.power }) : _.noop();
        (myCard.toughness) ? Object.assign(myObj, { toughness: myCard.toughness }) : _.noop();
        (myCard.loyalty) ? Object.assign(myObj, { loyalty: myCard.loyalty }) : _.noop();

        fs.writeFileSync(`cache/cardInterfaceData/${_.kebabCase(myObj.name)}.json`, JSON.stringify(myObj)); // () => ({}));

        return Promise.resolve(myObj);
    }
        // .then(function(returnedCardArray) {
        //     return returnedCardArray.find((card, index, arr) => {
        //         return card.name === name;
        //     })
        // }, function(promiseRejectionReason) {
        //     console.log("error: rejected promise", promiseRejectionReason);
        // }).catch((rejected) => {
        //     console.error(rejected);
        //     throw new Error("either there is no card with that name or we couldn't reach the API and don't have the card cached locally");
        // });
    
}

export async function buildDeck(importedJson: DecklistEntry[]): Promise<CardInterface[]> {
    const result: CardInterface[] = [];

    for (const card of importedJson) {
        for (let i = 0; i < card.quantity; i++) {
            result.push(await getCard(card.cardName))
        }
    }
    
    return Promise.resolve(result);
}
