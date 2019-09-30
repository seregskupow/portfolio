import React, { useState } from "react";
import { DiAtom } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { DataConsumer } from "../context";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import Navigation from './Navigation'

export default function Navbar() {
  const [scroll, isScroll] = useState(false);
  const scrollFunction = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      isScroll(true)
    } else {
      isScroll(false)
    }
  }
  return (
    <DataConsumer>
      {value => {
        const { navOpen, closeNav, handleNav } = value;
        window.onscroll = () => { scrollFunction() }
        // style={{background:`${scroll?"":""}`}}
        return (
          <nav className="navig pb-3" >
            <NavBar height={navOpen} className="nav-center mx-auto">
              <div className="icon">
                <Link to={"/"} onClick={closeNav}><DiAtom /></Link>
              </div>
              <div className="icon">
                <FaBars onClick={handleNav} />
              </div>
            </NavBar>
            <Navigation prop={navOpen} />
          </nav>
        );
      }}
    </DataConsumer>
  );
}
const NavBar = styled.div`
transition: .5s all ease;
padding-bottom:${props => props.height ? "91vh" : ""}`;
