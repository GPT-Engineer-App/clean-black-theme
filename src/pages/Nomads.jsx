import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Nomads = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Nomads
          </Heading>
          <Text fontSize="lg">
            Discover the stories of our nomadic founders who are making a global impact.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Nomads;