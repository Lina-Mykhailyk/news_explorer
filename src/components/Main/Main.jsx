import "./Main.css";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";

function Main({
  isLoggedIn,
  articles,
  isLoading,
  searchError,
  onSaveArticle,
  onDeleteArticle,
  savedArticles,
  visibleCount,
  hasMore,
  onShowMore,
}) {
  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <main className="main">
      {/* Results */}
      {isLoading && <Preloader />}

      {searchError === "Nothing Found" && <NotFound />}

      {searchError && searchError !== "Nothing Found" && (
        <p className="search-error">{searchError}</p>
      )}

      {!isLoading && !searchError && visibleArticles.length > 0 && (
        <NewsCardList
          articles={visibleArticles}
          isLoggedIn={isLoggedIn}
          onSaveArticle={onSaveArticle}
          onDeleteArticle={onDeleteArticle}
          savedArticles={savedArticles}
          hasMore={hasMore}
          onShowMore={onShowMore}
        />
      )}

      <About />
    </main>
  );
}

export default Main;
