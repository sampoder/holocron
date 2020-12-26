import Head from "next/head";
import dynamic from "next/dynamic";
const Holocron = dynamic(() => import("@sampoder/holocron"), {
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
      title={<h1 style={{color: "white"}}>The Hello World!</h1>}
      backgroundColor="#00FF00"
      launch={<button style={{color: "white"}}>►</button>}
      fullscreen={<button style={{color: "white"}}>☒</button>}
    >
      <p style={{color: "white"}}>Sam</p>
    </Holocron>
  );
}
