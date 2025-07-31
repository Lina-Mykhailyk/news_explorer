import "./NewsCard.css";

function NewsCard({ title, text, date, source, image }) {
  return (
    <article className="card">
      <img src={image} alt={title} className="card__image" />
      <button className="card__bookmark"></button>
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
