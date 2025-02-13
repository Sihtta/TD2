import { Boisson } from "./Boisson.ts";

export class Espresso extends Boisson {
    constructor() {
        super();
        this.description = "Espresso";
    }

    cout(): number {
        return 1.99;
    }
}