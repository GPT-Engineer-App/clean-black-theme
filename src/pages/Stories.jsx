import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Stories = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Stories
          </Heading>
          <Text fontSize="lg">
            Read about the journeys of our founders and the impact they are making.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Stories;