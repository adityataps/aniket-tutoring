import "./resume.css";

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-container">
        <iframe
          className="pdf"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
        ></iframe>
      </div>
    </div>
  );
}
