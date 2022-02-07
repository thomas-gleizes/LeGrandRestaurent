import WaiterBuilder from "../src/model/utils/WaiterBuilder";

describe("test waiter", () => {
  const builder = new WaiterBuilder("John Doe");

  it("should get turnover", () => {
    const waiter = builder.build();

    expect(waiter.turnover).toEqual(0);
  });

  it("should take order", () => {
    const waiter = builder.build();
    const value = 10;

    waiter.takeOver(value);

    expect(waiter.turnover).toEqual(value);
  });

  it("should take order with negative amount", () => {
    const waiter = builder.build();
    const value = -10;

    waiter.takeOver(value);

    expect(waiter.turnover).toEqual(0);
  });

  it("should take two order", () => {
    const waiter = builder.build();
    const firstValue = 32;
    const secondValue = 23;

    waiter.takeOver(firstValue);
    waiter.takeOver(secondValue);

    expect(waiter.turnover).toEqual(firstValue + secondValue);
  });
});
