import "./About.css";
import authorImage from "../../images/authorImage.jpg";

function About() {
  return (
    <section className="about">
      <img src={authorImage} alt="Author" className="about__image" />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          Hi, I’m Anhelina Mykhailyk, a web developer with a focus on React,
          JavaScript, and responsive design. I enjoy building clean,
          user-friendly interfaces and turning complex problems into simple
          solutions.
        </p>
        <p className="about__text">
          I recently completed the TripleTen Web Development program, where I
          mastered front-end and back-end development, including React, Node.js,
          Express, MongoDB, and REST APIs. Through projects like News Explorer,
          I honed my skills in creating full-stack applications, handling
          authentication, and working with third-party APIs.
        </p>
        <p className="about__text">
          I’m passionate about crafting seamless user experiences and always
          eager to learn and grow as a developer.
        </p>
      </div>
    </section>
  );
}

export default About;
