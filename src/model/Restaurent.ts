import Waiter from "./Waiter";

class Restaurent {
  private _waiters: Waiter[];

  constructor(waiters: Waiter[]) {
    this._waiters = waiters;
  }

  getTurnover(): number {
    return this._waiters.reduce((total, waiter) => waiter.turnover + total, 0);
  }
}

export default Restaurent;
