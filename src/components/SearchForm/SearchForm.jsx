import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a keyword");
      return;
    }

    setError("");
    onSearch(query);
  };

  return (
    <section className="search">
      <div className="search__content">
        <h1 className="search__title">What’s going on in the world?</h1>
        <p className="search__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter topic"
          className="search__input"
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
      {error && <span className="search__error">{error}</span>}
    </section>
  );
}

export default SearchForm;
