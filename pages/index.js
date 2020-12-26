import Head from "next/head";
import {
  Box,
  Grid,
  Flex,
  Center,
  Square,
  Text,
  IconButton,
} from "@chakra-ui/react";

import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@chakra-ui/icons";

export default function Home() {
  return (
    <Box>
      <Flex h="100vh" overflow="hidden">
        <Box w="30%" h="100vh" bg="blue.500" />
        <Box w="70%" h="100vh" bg="blue.500" p={1}>
          <Box w="100%" h="100%" bg="black" borderRadius={3}>
            <Flex>
              <Center w="10px" minHeight="calc(100vh - 0.5rem)">
                <Box display="grid">
                  <IconButton
                    mb={3}
                    aria-label="Expand Left"
                    icon={<ArrowBackIcon />}
                  />
                  <IconButton
                    aria-label="Expand Left"
                    icon={<ArrowForwardIcon />}
                  />
                </Box>
              </Center>
              <Box flex="1">
                <Box
                  flex="1"
                  h="10px"
                  align="center"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box mt="-15px">
                    <IconButton
                      mr={3}
                      aria-label="Expand Up"
                      icon={<ArrowUpIcon />}
                    />
                    <IconButton
                      aria-label="Expand Down"
                      icon={<ArrowDownIcon />}
                    />
                  </Box>
                </Box>
                <Box flex="1" mt="10px" h="calc(100vh - 0.5rem  - 25px)"></Box>
                <Box
                  flex="1"
                  mb="20px"
                  h="10px"
                  align="center"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box mb="30px">
                    <IconButton
                      mr={3}
                      aria-label="Expand Up"
                      icon={<ArrowUpIcon />}
                    />
                    <IconButton
                      aria-label="Expand Down"
                      icon={<ArrowDownIcon />}
                    />
                  </Box>
                </Box>
              </Box>
              <Center w="10px" minHeight="calc(100vh - 0.5rem)">
                <Box display="grid">
                  <IconButton
                    mb={3}
                    aria-label="Expand Left"
                    icon={<ArrowBackIcon />}
                  />
                  <IconButton
                    aria-label="Expand Left"
                    icon={<ArrowForwardIcon />}
                  />
                </Box>
              </Center>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
