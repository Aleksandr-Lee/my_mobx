import {
  action,
  makeObservable,
  observable,
  computed,
  //   autorun,
  //   when,
  reaction,
} from "mobx";

class CounterStoreClass {
  count = 0;
  get color() {
    return this.count > 0 ? "green" : this.count < 0 ? "red" : "black";
  }

  constructor() {
    makeObservable(this, {
      count: observable,
      color: computed,
      dec: action,
      inc: action.bound,
    });
    //  makeAutoObservable(this, {
    //    inc: action.bound,
    //  });
    //  autorun(() => console.log(`count: ${this.count}`));
    //  when(() => this.count > 5,() => console.log(">5"));
    const disposer = reaction(
      () => this.count,
      (count, prevCount) => {
        console.log(count, prevCount);
        if (count > 5) {
          disposer();
        }
      }
    );
  }

  dec = () => this.count--;

  inc() {
    this.count++;
  }
}

export default CounterStoreClass;
