// Tags: Union, Enum, Narrowing
// Виды пасты - spaghetti/penne/macaroni

enum PastaType {
  spaghetti = 'spaghetti',
  penne = 'penne',
  macaroni = ''
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
  pastaType: PastaType;

  hasSauce: boolean;

  hasCheese: boolean;

  cookTime: number = 30;

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
  makeDish(dish: Pasta | Pizza): Pizza | Pasta | never {
      if (dish instanceof Pasta) {
          dish.cook();
          return dish;
      } else if (dish instanceof Pizza) {
          dish.bake();
          return dish;
      }
      throw new Error('Unknown dish');
  }
}

const kitchen: Kitchen = new Kitchen();
const pizza: Pizza = new Pizza(true, true, false);
const pasta: Pasta = new Pasta(PastaType.spaghetti, true, true);

kitchen.makeDish(pizza);
kitchen.makeDish(pasta);