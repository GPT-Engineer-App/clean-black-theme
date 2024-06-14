import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Team = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Meet the Team
          </Heading>
          <Text fontSize="lg">
            Our team is composed of experienced professionals dedicated to supporting our founders.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Team;