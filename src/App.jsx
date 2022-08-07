import Catalog from "./components/catalog/Catalog";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./app.scss";



function App() {
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      {/* <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      <Navbar />
      <div className="sections">
        <Hero />
        <Catalog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
