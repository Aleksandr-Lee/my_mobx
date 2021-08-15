import React, { Component } from "react";
import { observer } from "mobx-react";
import { runInAction } from "mobx";
import CounterStoreClass from "../stores/CounterStoreClass";

const store = new CounterStoreClass();
const CounterClass = observer(
  class extends Component {
    componentDidMount() {
      runInAction(() => {
        store.count = this.props.initialCount ?? 0;
      });
    }
    render() {
      return (
        <div>
          <button onClick={store.dec}>-</button>
          <span style={{ color: store.color }}>{store.count}</span>
          <button onClick={store.inc}>+</button>
        </div>
      );
    }
  }
);

export default CounterClass;

// import React, { Component } from "react";
// import { observer } from "mobx-react";
// import { action, makeObservable, observable, computed } from "mobx";

// const CounterClass = observer(
//   class extends Component {
//     count = 0;
//     get color() {
//       return this.count > 0 ? "green" : this.count < 0 ? "red" : "back";
//     }
//     constructor(props) {
//       super(props);
//       makeObservable(this, {
//         count: observable,
//         color: computed,
//         dec: action,
//         inc: action.bound,
//       });
//       this.count = this.props.initialCount ?? 0;
//     }
//     render() {
//       return (
//         <div>
//           <button onClick={this.dec}>-</button>
//           <span style={{color:this.color}}>{this.count}</span>
//           <button onClick={this.inc}>+</button>
//         </div>
//       );
//     }

//     dec = () => this.count--;

//     inc() {
//       this.count++;
//     }
//   }
// );

// export default CounterClass;

// import React, { Component } from "react";

// export default class CounterClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: this.props.initialCount ?? 0,
//     };
//     this.inc = this.inc.bind(this);
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.dec}>-</button>
//         <span>{this.state.count}</span>
//         <button onClick={this.inc}>+</button>
//       </div>
//     );
//   }

//   dec = () =>
//     this.setState((prevState) => ({
//       count: prevState.count - 1,
//     }));
//   inc() {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   }
// }
