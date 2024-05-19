import Head from "next/head";
import React from "react";
import { Frame_112 } from "../components/Frame_112";
import { Frame_113 } from "../components/Frame_113";
import { Frame_120 } from "../components/Frame_120";
import { Frame_122 } from "../components/Frame_122";
import { Frame_124 } from "../components/Frame_124";;

const SandboxHome = () => (
  <>
    <Head>
      <title>Vivid Test</title>
      <link href="/favicon.ico" rel="icon" />
    </Head>
    <div
      style={{
        backgroundColor: "rgb(33, 33, 35)",
        color: "#fafafa",
        height: "fit-content",
        minHeight: "100vh",
        width: "fit-content",
        minWidth: "100vw",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* Vivid-generated components */}
      <Frame_112 override={{ resize: "both", overflow: "hidden" }} />
      <Frame_113 override={{ resize: "both", overflow: "hidden" }} />
      <Frame_120 override={{ resize: "both", overflow: "hidden" }} />
      <Frame_122 override={{ resize: "both", overflow: "hidden" }} />
      <Frame_124 override={{ resize: "both", overflow: "hidden" }} />
    </div>
  </>
);

export default SandboxHome;
