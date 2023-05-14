import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import About from "./pages/About";

// import "./index.css";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route path="/about" Component={About} />
            </Routes>
          </div>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
