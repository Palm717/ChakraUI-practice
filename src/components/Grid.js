import { Grid, GridItem, Text, Divider, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import StarWarsCharacter from "./Characters";

function GridTemplate({ text, secondaryText }) {
  const fontColors = {
    color: ["teal", "orange"],
  };

  return (
    <Grid
      minHeight="100vh" // Set minHeight to 100vh (100% of the viewport height)
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
    >
      <GridItem
        bgGradient="linear(to-b, whiteAlpha.100, green.100, whiteAlpha.100)"
        rowStart={2}
        rowEnd={4}
        colSpan={1}
        minH="100%"
      >
        <Text style={{ color: fontColors.color[0] }} m="auto" pt="10px">
          {text}
        </Text>
        <Divider orientation="horizontal" />
        <Text style={{ color: fontColors.color[1] }} mt="20px">
          {secondaryText}
        </Text>
      </GridItem>
      <GridItem colStart={2} colEnd={4} minH="100%">
        <Divider />

        <Text
          mt="5px"
          textAlign="center"
          style={{ color: fontColors.color[1] }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          illo rerum nostrum, quos voluptates autem. Et odio, accusamus
          repudiandae illum quas inventore saepe, porro, autem repellat minus
          delectus voluptatum nemo.
        </Text>
      </GridItem>
      <GridItem colSpan={3} minH="100%">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          temporibus magni fugit voluptates sed? Atque nisi in vero laborum eum
          provident eveniet quos libero ullam suscipit, deleniti molestias
          voluptates quod!
        </Text>
      </GridItem>
      <GridItem colSpan={2} minH="100%">
        <Text style={{ color: fontColors.color[0] }}>
          <StarWarsCharacter />
        </Text>
      </GridItem>
      <GridItem colStart={2} colEnd={4} minH="100%" />
    </Grid>
  );
}

export default GridTemplate;
