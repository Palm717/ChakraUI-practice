import { Grid, GridItem, Text, Divider, Center } from "@chakra-ui/react";

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
        bgGradient="linear(to-b, pink.100, green.100, pink.100)"
        rowSpan={4}
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
      <GridItem bg="blue" colSpan={2} minH="100%" />
      <GridItem bg="orange" colSpan={2} minH="100%" />
      <GridItem bg="black" colSpan={2} minH="100%" />
      <GridItem bg="red" colSpan={2} minH="100%" />
      <GridItem bg="purple" colStart={4} rowSpan={1} />
    </Grid>
  );
}

export default GridTemplate;
