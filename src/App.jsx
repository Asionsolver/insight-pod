import NavBar from "./components/navbar";
import HomePage from "./pages/home-page";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-800">
      <NavBar />
      <div className="">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
