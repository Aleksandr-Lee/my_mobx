import { makeObservable, observable, action, computed } from "mobx";

function CounterStoreFunction() {
  return makeObservable(
    {
      count: 0,
      get color() {
        return this.count > 0 ? "green" : this.count < 0 ? "red" : "black";
      },
      dec() {
        this.count--;
      },
      inc() {
        this.count++;
      },
    },
    {
      count: observable,
      color: computed,
      dec: action.bound,
      inc: action.bound,
    }
  );
}

export default CounterStoreFunction;
