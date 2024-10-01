import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import './styles/global.css'
import FooterComponent from "./components/Footer/Footer";

function App() {
    return(
    <>
        <Header />
        <Hero />
        <Benefits />
        <FooterComponent/>
    </>
    );
};

export default App