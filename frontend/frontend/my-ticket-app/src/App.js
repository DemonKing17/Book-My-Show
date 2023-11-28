import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegistrationForm from "./component/form/RegistrationForm";
import LoginForm from "./component/form/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegistrationForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
