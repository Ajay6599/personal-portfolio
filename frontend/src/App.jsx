import { VStack } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Resume } from "./pages/Resume";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { SwitchTheme } from "./components/SwitchTheme";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContextProvider";
import { LightModeBackground } from "./components/LightModeBackground";
import { GsapContext } from "./context/GsapContextProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BinaryMatrixBackground } from "./components/BinaryMatrixBackground";

function App() {

  let { bgTheme, themeMode } = useContext(ThemeContext);
  let { masterTimeline } = useContext(GsapContext);

  const location = useLocation();

  useGSAP(() => {
    let tl = gsap.timeline();
    masterTimeline.current.add(tl);
  }, [location.pathname]);

  return (
    <VStack
      // border='1px solid red'
      bg={themeMode === 'light' ? `linear-gradient(${bgTheme}, hsl(0, 0%, 100%))` : 'linear-gradient(#111, rgba(17, 17, 17, 0.9))'}
      color={themeMode === 'light' ? '#111' : '#fff'}
      h='100vh'
      pb={{base: '60px'}}
      overflowY={{
        base: 'auto'
      }}
      overflowX="hidden"
    >
      {
        themeMode === 'light' ? (
          <LightModeBackground />
        ) : (
          <BinaryMatrixBackground />
        )
      }
      <Navbar isActivePage={location.pathname} />

      <SwitchTheme />

      <Routes >
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Resume />} path="/resume" />
        <Route element={<Portfolio />} path="/portfolio" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </VStack>
  );
}

export default App;
