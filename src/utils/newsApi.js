const newsApiBaseUrl =
  import.meta.env.MODE === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

// API key from .env file
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = (query) => {
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 7);

  const params = new URLSearchParams({
    q: query,
    apiKey: API_KEY,
    from: fromDate.toISOString(),
    to: new Date().toISOString(),
    pageSize: 100,
  });

  return fetch(`${newsApiBaseUrl}?${params}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => data.articles);
};
