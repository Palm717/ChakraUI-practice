import { SimpleGrid, Box } from "@chakra-ui/react";

function EasyGrid() {
  return (
    <>
      <SimpleGrid columns={2} spacing={5}>
        <Box bg="blue" minH="50vh" />
        <Box bg="green" minH="50vh" />
        <Box bg="yellow" minH="50vh" />
        <Box bg="orange" minH="50vh" />
        <Box bg="blackAlpha.900" minH="50vh" />
        <Box bg="red" minH="50vh" />
      </SimpleGrid>
    </>
  );
}

export default EasyGrid;
