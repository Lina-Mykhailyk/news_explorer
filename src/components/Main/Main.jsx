import "./Main.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main({ onSignInClick }) {
  return (
    <main className="main">
      <div className="main__top">
        <Header onSignInClick={onSignInClick} />
        <SearchForm />
      </div>
      <NewsCardList />
    </main>
  );
}

export default Main;
