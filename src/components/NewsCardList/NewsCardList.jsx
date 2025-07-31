import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
  const cards = [
    {
      id: 1,
      title:
        "Everyone Needs a Special 'Sit Spot' in Nature Everyone Needs a Special 'Sit Spot' in Nature",
      text: "Ever since I read Richard Louv’s influential book, “Last Child in the Woods,” the idea of having a special “sit spot” has stuck with me. Ever since I read Richard Louv’s influential book, “Last Child in the Woods,” the idea of having a special “sit spot” has stuck with me. Ever since I read Richard Louv’s influential book, “Last Child in the Woods,” the idea of having a special “sit spot” has stuck with me.",
      date: "November 4, 2020",
      source: "Treehugger",
      image:
        "https://images.unsplash.com/photo-1744194210914-0f5b2375645d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Nature makes you better",
      text: "We all know how good nature can make us feel. We’ve known it for millennia.We all know how good nature can make us feel. We’ve known it for millennia.We all know how good nature can make us feel. We’ve known it for millennia.We all know how good nature can make us feel. We’ve known it for millennia.We all know how good nature can make us feel. We’ve known it for millennia.We all know how good nature can make us feel. We’ve known it for millennia.",
      date: "February 19, 2019",
      source: "National Geographic",
      image:
        "https://images.unsplash.com/photo-1753087380647-38a2496b60bc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Grand Teton Renews Historic Crest Trail",
      text: "The linking together of the Cascade and Death Canyon trails.",
      date: "October 19, 2020",
      source: "National Parks Traveler",
      image:
        "https://images.unsplash.com/photo-1750688650017-c3090567942f?q=80&w=977&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="cards">
      <h2 className="cards__title">Search results</h2>
      <div className="cards__list">
        {cards.map((card) => (
          <NewsCard key={card.id} {...card} />
        ))}
      </div>
      <button className="cards__button">Show more</button>
    </section>
  );
}

export default NewsCardList;
