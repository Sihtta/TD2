export abstract class Boisson {
    protected description: string = "Boisson inconnue";

    getDescription(): string {
        return this.description;
    }

    abstract cout(): number;
}