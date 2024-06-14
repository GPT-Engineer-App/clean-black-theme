import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Portfolio
          </Heading>
          <Text fontSize="lg">
            Our portfolio showcases the groundbreaking companies we have partnered with.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Portfolio;