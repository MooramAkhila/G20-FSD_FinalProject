import React, { useEffect } from 'react';
import './YouTubePopup.css'; // Ensure you have this CSS file for styling

const YouTubePopup = ({ onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.className === 'popup-overlay') {
        onClose(); // Close the popup when clicking outside
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside); // Cleanup the event listener
    };
  }, [onClose]);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <iframe
          title="YouTube Video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/XpJf9OZnH7o" // Replace this with your actual video ID
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YouTubePopup;
