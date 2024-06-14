import { Box, Flex, Link, useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav" bg={colorMode === "light" ? "gray.100" : "gray.900"} px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
            Hummingbird
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/portfolio" mx={2}>
            Portfolio
          </Link>
          <Link as={RouterLink} to="/team" mx={2}>
            Team
          </Link>
          <Link as={RouterLink} to="/philosophy" mx={2}>
            Philosophy
          </Link>
          <Link as={RouterLink} to="/stories" mx={2}>
            Stories
          </Link>
          <Link as={RouterLink} to="/jobs" mx={2}>
            Jobs
          </Link>
          <Link as={RouterLink} to="/nomads" mx={2}>
            Nomads
          </Link>
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            ml={4}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;