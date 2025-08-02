import { useState } from "react";
import "./SavedNewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNewsCardList({ isLoggedIn }) {
  // Initial saved cards (mocked for now)
  const [savedCards, setSavedCards] = useState([
    {
      id: 1,
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      text: "Ever since I read Richard Louv’s influential book...",
      date: "November 4, 2020",
      source: "Treehugger",
      image:
        "https://images.unsplash.com/photo-1744194210914-0f5b2375645d?q=80",
      keyword: "Nature",
    },
    {
      id: 2,
      title: "Nature makes you better",
      text: "We all know how good nature can make us feel...",
      date: "February 19, 2019",
      source: "National Geographic",
      image:
        "https://images.unsplash.com/photo-1753087380647-38a2496b60bc?q=80",
      keyword: "Environment",
    },
    {
      id: 3,
      title: "Nature makes you better",
      text: "We all know how good nature can make us feel...",
      date: "February 19, 2019",
      source: "National Geographic",
      image:
        "https://images.unsplash.com/photo-1753087380647-38a2496b60bc?q=80",
      keyword: "Environment",
    },
  ]);

  const handleDeleteCard = (id) => {
    setSavedCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <section className="saved-cards">
      <div className="saved-cards__list">
        {savedCards.map((card) => (
          <NewsCard
            key={card.id}
            {...card}
            isSavedNews={true}
            isLoggedIn={isLoggedIn}
            onDelete={() => handleDeleteCard(card.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default SavedNewsCardList;
