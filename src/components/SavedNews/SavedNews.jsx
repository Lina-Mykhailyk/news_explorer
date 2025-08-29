import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SavedNews.css";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

function SavedNews({ isLoggedIn, savedArticles, onDeleteArticle }) {
  const currentUser = useContext(CurrentUserContext);

  const keywords = savedArticles.map((a) => a.keyword).filter(Boolean);
  const uniqueKeywords = [...new Set(keywords)];

  let keywordText = "";
  if (uniqueKeywords.length > 2) {
    keywordText = `${uniqueKeywords[0]}, ${uniqueKeywords[1]}, and ${
      uniqueKeywords.length - 2
    } other`;
  } else {
    keywordText = uniqueKeywords.join(", ");
  }

  return (
    <main className="saved-news">
      <section className="saved-news__header">
        <p className="saved-news__text">Saved articles</p>
        <h2 className="saved-news__title">
          {`${currentUser?.name || "Guest"}, you have ${
            savedArticles.length
          } saved article${savedArticles.length !== 1 ? "s" : ""}`}
        </h2>
        {keywords.length > 0 && (
          <p className="saved-news__keywords">
            By keywords: <b>{keywordText}</b>
          </p>
        )}
      </section>

      <SavedNewsCardList
        savedArticles={savedArticles}
        isLoggedIn={isLoggedIn}
        onDeleteArticle={onDeleteArticle}
      />
    </main>
  );
}

export default SavedNews;
