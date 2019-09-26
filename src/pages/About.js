import React from "react";
import { DataConsumer } from "../context";

export default function About() {
  return (
    <DataConsumer>
      {value => {
        return (
            
          <section className="about">
            <div className="container">
              <div className="row"></div>
            </div>
          </section>
        );
      }}
    </DataConsumer>
  );
}
