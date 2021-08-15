// import React from "react";
// import { observer, useLocalObservable, Observer } from "mobx-react";

// const CounterFunction = (props) => {
//   const store = useLocalObservable(() => {
//     return {
//       count: props.initialCount ?? 0,
//       dec() {
//         this.count--;
//       },
//       inc() {
//         this.count++;
//       },
//     };
//   });
//   return (
//     <div>
//       <button onClick={store.dec}>-</button>
//       <Observer>{() => <span>{store.count}</span>}</Observer>
//       <button onClick={store.inc}>+</button>
//     </div>
//   );
// };

// export default CounterFunction;

import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { runInAction } from "mobx";
import CounterStoreFunction from "../stores/CounterStoreFunction";

const store = CounterStoreFunction();

const CounterFunction = observer((props) => {
  useEffect(() => {
    runInAction(() => {
      store.count = props.initialCount ?? 0;
    });
  }, [props.initialCount]);
  return (
    <div>
      <button onClick={store.dec}>-</button>
      <span style={{ color: store.color }}>{store.count}</span>
      <button onClick={store.inc}>+</button>
    </div>
  );
});

export default CounterFunction;

// import React from "react";
// import { observer, useLocalObservable } from "mobx-react";

// const CounterFunction = observer((props) => {
//   const store = useLocalObservable(() => {
//     return {
//       count: props.initialCount ?? 0,
//       get color() {
//         return this.count > 0 ? "green" : this.count < 0 ? "red" : "back";
//       },
//       dec() {
//         this.count--;
//       },
//       inc() {
//         this.count++;
//       },
//     };
//   });
//   return (
//     <div>
//       <button onClick={store.dec}>-</button>
//       <span style={{ color: store.color }}>{store.count}</span>
//       <button onClick={store.inc}>+</button>
//     </div>
//   );
// });

// export default CounterFunction;

// import React, { useState } from "react";

// function CounterFunction(props) {
//   const [count, setCount] = useState(props.initialCount ?? 0);
//   const dec = () => setCount((prevCount) => prevCount - 1);
//   const inc = () => setCount((prevCount) => prevCount + 1);
//   return (
//     <div>
//       <button onClick={dec}>-</button>
//       <span>{count}</span>
//       <button onClick={inc}>+</button>
//     </div>
//   );
// }

// export default CounterFunction;
