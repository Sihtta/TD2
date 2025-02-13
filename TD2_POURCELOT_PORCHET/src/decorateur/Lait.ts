import { Boisson } from "../modele/Boisson.ts";
import { BoissonDecorateur } from "./BoissonDecorateur.ts";

export class Lait extends BoissonDecorateur {
    constructor(boisson: Boisson) {
        super(boisson);
    }

    getDescription(): string {
        return this.boisson.getDescription() + ", lait";
    }

    cout(): number {
        return this.boisson.cout() + 0.50;
    }
}