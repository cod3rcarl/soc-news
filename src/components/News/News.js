import React from "react";

const News = ({ newsData }) => {
  return (
    <div>
      {newsData.map((item) => {
        return (
          <section key={item.id}>
            <a href={item.webUrl} target="_blank">
              <h3>{item.webTitle}</h3>
              <img src={item.fields.thumbnail} alt="" />
            </a>
          </section>
        );
      })}
    </div>
  );
};

export default News;
