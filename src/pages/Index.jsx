import { Box, Container, Heading, Text, VStack, SimpleGrid, GridItem, Flex, Link, useColorMode } from "@chakra-ui/react";

const Index = () => {
  const { colorMode } = useColorMode();

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            BACKING FOUNDERS ON A MISSION TO PROVE OTHERS WRONG.
          </Heading>
          <Text fontSize="lg">
            We are global soul investors, looking for outlier founders. We believe groundbreaking companies are built by a rare breed of entrepreneur.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <GridItem>
            <Heading as="h2" size="lg" mb={4}>
              Deep conviction from day one.
            </Heading>
            <Text>BillionToOne is a precision diagnostics company that uses proprietary molecular counting technology for disease detection, offering non-invasive prenatal testing and liquid biopsies.</Text>
          </GridItem>
          <GridItem>
            <Heading as="h2" size="lg" mb={4}>
              Low friction partners.
            </Heading>
            <Text>Kraken is one of the largest and most trusted cryptocurrency exchanges globally, offering spot and futures trading and staking services for over 40 digital assets.</Text>
          </GridItem>
          <GridItem>
            <Heading as="h2" size="lg" mb={4}>
              Looking beyond industry conventions.
            </Heading>
            <Text>Pristyn Care is building an healthcare delivery marketplace for elective surgeries in India.</Text>
          </GridItem>
        </SimpleGrid>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            WE STICK UP FOR OUR FOUNDERS WITH RADICAL CANDOR WHEN TIMES ARE TOUGH.
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
            <GridItem>
              <Text>> $10 M Ticket</Text>
              <Text>Brigit - Fintech, North America</Text>
            </GridItem>
            <GridItem>
              <Text>Peak Games - Gaming, EMEA</Text>
              <Text>Kraken - Fintech, North America</Text>
            </GridItem>
            <GridItem>
              <Text>Deliveroo - Marketplaces, EMEA</Text>
              <Text>Automata - Deep Tech, EMEA</Text>
              <Text>Enveda Biosciences - Biotech, North America</Text>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            We are global.
          </Heading>
          <Text>Portfolio distribution by Region, Sector, and First Partnered</Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
            <GridItem>
              <Text>South America</Text>
            </GridItem>
            <GridItem>
              <Text>APAC</Text>
            </GridItem>
            <GridItem>
              <Text>South America</Text>
            </GridItem>
            <GridItem>
              <Text>EMEA</Text>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;