export function nextStepOrPhase(phase: string, step: string): string[] {
    switch(phase) {
        case "Beginning":
            if (step === "Untap") {
                return ["Beginning", "Upkeep"];
            } else if (step === "Upkeep") {
                return ["Beginning", "Draw Step"];
            } else if (step === "Draw Step") {
                return ["Precombat Main"];
            } else {
                throw new Error(`did not recognize step ${step}`);
            }
        case "Precombat Main":
            return ["Combat", "Begin Combat"];
        case "Combat":
            switch(step) {
                case "Begin Combat":
                    return ["Combat", "Declare Attackers"];
                case "Declare Attackers":
                    return ["Combat", "Declare Blockers"];
                case "Declare Blockers":
                    return ["Combat", "Combat Damage"];
                case "Combat Damage":
                    return ["Combat", "End of Combat"];
                case "End of Combat":
                    return ["Postcombat Main"];
                default:
                    throw new Error(`did not recognize step ${step}`);
            }
        case "Postcombat Main":
            return ["Ending", "End Step"];
        case "Ending":
            if (step === "End Step") {
                return ["Ending", "Cleanup"];
            } else if (step === "Cleanup") {
                return ["Beginning", "Untap"];
            } else {
                throw new Error(`did not recognize step ${step}`);
            }
        default:
            throw new Error(`did not recognize phase ${phase}`);
    }
}
