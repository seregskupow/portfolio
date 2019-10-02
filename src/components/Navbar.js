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
              <div className="icon d-flex justify-content-center align-items-center">
                <Link to={"/"} onClick={closeNav}><DiAtom className="hover atom-hover" />

                </Link>
                <div className="btn-group d-flex ml-3">
                  <div className="language px-2  p-2"><p>eng</p></div>
                  <div className="language px-2  p-2"><p>ru</p></div>
                  <div className="language px-2  p-2"><p>ukr</p></div>
                </div>
              </div>

              <div className="icon">
                <FaBars onClick={handleNav} className="hover" />
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
