import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import LoanRequirement from "./LoanRequirement";
import Header from "./Header";
import LoanComputation from "./LoanComputation";
import { Contact } from "lucide-react";
import Information from "./Information";
import ContactPage from "./ContactPage";
import LoanInfo from "./LoanInfo";
function App() {
  return (
    <BrowserRouter>
      {/* ✅ Header outside Routes — visible on all pages */}
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/requirements" element={<LoanRequirement />} />
        <Route path="/computation" element={<LoanComputation />} />
        <Route path="/info" element={<LoanInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
