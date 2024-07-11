// Виды пасты - spagetti/penne/macaroni
// Tags: Union, Enum, Narrowing

enum PastaType {
  spagetti = "spagetti",
  penne = "penne",
  macaroni = "macaroni",
}

interface PizzaProps {
  hasPepperoni: boolean;
  hasSauce: boolean;
  hasCheese: boolean;
  bakeTime: number;
  bake(): void;
}

interface PastaProps {
  pastaType: PastaType;
  hasSauce: boolean;
  hasCheese: boolean;
  cookTime: number;
  cook(): void;
}

interface KitchenIntarface {
  makeDish(dish: PizzaProps | PastaProps): PizzaProps | PastaProps;
}

class Pizza implements PizzaProps {
  hasPepperoni: boolean;
  hasSauce: boolean;
  hasCheese: boolean;
  bakeTime = 30;
  constructor(hasPepperoni: boolean, hasSauce: boolean, hasCheese: boolean) {
    this.hasPepperoni = hasPepperoni;
    this.hasSauce = hasSauce;
    this.hasCheese = hasCheese;
  }
  bake(): void {
    setTimeout(console.log, this.bakeTime, 'Enjoy your pizza!');
  }
}
class Pasta implements PastaProps {
  pastaType: PastaType;
  hasSauce: boolean;
  hasCheese: boolean;
  cookTime = 30;
  constructor(pastaType: PastaType, hasSauce: boolean, hasCheese: boolean) {
    this.pastaType = pastaType;
    this.hasCheese = hasCheese;
    this.hasSauce = hasSauce;
  }
  cook(): void {
    setTimeout(console.log, this.cookTime, 'Enjoy your pasta!');
  }
}
class Kitchen implements KitchenIntarface {
  makeDish(dish: PizzaProps | PastaProps): PizzaProps | PastaProps {
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
const kitchen: KitchenIntarface = new Kitchen();
const pizza: PizzaProps = new Pizza(true, true, false);
const pasta: PastaProps = new Pasta(PastaType.spagetti, true, true);
kitchen.makeDish(pizza);
kitchen.makeDish(pasta);