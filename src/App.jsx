import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import SalesHandOff from "./pages/saleshandoff";
import ResponsiveDrawer from "./components/layout";
import SalesRoom from "./pages/salesroom";
import OnBoarding from "./pages/onboarding";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <Router>
        <ResponsiveDrawer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/saleshandoff/:id" element={<SalesHandOff />} />
            <Route path="/salesroom/:id" element={<SalesRoom />} />
            <Route path="/onboarding/:id" element={<OnBoarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </ResponsiveDrawer>
      </Router>
    </>
  );
}

export default App;
