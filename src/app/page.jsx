"use client";
import Head from "next/head";
import "./Homepage.scss";
import Landing from "./Landing";
import WindowSizeContext from "@/libs/contexts/windowSizeContext";
import useWindowSize from "@/libs/hooks/useWindowSize";
import About from "./About";

const HomePage = () => {
  const windowSize = useWindowSize();

  return (
    <>
      <Head>
        <meta name="title" content="Fadhil's Space" />
        <meta
          name="description"
          content="Fadhil Muhammad Rafi personal spaces, look for Fadhil Muhammad Rafi experiences, projects, and education. Hire Fadhil to help creating your own app"
        />
        <meta
          name="keywords"
          content="Fadhil, Software Engineer, Project, Hire"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Fadhil Muhammad Rafi" />
      </Head>
      <WindowSizeContext.Provider value={windowSize}>
        <Landing />
        <About />
      </WindowSizeContext.Provider>
    </>
  );
};

export default HomePage;
