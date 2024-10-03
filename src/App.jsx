import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Benefits from './components/Benefits/Benefits';
import FooterComponent from './components/Footer/Footer';
import Features from './components/Features/Features';
import FeedbackSlider from './components/Feedbacks/Feedbacks';
import ContactForm from './components/Contact/Contact';
import './styles/global.css'

function App() {
    return(
    <>
        <Header />
            <Hero />
            <Benefits />
            <Features />
            <FeedbackSlider />
            <ContactForm />
        <FooterComponent/>
    </>
    );
};

export default App