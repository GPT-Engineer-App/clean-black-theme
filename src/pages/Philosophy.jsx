import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Philosophy = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Our Philosophy
          </Heading>
          <Text fontSize="lg">
            We believe in backing founders with deep conviction and providing low friction partnerships.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Philosophy;