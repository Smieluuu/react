import "./App.scss";
import Login from "./views/login";
import Panel from "./views/panel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
