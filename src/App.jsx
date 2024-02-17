import "./App.css";
import User from "./components/User";
import Beer from "./components/Beer";

function App() {
  return (
    <main>
      <h1>Cool Shtuff of the Day 😎</h1>
      <User />
      <div style={{ height: "rem" }} />
      <Beer />
    </main>
  );
}

export default App;
