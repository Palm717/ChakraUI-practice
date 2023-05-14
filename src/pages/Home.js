import Navigation from "../components/NavBar";
import GridTemplate from "../components/Grid";

function Home() {
  return (
    <>
      <header>
        <Navigation m="4px" home="home" about="about" contact="contact" />
      </header>
      <main>
        <GridTemplate
          text="Getting to know React and some Chakra UI front end skills"
          secondaryText="testing, 123"
        />
      </main>
    </>
  );
}

export default Home;
