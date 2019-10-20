import React, { useEffect, useRef, useState } from "react";
import { DataConsumer } from "../context";
import defaultimg from '../img/default.png'
import aboutme from '../img/iam.gif';
import smart from '../img/smart.gif';
import love from '../img/love.gif';
import { TweenMax, TimelineMax, Power3, Elastic } from 'gsap'
import { DiHtml5, DiJavascript1, DiReact, DiNodejsSmall, DiPhp, DiSass, DiGit, DiBootstrap } from "react-icons/di";

export default function About() {
  const [load, isLoad] = useState(false);
  const skills = [
    {
      icon: <DiHtml5 />,
      name: "HTML5",
      color:"255, 60, 0"
    },
    {
      icon: <DiJavascript1 />,
      name: "Javascript",
      color:"251, 255, 0",
    },
    {
      icon: <DiReact />,
      name: "React",
      color:"0, 225, 255"
    },
    {
      icon: <DiNodejsSmall />,
      name: "Nodejs",
      color:"0, 255, 21"
    },
    {
      icon: <DiPhp />,
      name: "php",
      color:"162, 0, 255"
    },
    {
      icon: <DiSass />,
      name: "SCSS",
      color:"255, 0, 85"
    },
    {
      icon: <DiGit />,
      name: "SCSS",
      color:"255, 94, 0"
    },
    {
      icon: <DiBootstrap />,
      name: "SCSS",
      color:"255, 0, 255"
    },
    {
      icon: "",
      name: "Gsap",
      color:"72, 255, 0"
    }
  ];
  useEffect(() => {

    let cards = document.querySelectorAll('.about-row');
    TweenMax.staggerFrom(cards, 1, { y: -100, opacity: 0, ease: Elastic.easeOut.config(1, 0.75) }, 0.3)

    isLoad(true);
  }, [])
  return (
    <DataConsumer>
      {value => {
        return (

          <section className="about">
            <div className="container parallax m-3">
              <div className="row about-row py-5 my-5 d-flex justify-content-center">
                <div className="col-10 col-md-6 col-lg-6 d-flex justify-content-center flex-column">
                  <h1>As I`ve already mentioned, my name is Sergey Skupow</h1>
                  <p>What else? Well in the college I was thinking about my future and possible programming ways that would match me and my passions. I fill myself belonging both to technical and art spheres. I love creating something beautiful and functional at the same time. To my mind, area of the web-developing covers both of these aspects as there are so many masterpieces around the internet</p></div>
                <div className="col-10 col-md-6 col-lg-6 d-flex justify-content-center">
                  <img src={aboutme} alt="" className="img-fluid rounded" style={{ maxHeight: "350px" }} />
                </div>
              </div>

              <div className="row about-row py-5 flex-row-reverse my-5 d-flex justify-content-center">
                <div className="col-10 col-md-6 col-lg-6 d-flex justify-content-center flex-column">
                  <h1>What about my skills?</h1>
                  <p>After I`ve chosen my path I started learning webdev "starter pack":<br />HTML5+CSS3. I`ve created a bunch of landing-pages. Then I learned JavaScript and my web-sites became more functional and animated. Soon I found out about the gsap library which made animation process easier and more advanced. I`ve also made the Wordpress web-site with my own design. Then I learned React JS + Node JS.<br />To sum up, here are my skills:<br /></p>
                  <div className="tools d-flex">
                    {skills.map(item => (
                      <div className="tool" style={{ opacity: 1, transform: "translateY(0)",background:`rgba(${item.color},0.15)` }}><span style={{fontSize:"20px"}}>{item.icon}</span>{item.name}</div>
                    ))}
                  </div>
                </div>
                <div className="col-10 col-md-6 col-lg-6 d-flex justify-content-center">
                  <img src={smart} alt="" className="img-fluid rounded" style={{ maxHeight: "350p" }} />
                </div>
              </div>


              <div className="row about-row py-5 my-5 d-flex justify-content-center">
                <div className="col-10 col-md-6 col-lg-6 d-flex justify-content-center flex-column">
                  <h1>My passions</h1>
                  <p>If we are talking about the development, I would say the greatest pleasure I can receive is the feeling of the finished project. I also love spending my time admiring and code reviewing the gsap professionals` projects <a href="https://greensock.com/showcase/">here</a>.<br/></p></div>
                <div className="col-10 col-md-6 col-lg-6 d-flex justify-content-center">
                  <img src={love} alt="" className="img-fluid rounded" style={{ maxHeight: "350p" }} />
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </DataConsumer>
  );
}
