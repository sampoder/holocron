import Head from "next/head";
import dynamic from "next/dynamic";
const Holocron = dynamic(() => import("../components/holocron"), {
  ssr: false,
});

import {
  Box,
  Grid,
  Button,
  Flex,
  Center,
  Heading,
  Square,
  Text,
  IconButton,
} from "@chakra-ui/react";

import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowDownIcon,
  ViewIcon,
  ArrowUpIcon,
} from "@chakra-ui/icons";

export default function Home() {
  return (
    <Holocron
      launch={<Button>Fullscreen</Button>}
      fullscreen={<Button>Fullscreen</Button>}
      title={<Heading color="white">The Hello World!</Heading>}
      backgroundColor="#00FF00"
    >
      <Text color="white">Hello World</Text>
    </Holocron>
  );
}
