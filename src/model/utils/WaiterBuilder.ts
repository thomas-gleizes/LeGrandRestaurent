import Waiter from "../Waiter";

class WaiterBuilder {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public build(): Waiter {
    return new Waiter(this._name, 1400);
  }

  public static buildMany(count: number) {
    const builder = new WaiterBuilder("waiter");

    return Array(count)
      .fill(null)
      .map(() => builder.build());
  }
}

export default WaiterBuilder;
