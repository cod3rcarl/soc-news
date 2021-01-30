import React from "react";

const News = ({ newsData }) => {
  console.log(newsData);
  return (
    <div>
      {newsData.map((item) => {
        return (
          <section key={item.id}>
            <a href={item.webUrl} target="_blank" rel="noreferrer">
              <h3>{item.webTitle}</h3>
              <img src={item.fields.thumbnail} alt={item.webTitle} />
            </a>
          </section>
        );
      })}
    </div>
  );
};

export default News;
