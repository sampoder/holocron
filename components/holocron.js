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

import React, { useCallback, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function Home() {
  function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }
  const handle = useFullScreenHandle();

  const [up, setUp] = useStickyState(0, "holocronUpValue");
  const [down, setDown] = useStickyState(0, "holocronUP");
  const [left, setLeft] = useStickyState(30, "holocronLeftValue");
  const [right, setRight] = useStickyState(0, "holocronUP");

  return (
    <FullScreen handle={handle}>
      <Box>
        <Flex h="100vh" overflow="hidden">
          <Box w={`${left}%`} h="100vh" bg="blue.500">
            <button onClick={handle.enter}>Enter fullscreen</button>
          </Box>
          <Box w={`${100 - left}%`} h="100vh" bg="blue.500" p={1}>
            <Box w="100%" h="100%" bg="black" borderRadius={3}>
              <Flex>
                <Center w="10px" minHeight="calc(100vh - 0.5rem)">
                  <Box display="grid">
                    <IconButton
                      mb={3}
                      onClick={() => setLeft(left - 1)}
                      aria-label="Expand Left"
                      icon={<ArrowBackIcon />}
                    />
                    <IconButton
                      onClick={() => setLeft(left + 1)}
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
                  <Box
                    flex="1"
                    mt="10px"
                    h="calc(100vh - 0.5rem  - 25px)"
                  ></Box>
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
    </FullScreen>
  );
}
