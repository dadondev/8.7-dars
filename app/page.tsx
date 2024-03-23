"use client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./general/utils/GlobalStyle";
import theme from "./general/utils/theme";
import Header from "./components/Header";
import Main from "./components/Main";
import Ads from "./components/Ads";
import About from "./components/About";
import SliderContainer from "./components/SliderContainer";

const page = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
        <Ads />
        <About />
        <SliderContainer />
      </ThemeProvider>
    </>
  );
};

export default page;
