import { VStack } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Resume } from "./pages/Resume";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { SwitchTheme } from "./components/SwitchTheme";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContextProvider";

function App() {

  let { bgTheme, themeMode } = useContext(ThemeContext);

  return (
    <VStack
      // border='1px solid red'
      // transition='all 0.3s ease-in-out'
      bg={themeMode === 'light' ? `linear-gradient(${bgTheme}, hsl(0, 0%, 100%))` : 'linear-gradient(#111, rgba(17, 17, 17, 0.9))'}
      color={themeMode === 'light' ? '#111' : '#fff'}
      h='100vh'
      pb={{base: '60px'}}
      overflowY={{
        base: 'auto'
      }}
    >
      <SwitchTheme />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Resume />} path="/resume" />
        <Route element={<Portfolio />} path="/portfolio" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
      <Navbar />
    </VStack>
  );
}

export default App;
