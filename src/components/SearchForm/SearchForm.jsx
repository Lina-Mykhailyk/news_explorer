import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__content">
        <h1 className="search__title">What’s going on in the world?</h1>
        <p className="search__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <form className="search__form">
        <input
          type="text"
          placeholder="Enter topic"
          className="search__input"
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
