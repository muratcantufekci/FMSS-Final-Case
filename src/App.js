import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ShipProvider } from "./context/ShipContext";
import Home from "./pages/home";
import ShipDetail from './pages/shipDetail';

function App() {
  return (
    <ShipProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/ship/:id"  element={<ShipDetail />}/>
        </Routes>
      </Router>

    </ShipProvider>
  );
}

export default App;
