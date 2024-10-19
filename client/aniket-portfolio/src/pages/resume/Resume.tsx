import "./resume.css";

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="download-resume">
        <img src="./src/assets/images/pdf-icon.png" alt="pdf icon" />
        <h3>Download My Resume</h3>
      </div>
      <div className="resume-container">
        <iframe
          className="pdf"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
        ></iframe>
      </div>
    </div>
  );
}
