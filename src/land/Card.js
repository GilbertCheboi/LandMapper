import React, { useState } from 'react';
import './Card.css'; // Create a separate CSS file for styling if desired

const Card = ({ title, description, image, price, content, timestamp }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="custom-card">
      <div className="custom-card-header">
        <div className="avatar">
          R{/* Replace with the initial of the user */}
        </div>
        <div className="header-actions">
          <button className="expand-button" onClick={handleExpandClick}>
            <span>{expanded ? '-' : '+'}</span>
          </button>
        </div>
      </div>
      <img src={image} alt={title} className="custom-card-media" />
      <div className="custom-card-content">
        <h2>{price}</h2>
        <p className="subheader">{timestamp}</p>
        <p>{description}</p>
      </div>
      
      {expanded && (
        <div className="collapse-content">
          {/* <h3>Method:</h3> */}
          <p>
            {content}
          </p>
          {/* Add more paragraphs and content as needed */}
          <div className="card-actions">
        <button className="action-button">
          <span>Rate</span>
        </button>
        <button className="action-button">
          <span>Share</span>
        </button>
      </div>
        </div>
      )}
    </div>
  );
};

export default Card;

// import React from 'react';

// const cardStyles = `
//   .card {
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//     max-width: 300px;
//     margin: 10px;
//     padding: 10px;
//   }

//   .card img {
//     width: 100%;
//     border-radius: 5px 5px 0 0;
//   }

//   .card-content {
//     padding: 10px;
//   }

//   .card-content h2 {
//     font-size: 1.2rem;
//     margin-bottom: 5px;
//   }

//   .card-content p {
//     font-size: 1rem;
//   }
// `;

// const Card = ({ title, description, imageUrl,
//     country,
//     county,
//     sub_county, }) => {
//   return (
//     <>
//       <style>{cardStyles}</style>
//       <div className="card">
//         <img src={imageUrl} alt={title} />
//         <div className="card-content">
//           <h2>{title}</h2>
//           <p>{description}</p>
//           {/* <p>Location: {`${center_latitude}, ${center_longitude}`}</p> */}
//             <p>Country: {country}</p>
//             <p>County: {county}</p>
//             <p>Sub County: {sub_county}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;