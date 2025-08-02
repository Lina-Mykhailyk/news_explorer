import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main({ isLoggedIn }) {
  return (
    <main className="main">
      <div className="main__hero">
        <SearchForm />
      </div>
      <NewsCardList isLoggedIn={isLoggedIn} />
    </main>
  );
}

export default Main;
