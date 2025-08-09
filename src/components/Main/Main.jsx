import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";

function Main({
  isLoggedIn,
  onSearch,
  articles,
  isLoading,
  searchError,
  onSaveArticle,
  onDeleteArticle,
  savedArticles,

  // persistent Show more (controlled by App)
  visibleCount,
  hasMore,
  onShowMore,
}) {
  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <main className="main">
      {/* Hero / Search Section */}
      <div className="main__hero">
        <SearchForm onSearch={onSearch} />
      </div>

      {/* Search Results Section */}
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

      {/* About Section */}
      <About />
    </main>
  );
}

export default Main;
