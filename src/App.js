import { ShipProvider } from "./context/ShipContext";
import Home from "./pages/home";

function App() {
  return (
    <ShipProvider>
      <div className="min-h-screen pb-12">
        <Home />
      </div>
    </ShipProvider>
  );
}

export default App;
