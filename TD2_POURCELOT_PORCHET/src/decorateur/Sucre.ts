import { Boisson } from "../modele/Boisson.ts";
import { BoissonDecorateur } from "./BoissonDecorateur.ts";

export class Sucre extends BoissonDecorateur {
    constructor(boisson: Boisson) {
        super(boisson);
    }

    getDescription(): string {
        return this.boisson.getDescription() + ", sucre";
    }

    cout(): number {
        return this.boisson.cout() + 0.20;
    }
}
