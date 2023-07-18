import React, { useEffect, useState } from "react";
// import "./App.css";

function NewsPage() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=a7b379abace94affad8c7f3f87f65108");
    const data = await response.json();
    setNews(data.articles);
  };

  const searchFunction = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&from=2023-07-17&sortBy=popularity&apiKey=a7b379abace94affad8c7f3f87f65108`);
    const data = await response.json();
    setNews(data.articles);
  };

  return (
    <>
      <input placeholder="Search bar" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={searchFunction}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {news.map((item, index) => (
            <tr key={index}>
              <td>{item.author}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NewsPage;
