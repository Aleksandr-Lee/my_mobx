import CounterClass from "./components/CounterClass";
import CounterFunction from "./components/CounterFunction";
import Todo from "./components/Todo";
function App() {
  return (
    <>
      <CounterClass initialCount={5} />
      <CounterFunction initialCount={10} />
      <Todo />
      <Todo />
    </>
  );
}

export default App;
