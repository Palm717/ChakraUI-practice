// to eliminate cross Link from packages renamed Link to ChakraLink

import { Box, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navigation({ home, about, contact }) {
  return (
    <>
      <Box fontSize="20px" mb="10px" borderBottom="1px">
        <Flex mb="5px" justifyContent="space-between">
          <Text>Hello, World</Text>

          <nav>
            <ul>
              <ChakraLink mr="4" as={Link} to="/">
                {home}
              </ChakraLink>
              <ChakraLink mr="4" as={Link} to="/about">
                {about}
              </ChakraLink>
              <ChakraLink mr="2" as={Link} to="/contact">
                {contact}
              </ChakraLink>
            </ul>
          </nav>
        </Flex>
      </Box>
    </>
  );
}

export default Navigation;
