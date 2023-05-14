import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function StarWarsCharacter() {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1/")
      .then((response) => response.json())
      .then((responseData) => {
        setCharacter(responseData);
      })
      .catch((error) => {
        console.error("Error fetching character data:", error);
      });
  }, []);

  return (
    <>
      {character ? (
        <>
          <Text>Name: {character.name}</Text>
          <Text>Height: {character.height}</Text>
          <Text>Mass: {character.mass}</Text>
          {/* Render additional character data */}
        </>
      ) : (
        <Text>Loading character data...</Text>
      )}
    </>
  );
}

export default StarWarsCharacter;
