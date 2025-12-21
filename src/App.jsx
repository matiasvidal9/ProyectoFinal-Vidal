import "./css/NavBar.css";
import "./css/CartWidget.css";
import"./css/ItemListContainer.css";
import "./css/Hero.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import heroImg from "./assets/heroImg.png"; 
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      
      {/* Sección Hero inspirada en Marion */}
      <div className="hero-section">
        <img src={heroImg} alt="LOOk Fashion Collection" className="hero-image" />
        <div className="hero-overlay">
          <ItemListContainer greeting="New Arrivals: Season 2025" />
        </div>
      </div>
    </div>
  );
}

export default App;
