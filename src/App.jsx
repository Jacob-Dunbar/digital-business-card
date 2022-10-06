import MyFace from "./assets/myface.jpg";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="app">
      <img className="hero" src={MyFace} alt="" />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
