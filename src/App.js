import { useState } from "react";
import "./App.css";
import NewsPage from "./component/news.component";
import NavbarPage from "./component/navbar.component";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [isNews, setIsNews] = useState(false);

  const handleNews = () => {
    setIsNews(!isNews);
  };

  return (
    <div className="App">
      <div>
        <div className="container" style={{ marginTop: "300px" }}></div>
        {isNews ? <NewsPage /> : <NavbarPage /> } 
        <span onClick={handleNews}>Klik disini untuk pencarian berita</span>
      </div>
    </div>
  );
}

export default App;
