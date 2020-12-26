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
    <Holocron
      launch={<Button>►</Button>}
      fullscreen={<Button>☒</Button>}
    >
      <Text color="white">Sam</Text>
      <Button>Sammm</Button>
    </Holocron>
  );
}
