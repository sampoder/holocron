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

export default function Home() {
  return (
    <Holocron
      launch={<Button>Launch</Button>}
      fullscreen={<Button>Fullscreen</Button>}
    >
      <Text color="white">Sam</Text>
      <Button>Sammm</Button>
    </Holocron>
  );
}
