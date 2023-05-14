import EasyGrid from "../components/SimpleGrid";
import Navigation from "../components/NavBar";

function About() {
  return (
    <>
      <header>
        <Navigation home="home" contact="contact" />
      </header>
      <main>
        <EasyGrid />
      </main>
    </>
  );
}

export default About;
