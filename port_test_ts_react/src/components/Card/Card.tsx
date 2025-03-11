import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  link: string;
  summary: string;
  image: string;  // Accept the image URL as a prop
  position: "left" | "right"; // New prop to control layout
}

const Card: React.FC<CardProps> = ({ title, summary, link, image, position }) => {
  return (
    <div className={`card card-${position}`} style={{ cursor: 'pointer' }}> {/* Use position for class */}
      <div className="card-content">
        <div className="card-img">
          <img src={image} alt={title} className="card-image" />
        </div>
        <div className="card-text">
          <h4>Case Study</h4>
          <hr className="title-divider" />
          <h3>{title}</h3>
          <div className="justify-text">
            <p className="summary-text">{summary}</p>
            <Link to={link}>
              <button>VIEW CASE STUDY</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;