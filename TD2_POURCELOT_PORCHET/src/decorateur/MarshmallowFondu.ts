import { Boisson } from "../modele/Boisson.ts";
import { BoissonDecorateur } from "./BoissonDecorateur.ts";

export class MarshmallowFondu extends BoissonDecorateur {
    constructor(boisson: Boisson) {
        super(boisson);
    }

    getDescription(): string {
        return this.boisson.getDescription() + ", marshmallow fondu";
    }

    cout(): number {
        return this.boisson.cout() + 1.5;
    }
}