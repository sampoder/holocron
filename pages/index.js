import Head from "next/head";
import dynamic from "next/dynamic";
const Holocron = dynamic(() => import("../components/holocron"), {
  ssr: false,
});

export default function Home() {
  return <Holocron />;
}
