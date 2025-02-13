import { Boisson } from "./Boisson.ts";

export class Milkshake extends Boisson {
    constructor() {
        super();
        this.description = "Milkshake";
    }

    cout(): number {
        return 3.20;
    }
}