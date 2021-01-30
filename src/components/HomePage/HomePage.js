import React, { useEffect } from "react";
import moment from "moment";
import "./HomePage.css";
import News from "../News/News";
import Search from "../Nav/search";
const HomePage = ({ user, search, newsData, setNews, handleNewSearch }) => {
  const { userName } = user;
  const firstName = userName.split(" ").slice(0, 1);
  const apiKey = process.env.REACT_APP_GUARDIAN_API_KEY;
  const date = moment().format("YYYY-MM-DD");
  console.log(date);
  useEffect(() => {
    async function getNews() {
      // if (!search) {
      let response = await fetch(
        `https://content.guardianapis.com/search?from-date=${date}&to-date=${date}&${search}&show-fields=thumbnail&api-key=${apiKey}`
      );
      const data = await response.json();
      setNews(data.response.results);
      console.log(data);
      // }

      // let response = await fetch(
      //   `https://content.guardianapis.com/search?${search}&show-fields=thumbnail&api-key=${apiKey}`
      // );
      // const data = await response.json();
      // setNews(data.response.results);
      // console.log(data);
    }
    getNews();
  }, [search, date, apiKey, setNews]);

  return (
    <div>
      <br></br>
      <br></br>
      <div>
        {" "}
        <Search className="search" handleNewSearch={handleNewSearch} />
      </div>
      <header className="welcome">
        <h1>Welcome {firstName}!</h1>
      </header>
      <main>
        {search ? (
          <h2>
            Top Stories related to{" "}
            {`${search
              .slice(2)
              .charAt(0)
              .toUpperCase()}${search.slice(3)}`}
          </h2>
        ) : (
          <h2>Top Stories</h2>
        )}
        {newsData && <News newsData={newsData} />}
      </main>
    </div>
  );
};

export default HomePage;
