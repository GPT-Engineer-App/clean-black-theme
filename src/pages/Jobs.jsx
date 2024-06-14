import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Jobs = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Jobs
          </Heading>
          <Text fontSize="lg">
            Join our team and be part of a mission to support groundbreaking companies.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Jobs;