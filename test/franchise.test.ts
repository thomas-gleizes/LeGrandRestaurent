import Franchise from "../src/model/Franchise";
import WaiterBuilder from "../src/model/utils/WaiterBuilder";
import Waiter from "../src/model/Waiter";
import Restaurent from "../src/model/Restaurent";

describe("test franchise", () => {
  it("should have correct turnover", () => {
    const listWaitersofWaiters: Array<Array<Waiter>> = [];
    const restaurents: Array<Restaurent> = [];

    for (let i = 0; i++; i < 4) {
      const waiters = WaiterBuilder.buildMany(
        Math.floor(Math.random() * 8 + 2)
      );

      listWaitersofWaiters.push(waiters);
      restaurents.push(new Restaurent(waiters));
    }

    const franchise = new Franchise(restaurents);

    let total: number = 0;

    for (const waiters of listWaitersofWaiters) {
      for (const waiter of waiters) {
        const amount = Math.floor(Math.random() * 40 + 10);

        total += amount;
        waiter.takeOver(amount);
      }
    }

    expect(franchise.getTurnover()).toEqual(total);
  });
});
