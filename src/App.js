import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/_error";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import styled from "styled-components";
import { DataConsumer } from "./context";

function App() {
  return (
    <DataConsumer>
      {value => {
        const { navOpen, handleNav } = value;
        return (
          <>
            <Navbar />
            <Main view={navOpen}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/portfolio" exact component={Portfolio} />

                <Route path="" component={NotFound} />
              </Switch>
            </Main>
          </>
        );
      }}
    </DataConsumer>
  );
}
const Main = styled.div`
transition: 0.6s all ease-out;
  opacity: ${props => (props.view ? "0" : "1")}
`;
export default App;
