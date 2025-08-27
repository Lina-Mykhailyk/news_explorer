import "./About.css";
import authorImage from "../../images/authorImage.jpg";

function About() {
  return (
    <section className="about">
      <img src={authorImage} alt="Author" className="about__image" />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          Hi, I am Anhelina Mykhailyk, a web developer with a focus on React,
          JavaScript, and responsive design.
        </p>
        <p className="about__text">
          I recently completed Web Development program from TripleTen covering
          React, Node.js, Express, MongoDB, REST APIs and more. Projects like
          News Explorer sharpened my full-stack skills in authentication and
          third-party integrations.
        </p>
        <p className="about__text">
          I am passionate about building clean, user-friendly interfaces,
          turning complex problems into simple solutions and always eager to
          learn and grow as a developer.
        </p>
      </div>
    </section>
  );
}

export default About;
