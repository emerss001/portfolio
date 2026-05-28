import "./App.css";
import Contacts from "./components/contatcs";
import { Education } from "./components/education";
import { Experiences } from "./components/experiences";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Services from "./components/services";

function App() {
    return (
        <>
            <Intro />
            <Experiences />
            <Education />
            <Projects />
            <Services />
            <Contacts />
        </>
    );
}

export default App;
