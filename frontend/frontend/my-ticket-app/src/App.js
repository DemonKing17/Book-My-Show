import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegistrationForm from "./component/form/RegistrationForm";
import LoginForm from "./component/form/LoginForm";
import MovieForm from "./component/form/MovieForm";
import TheaterForm from "./component/form/TheaterForm";
import ShowForm from "./component/form/ShowForm";
import MovieList from "./component/Lists/MovieList";
import Navbar from "./component/Navbar/Navbar";
import TheaterList from "./component/Lists/TheaterList";
import ShowList from "./component/Lists/ShowList";
import SeatsList from "./component/Lists/SeatsList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<RegistrationForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/movie/create" element={<MovieForm />}></Route>
        <Route path="/theater/create" element={<TheaterForm />}></Route>
        <Route path="/show/create" element={<ShowForm />}></Route>
        <Route path="/" element={<MovieList />}></Route>
        <Route path="/theaters/:id" element={<TheaterList />}></Route>
        <Route path="/shows/:mid/:tid" element={<ShowList />}></Route>
        <Route path="/seats" element={<SeatsList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
