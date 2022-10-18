import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SingleCocktail from "./Pages/SingleCocktail";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cocktail/:id" element={<SingleCocktail />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
