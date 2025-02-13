import { Boisson } from "../modele/Boisson.ts";
import { BoissonDecorateur } from "./BoissonDecorateur.ts";

export class Caramel extends BoissonDecorateur {
    constructor(boisson: Boisson) {
        super(boisson);
    }

    getDescription(): string {
        return this.boisson.getDescription() + ", caramel";
    }

    cout(): number {
        return this.boisson.cout() + 0.70;
    }
}