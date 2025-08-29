import "./SavedNewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNewsCardList({ savedArticles, isLoggedIn, onDeleteArticle }) {
  return (
    <section className="saved-cards">
      <div className="saved-cards__list">
        {savedArticles.map((article) => (
          <NewsCard
            key={article._id}
            title={article.title}
            text={article.description || article.text}
            date={new Date(
              article.publishedAt || article.date
            ).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
            source={article.source?.name || article.source || "Unknown Source"}
            image={article.urlToImage || article.image}
            keyword={article.keyword || ""}
            isSavedNews={true}
            isLoggedIn={isLoggedIn}
            isSaved={true} // Saved News always shows saved state
            onDelete={() => onDeleteArticle(article._id)}
          />
        ))}
      </div>
    </section>
  );
}

export default SavedNewsCardList;
