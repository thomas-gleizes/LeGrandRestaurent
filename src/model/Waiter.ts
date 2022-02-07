class Waiter {
  private _name: string;
  private _salary: number;
  private _turnover: number;

  constructor(name: string, salary: number) {
    this._name = name;
    this._salary = salary;
    this._turnover = 0.0;
  }

  get turnover(): number {
    return this._turnover;
  }

  set turnover(value: number) {
    this._turnover = value;
  }

  public takeOver(amount: number) {
    if (amount > 0) this.turnover += amount;
  }
}

export default Waiter;
