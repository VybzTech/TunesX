import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className="flex">
        <Navbar />
        <Body />
      </main>
    </>
  );
}

export default App;
