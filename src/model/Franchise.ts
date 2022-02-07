import Restaurent from "./Restaurent";
import restaurent from "./Restaurent";

class Franchise {
  private _restaurants: Restaurent[];

  constructor(restaurants: Restaurent[]) {
    this._restaurants = restaurants;
  }

  public getTurnover(): number {
    return this._restaurants.reduce(
      (total, restaurent) => restaurent.getTurnover() + total,
      0
    );
  }
}
