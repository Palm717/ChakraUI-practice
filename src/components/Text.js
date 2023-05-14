import { Text } from "@chakra-ui/react";

function TextTemplate({ text }) {
  return (
    <>
      <Text mt="5px" textAlign="center" style={{ color: fontColors.color[1] }}>
        {text}
      </Text>
    </>
  );
}

export default TextTemplate;
