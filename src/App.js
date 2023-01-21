import { Route, Routes } from "react-router";
import "./App.css";
import FinalScreen from "./pages/FinalScreen/FinalScreen";
import Questions from "./pages/Questions/Questions";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <Routes>
        <Route path="/" element={<Settings />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/finalScore" element={<FinalScreen />} />
      </Routes>
    </div>
  );
}

export default App;
