import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    // <BrowserRouter basename="/link-bridge">
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/removingthing" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
