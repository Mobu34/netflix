import React from "react";
import Content from "./Content";

const Section = ({ category, images }) => {
  return (
    <section>
      <h2>{category}</h2>
      <div className="movies-list">
        {images.map((item, index) => {
          return <Content key={index} image={item} />;
        })}
      </div>
    </section>
  );
};

export default Section;
