// Виды пасты - spagetti/penne/macaroni
// Tags: Union, Enum, Narrowing

enum PastaType {
  spagetti = "spagetti",
  penne = "penne",
  macaroni = "macaroni",
}

class Pizza {
  hasPepperoni: boolean;
  hasSauce: boolean;
  hasCheese: boolean;
  bakeTime = 30;
  constructor(hasPepperoni: boolean, hasSauce: boolean, hasCheese: boolean) {
    this.hasPepperoni = hasPepperoni;
    this.hasSauce = hasSauce;
    this.hasCheese = hasCheese;
  }
  bake() {
    setTimeout(console.log, this.bakeTime, 'Enjoy your pizza!');
  }
}
class Pasta {
  pastaType;
  hasSauce;
  hasCheese;
  cookTime = 30;
  constructor(pastaType: PastaType, hasSauce: boolean, hasCheese: boolean) {
    this.pastaType = pastaType;
    this.hasCheese = hasCheese;
    this.hasSauce = hasSauce;
  }
  cook() {
    setTimeout(console.log, this.cookTime, 'Enjoy your pasta!');
  }
}
class Kitchen {
  makeDish(dish: Pizza | Pasta) {
    // эту часть надо переделать
    if (dish instanceof Pizza) {
      dish.bake();
      return dish;
    } else if (dish instanceof Pasta) {
      dish.cook();
      return dish;
    }
    throw new Error('Unknown dish');
  }
}
const kitchen = new Kitchen();
const pizza = new Pizza(true, true, false);
const pasta = new Pasta(PastaType.spagetti, true, true);
kitchen.makeDish(pizza);
kitchen.makeDish(pasta);