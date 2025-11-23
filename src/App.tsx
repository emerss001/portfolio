import "./App.css";
import Contacts from "./components/contatcs";
import { Experiences } from "./components/experiences";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Services from "./components/services";

function App() {
    return (
        <>
            <Intro />
            <Experiences />
            <Projects />
            <Services />
            <Contacts />
        </>
    );
}

export default App;
