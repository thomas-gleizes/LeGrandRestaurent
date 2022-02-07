import Restaurent from "../Restaurent";
import WaiterBuilder from "./WaiterBuilder";

class RestaurentBuilder {
  private _numberOfWaiters: number;

  constructor(number: number) {
    this._numberOfWaiters = number;
  }

  public build() {
    return new Restaurent(WaiterBuilder.buildMany(this._numberOfWaiters));
  }

  public static buildMany(count: number) {
    const builder = new RestaurentBuilder(count);

    return Array(count)
      .fill(null)
      .map(() => builder.build());
  }
}

export default RestaurentBuilder;
