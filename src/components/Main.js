import React from "react";
import data from "../assets/data.json";
import Section from "./Section";

const Main = () => {
  return (
    <main>
      {data.map((item, index) => {
        return (
          <Section key={index} category={item.category} images={item.images} />
        );
      })}
    </main>
  );
};

export default Main;
