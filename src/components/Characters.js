import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

function StarWarsCharacter() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        const firstTenCharacters = response.data.results.slice(0, 5);
        setCharacters(firstTenCharacters);
      })
      .catch((error) => {
        console.error("Error fetching character data:", error);
      });
  }, []);

  return (
    <>
      {characters.length > 0 ? (
        characters.map((character, index) => (
          <div key={index}>
            <Text>{character.name}</Text>
          </div>
        ))
      ) : (
        <Text>Loading character data...</Text>
      )}
    </>
  );
}

export default StarWarsCharacter;
