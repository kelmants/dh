
import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <div>
      <Nav data={["Home", "About", "Contact"]} />
      <section>
        <aside></aside>
        <aside></aside>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
