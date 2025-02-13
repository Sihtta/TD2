import { Boisson } from "../modele/Boisson.ts";

export abstract class BoissonDecorateur extends Boisson {
    protected boisson: Boisson;

    constructor(boisson: Boisson) {
        super();
        this.boisson = boisson;
    }

    abstract getDescription(): string;
}
