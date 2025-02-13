import { Boisson } from "./Boisson.ts";

export class The extends Boisson {
    constructor() {
        super();
        this.description = "Thé";
    }

    cout(): number {
        return 1.49;
    }
}