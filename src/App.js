import "./App.css";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailsPage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/employee/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
