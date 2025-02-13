import { Espresso } from "./modele/Espresso.ts";
import { The } from "./modele/Thé.ts";
import { Milkshake } from "./modele/Milkshake.ts";
import { Lait } from "./decorateur/Lait.ts";
import { Sucre } from "./decorateur/Sucre.ts";
import { Caramel } from "./decorateur/Caramel.ts";
import { MarshmallowFondu } from "./decorateur/MarshmallowFondu.ts";

let unEspresso = new Espresso();
unEspresso = new Lait(unEspresso);
unEspresso = new Sucre(unEspresso);
unEspresso = new Caramel(unEspresso);

console.log(`Première Boisson : ${unEspresso.getDescription()} : ${unEspresso.cout().toFixed(2)}€`);

let unThe = new The();
unThe = new Caramel(unThe);
unThe = new Lait(unThe);

console.log(`Deuxième Boisson : ${unThe.getDescription()} : ${unThe.cout().toFixed(2)}€`);

let unMilkShake = new Milkshake();
unMilkShake = new MarshmallowFondu(unMilkShake);

console.log(`Troisième Boisson : ${unMilkShake.getDescription()} : ${unMilkShake.cout().toFixed(2)}€`);
