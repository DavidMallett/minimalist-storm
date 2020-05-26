import { GameObj, GameObjConfig } from "./gameObj";

export class Land extends GameObj {
    
    private tapped: boolean;

    public constructor(config: GameObjConfig, tapsFor?: string[], entersTapped: boolean = false) {
        super(config);
        
    }

}

