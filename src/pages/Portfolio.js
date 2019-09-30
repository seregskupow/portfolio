import React,{useEffect,useRef} from 'react'
import { DataConsumer } from '../context'
import Card from '../components/Card'
import { TweenMax, TimelineMax, Power3 ,Elastic} from 'gsap'
export default function Portfolio() {

    let target = useRef(null);
    const stragger = ()=>{
        let cards = document.querySelector(".row");
       
        TweenMax.from(cards,1,{y:-300,opacity:0,ease: Elastic.easeOut.config(1, 0.75)});
    }
    useEffect(() => {
        
        stragger();
        
 
      }, [])
    return (
        <DataConsumer>
            {value => {
                const { works } = value;
                
                return (
                    <section className="portfolio">
                        <div className="container parallax">
                            <h1 className="text-uppercase">here are examples of my works:</h1>
                            <div className="row">

                                {works.map(item => (
                                    <div key={item.id} className="item col-10 col-md-6 col-lg-6 mx-auto px-5 my-5" >
                                        <Card  data={item} title={item.title} />
                                    </div>
                                ))}


                            </div>
                        </div>
                    </section>
                )
            }}
        </DataConsumer>

    )
}
