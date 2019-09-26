import React from 'react'
import { DataConsumer } from '../context'
import Card from '../components/Card'

export default function Portfolio() {

    return (
        <DataConsumer>
            {value => {
                const { works } = value;
                return (
                    <section className="portfolio parallax  ">
                        <div className="container">
                            <h1 className="text-uppercase">here are examples of my works:</h1>
                            <div className="row">

                                {works.map(item => (
                                    <Card key={item.id} data={item} title={item.title} />
                                ))}


                            </div>
                        </div>
                    </section>
                )
            }}
        </DataConsumer>

    )
}
