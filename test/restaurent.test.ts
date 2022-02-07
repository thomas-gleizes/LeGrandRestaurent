import Restaurent from "../src/model/Restaurent";
import WaiterBuilder from "../src/model/utils/WaiterBuilder";

describe("test restaurent", () => {
  it("should take right turnover", () => {
    const waiters = WaiterBuilder.buildMany(4);
    const restaurent = new Restaurent(waiters);

    let totalAmount: number = 0;

    for (const waiter of waiters) {
      const amount: number = Math.floor(Math.random() * 10);

      totalAmount += amount;
      waiter.takeOver(amount);
    }

    expect(restaurent.getTurnover()).toEqual(totalAmount);
  });
});
