import { useState } from "react";
import "./NewsCard.css";

function NewsCard({
  title,
  text,
  date,
  source,
  image,
  keyword,
  isSavedNews,
  isLoggedIn,
  onSave,
  onDelete,
}) {
  const [isSaved, setIsSaved] = useState(false);

  const handleBookmarkClick = () => {
    if (!isLoggedIn) return; // Tooltip will handle hover message
    setIsSaved((prev) => !prev);
    onSave?.();
  };

  const handleDeleteClick = () => {
    onDelete?.();
  };

  return (
    <article className="card">
      {isSavedNews && <span className="card__keyword">{keyword}</span>}

      {/* Button + tooltip */}
      <div className="card__bookmark-wrapper">
        {isSavedNews ? (
          <>
            <button
              className="card__delete"
              onClick={handleDeleteClick}
              type="button"
            ></button>
            <span className="card__tooltip">Remove from saved</span>
          </>
        ) : (
          <>
            <button
              className={`card__bookmark ${
                isSaved ? "card__bookmark_saved" : ""
              }`}
              onClick={handleBookmarkClick}
              type="button"
            ></button>
            {!isLoggedIn && (
              <span className="card__tooltip">Sign in to save articles</span>
            )}
          </>
        )}
      </div>

      {/* Image */}
      <img src={image} alt={title} className="card__image" />

      {/* Content */}
      <div className="card__content">
        <p className="card__date">{date}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <p className="card__source">{source}</p>
      </div>
    </article>
  );
}

export default NewsCard;
