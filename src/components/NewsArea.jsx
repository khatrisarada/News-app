import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export const NewsArea = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null); // State to track API errors

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // API URL with properly interpolated environment variable
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
        let response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        setArticles(data.articles || []); // Ensure `articles` is an array even if API response is empty
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setError(error.message);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-center">
        <span className="badge bg-danger">Latest News</span>
      </h2>

      {error ? (
        <p className="text-center text-danger">Error: {error}</p>
      ) : articles.length > 0 ? (
        <div className="row">
          {articles.map((news, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={news.title || "No Title"}
                description={news.description || "No Description Available"}
                src={news.urlToImage || "https://via.placeholder.com/150"}
                url={news.url || "#"}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Loading articles or no news available.</p>
      )}
    </div>
  );
};

export default NewsArea;
