import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  articles,
  isSavedNews = false,
  isLoggedIn,
  onSaveArticle,
  onDeleteArticle,
  savedArticles = [],
  hasMore = false,
  onShowMore,
}) {
  return (
    <section className="cards">
      {!isSavedNews && <h2 className="cards__title">Search results</h2>}

      <div className="cards__list">
        {articles.map((article) => {
          const isSaved = savedArticles.some(
            (saved) =>
              saved.title === article.title &&
              (saved.publishedAt || saved.date) ===
                (article.publishedAt || article.date)
          );

          const key =
            article.url ||
            `${article.title}-${article.publishedAt || article.date}`;

          return (
            <NewsCard
              key={key}
              title={article.title}
              text={article.description || article.text}
              date={new Date(
                article.publishedAt || article.date
              ).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
              source={
                article.source?.name || article.source || "Unknown Source"
              }
              image={article.urlToImage || article.image}
              keyword={article.keyword || ""}
              isSavedNews={isSavedNews}
              isLoggedIn={isLoggedIn}
              isSaved={isSaved}
              onSave={() => onSaveArticle(article)}
              onDelete={() => onDeleteArticle(article._id)}
            />
          );
        })}
      </div>

      {!isSavedNews && hasMore && (
        <button className="cards__button" onClick={onShowMore}>
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
