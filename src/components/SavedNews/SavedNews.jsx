import "./SavedNews.css";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

function SavedNews({ isLoggedIn }) {
  return (
    <main className="saved-news">
      <section className="saved-news__header">
        <p className="saved-news__text">Saved articles</p>
        <h2 className="saved-news__title">Elise, you have 5 saved articles</h2>
        <p className="saved-news__keywords">
          By keywords: <b>Nature</b>, <b>Yellowstone</b>, and <b>2 other</b>
        </p>
      </section>

      <SavedNewsCardList isLoggedIn={isLoggedIn} />
    </main>
  );
}

export default SavedNews;
