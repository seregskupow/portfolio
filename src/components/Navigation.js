import React, { useEffect, useRef } from "react";
import { DataConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { TweenMax, TimelineMax, Power3, Elastic } from 'gsap'

export default function Navigation({ prop }) {
  let target = useRef(null);
  let navOpen = prop;

  const navigAnimation = (flag) => {
    let ul = document.getElementsByTagName('ul');
    let li = document.querySelectorAll('.menu-item');
    if (flag==true) {
      TweenMax.from(ul, 1, { scale: 1.1,opacity:0, ease: Power3.easeInOut });
      TweenMax.staggerFrom(li,1,{y:-100,opacity:0,ease:Elastic.easeInOut},0.3)
    }

  }
  
  useEffect(() => {
   

  }, [])

  return (
    <DataConsumer>
      {value => {
        const { links, handleNav, navOpen } = value;
        navigAnimation(navOpen);
        return (
          <Nav view={navOpen} className="navigation">
            <ul ref={el => target = el}>
              {links.map(link => (
                <li className="menu-item" key={link.id} >
                  <Link to={link.path} onClick={handleNav}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </Nav>
        );
      }}
    </DataConsumer>
  );
}
const Nav = styled.div`
transition:.5s all ease;
    opacity:${props => props.view ? "1" : "0"};
    transform:translateY(${props => props.view ? "" : "-120%"})
`;