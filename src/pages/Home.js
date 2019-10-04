import React, { useEffect } from "react";
import Img from "../img/reactpng2.png";
import { DataConsumer } from "../context";
import styled from "styled-components";
import {TweenMax} from 'gsap';
import {Draggable} from 'gsap/all';
import {FaTelegramPlane,FaDiscord,FaGithub} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";

import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial
} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import styles from "react-awesome-button/src/styles/themes/theme-c137";

export default function Home() {
  let img = document.querySelector('.drag');
  let container = document.querySelector('.home-content');
  Draggable.create(img, { type: "x,y", edgeResistance: 0.65, bounds: container, throwProps: true });
  useEffect(() => {
    
  }, [])
  return (
    <DataConsumer>
      {value => {
        const { navOpen, handleNav } = value;

        return (
          <HomePage show={navOpen} className="home mt-5">
            <div className="home-content container mt-5 parallax">
              <div className="row">
                <div className="col-10 col-sm-8 col-md-6 col-lg-6 my-auto">
                  <div className="text">
                    <h1 className="text-uppercase">hello!</h1>
                      <p class="text-uppercase">my name is Sergey Skupow</p>
                      <p className="text-uppercase">i am the beginner web developer, who searches for a job offer!</p>

                  </div>
                  <div className="text-center" style={{ width: "100%" }}>
                    <AwesomeButtonProgress
                      class="drag"
                      ripple
                      size="large"
                      type="primary"
                      action={(element, next) => {
                        // action('clicked');

                        setTimeout(() => {
                          next();
                        }, 600);
                      }}

                    >
                      <span className="text-uppercase">download cv</span>
                    </AwesomeButtonProgress>
                  </div>
                </div>
                <div className="col-10 col-sm-8 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center mt-5 ">
                  <div className="drag">
                  <img
                    src={Img}
                    style={{ maxHeight: "320px", maxWidth: "320px" }}
                    className="img-fluid rounded react"
                    alt=""
                  />
                  </div>
                 
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 contact-me">
                  <h3>Contact me</h3>
                  <ul>
                    <li><a href="https://t.me/sergeyskupow"><FaTelegramPlane/></a></li>
                    <li><a href=""><FaDiscord/></a></li>
                    <li><a href="https://github.com/seregskupow"><FaGithub/></a></li>
                    <li><a href=""><IoMdMail/></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </HomePage>
        );
      }}
    </DataConsumer>
  );
}
const HomePage = styled.section`
  /* transition: 0.6s all ease-out;
  opacity: ${props => (props.show ? "0" : "1")}; */
`;
