import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    // We are defining the services as an array to use it with the map method
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, ratione",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, ratione",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, ratione",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, ratione",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {/* Services is an array so we can use the map method
          and we can pass each item into the parameter of the 
          map method as "item" */}
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                {/* Now we are accessing each value of every item 
                from the services array */}
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
