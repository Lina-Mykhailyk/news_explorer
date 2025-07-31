import "./Main.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main() {
  return (
    <main className="main">
      <div className="main__top">
        <Header />
        <SearchForm />
      </div>
      <NewsCardList />
    </main>
  );
}

export default Main;
