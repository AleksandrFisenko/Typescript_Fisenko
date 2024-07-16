// Tags: Generic, Enum ('small' | 'large' | 'medium'), Union, Interface, implements

enum Size {
  small = 'small',
  large = 'large',
  medium = 'medium'
}

interface ShopInterface<T, U> {
  items: Product<T, U>[];
  addGood(item: Product<T, U>): number;
}

class Shop<T, U> implements ShopInterface<T, U> {
  items: Product<T, U>[] = new Array<Product<T, U>>;

  addGood(item: Product<T, U>): number {
    return this.items.push(item);
  }

  get goods() {
    return this.items;
  }
}

interface Product<T, U> {
  name: string;
  price: T;
  discount: U;
}

class BaseProduct<T, U> implements Product<T, U> {
  name: string;

  price: T;

  discount: U;

  constructor(name: string, price: T, discount: U) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  }
}

class Banana<T, U> extends BaseProduct<T, U> {
  size: Size;

  constructor(price: T, discount: U, size: Size) {
    super('banan', price, discount);
    this.size = size;
  }
}

class IceCream<T, U> extends BaseProduct<T, U> {
  withGlace: boolean;

  constructor(price: T, discount: U, withGlace: boolean) {
    super('iceCream', price, discount);
    this.withGlace = withGlace;
  }
}

const shop = new Shop();

const iceCream = new IceCream(10, 0, true);
const banana = new Banana(5, 0.1, Size.small);
const banana2 = new Banana('5 000 000 bucks', 0.1, Size.large);
const banana3 = new Banana(66, '50%', Size.medium);

shop.addGood(iceCream);
shop.addGood(banana);
shop.addGood(banana2);
shop.addGood(banana3);

console.log(shop.goods);