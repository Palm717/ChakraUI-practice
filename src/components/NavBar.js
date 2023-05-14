// to eliminate cross Link from packages renamed Link to ChakraLink

import { Box, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { css, keyframes } from "@emotion/react";

const wiggle = keyframes`
  0% { transform: rotate(5deg); }
  33% { transform: rotate(-10deg); }
  66% { transform: rotate(90deg); }
  100% { transform: rotate(5deg); }
`;

function Navigation({ home, about, contact }) {
  return (
    <>
      <Box fontSize={["sm", "md", "lg"]} mb="10px">
        <Flex mb="5px" justifyContent="space-evenly">
          <Text>Hello, World</Text>

          <nav>
            <ul>
              <ChakraLink
                mr="4"
                as={Link}
                to="/"
                transition="all .3s ease"
                _hover={{
                  color: "green.500",
                  fontSize: "24px",
                  animation: `${wiggle} 5.5s linear infinite`,
                  borderTop: "solid 1px",
                  borderBottom: "solid 1px",
                  borderColor: "blue.400",
                  borderRadius: "25%",
                }}
                sx={{ textDecoration: "none" }}
              >
                {home}
              </ChakraLink>
              <ChakraLink
                mr="4"
                as={Link}
                to="/about"
                transition="all .3s ease"
                _hover={{
                  color: "green.500",
                  fontSize: "24px",
                  animation: `${wiggle} 5.5s linear infinite`,
                  borderTop: "solid 1px",
                  borderBottom: "solid 1px",
                  borderColor: "blue.400",
                  borderRadius: "25%",
                }}
                sx={{ textDecoration: "none" }}
              >
                {about}
              </ChakraLink>
              <ChakraLink
                mr="2"
                as={Link}
                to="/contact"
                transition="all .3s ease"
                _hover={{
                  color: "green.500",
                  fontSize: "24px",
                  animation: `${wiggle} 5.5s linear infinite`,
                  borderTop: "solid 1px",
                  borderBottom: "solid 1px",
                  borderColor: "blue.400",
                  borderRadius: "25%",
                }}
                sx={{ textDecoration: "none" }}
              >
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
