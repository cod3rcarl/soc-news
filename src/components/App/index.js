import "./App.css";
import { useState, useCallback } from "react";
import Login from "../Login/login";
import Nav from "../Nav/Nav";
import HomePage from "../HomePage/HomePage";
import { signInWithGoogle } from "../Firebase/google";

function App() {
  const [user, setUser] = useState();
  const [search, setSearch] = useState();
  const [newsData, setNewsData] = useState();

  function signOut() {
    setUser(null);
  }

  function handleNewSearch(query) {
    const searchTerm = `q=${query}`;

    setSearch(searchTerm);
  }

  function setNews(news) {
    setNewsData(news);
  }
  const myNews = useCallback(setNews, []);
  async function handleGoogle() {
    const user = await signInWithGoogle();
    const newUser = {
      userName: user.displayName,
      email: user.email,
      photo: user.photoURL,
      id: user.uid,
    };
    setUser(newUser);
  }

  return (
    <div className="App">
      {!user && <Login handleClick={handleGoogle} />}
      {user && (
        <Nav user={user} handleNewSearch={handleNewSearch} signOut={signOut} />
      )}
      {user && (
        <HomePage
          user={user}
          search={search}
          newsData={newsData}
          setNews={myNews}
          handleNewSearch={handleNewSearch}
        />
      )}
    </div>
  );
}

export default App;
