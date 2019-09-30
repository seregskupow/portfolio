import React, { useEffect, useRef,useState } from "react";
import { DataConsumer } from "../context";
import defaultimg from '../img/default.png'
import { TweenMax, TimelineMax, Power3, Elastic } from 'gsap'

export default function About() {
  const[load,isLoad] = useState(false);

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
            <div className="container parallax">
              <div className="row about-row py-5 my-5">
                <div className="col-10 col-md-6 col-lg-6 d-flex justify-content-center flex-column">
                  <h1>Some text</h1>
                  <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p></div>
                <div className="col-10 col-md-6 col-lg-6 d-flex justify-content-center">
                  <img src={defaultimg} alt="" className="img-fluid rounded" style={{ height: "250px" }} />
                </div>
              </div>

              <div className="row about-row py-5 flex-row-reverse my-5">
                <div className="col-10 col-md-6 col-lg-6 d-flex justify-content-center flex-column">
                  <h1>Some text</h1>
                  <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p></div>
                <div className="col-10 col-md-6 col-lg-6 d-flex justify-content-center">
                  <img src={defaultimg} alt="" className="img-fluid rounded" style={{ height: "250px" }} />
                </div>
              </div>


              <div className="row about-row py-5 my-5">
                <div className="col-10 col-md-6 col-lg-6 d-flex justify-content-center flex-column">
                  <h1>Some text</h1>
                  <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p></div>
                <div className="col-10 col-md-6 col-lg-6 d-flex justify-content-center">
                  <img src={defaultimg} alt="" className="img-fluid rounded" style={{ height: "250px" }} />
                </div>
              </div>
            </div>
          </section>
        ) ;
      }}
    </DataConsumer>
  );
}
