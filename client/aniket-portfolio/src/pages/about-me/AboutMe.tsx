import "./about-me.css";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="text-info">
        <h2>Hello, I'm Aniket More</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          obcaecati distinctio facere numquam eum amet maxime at perspiciatis.
          Atque voluptate autem debitis iste tempore. Delectus eum neque
          obcaecati, labore repellendus incidunt ut minus fugit officia!
        </p>
      </div>
      <div className="wrapper">
        <div className="work-experience">
          <h2>Work Experience</h2>
          <div className="experience">
            <h4>React Native Intern</h4>
            <p>From May 2024 - June 2024</p>
          </div>
          <div className="experience">
            <h4>React Native Developer</h4>
            <p>From July 2024 - August 2024</p>
          </div>
        </div>
        <div className="tech-skills">
          <h2>I'm good at...</h2>
          <div className="skills-wrapper">
            <h4>React JS</h4>
            <h4>Node JS</h4>
            <h4>Java</h4>
            <h4>AWS</h4>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>SQL</h4>
            <h4>Linux</h4>
          </div>
        </div>
      </div>
      <div className="empty-space"></div>
    </div>
  );
}
