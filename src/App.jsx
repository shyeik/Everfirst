import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import LoanRequirement from "./LoanRequirement";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      {/* ✅ Header outside Routes — visible on all pages */}
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/requirements" element={<LoanRequirement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
