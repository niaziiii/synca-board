import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import SalesHandOff from "./pages/saleshandoff";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/saleshandoff" element={<SalesHandOff />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
