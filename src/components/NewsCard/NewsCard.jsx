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
  isSaved,
  onSave,
  onDelete,
}) {
  const handleBookmarkClick = () => {
    if (!isLoggedIn) return;
    if (isSaved) {
      onDelete?.();
    } else {
      onSave?.();
    }
  };

  return (
    <article className="card">
      {isSavedNews && <span className="card__keyword">{keyword}</span>}

      {/* Bookmark/Delete Button + Tooltip */}
      <div className="card__icon-wrapper">
        {isSavedNews ? (
          <>
            <button
              className="card__icon card__delete"
              onClick={onDelete}
              type="button"
              aria-label="Remove from saved"
            />
            <span className="card__tooltip">Remove from saved</span>
          </>
        ) : (
          <>
            <button
              type="button"
              className={`card__icon card__bookmark ${
                isSaved ? "card__bookmark_saved" : "card__bookmark_default"
              }`}
              onClick={handleBookmarkClick}
              aria-label={isSaved ? "Remove bookmark" : "Save article"}
              aria-pressed={isSaved ? "true" : "false"}
              disabled={!isLoggedIn}
            />
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
