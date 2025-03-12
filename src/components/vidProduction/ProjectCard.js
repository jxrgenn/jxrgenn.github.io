import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl, onClick }) => {
  const handleCardClick = (e) => {
    if (onClick) {
      // Prevent default behavior for commercial items
      e.preventDefault();
      onClick();
    } else {
      // Maintain original behavior for music videos
      window.open(linkUrl, "_blank");
    }
  };

  return (
    <div className="proj-imgbx" onClick={handleCardClick}>
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};