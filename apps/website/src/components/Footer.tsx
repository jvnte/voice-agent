import { useEffect } from 'react';
import './Footer.css';

export const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Grand Hotel</h3>
          <p>Experience luxury and comfort</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123 Luxury Avenue</p>
          <p>City, State 12345</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#rooms">Rooms</a>
          <a href="#amenities">Amenities</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Grand Hotel. All rights reserved.</p>
      </div>
      <elevenlabs-convai agent-id="agent_2601kbasppe0etj9nsd0802tkarf"></elevenlabs-convai>
    </footer>
  );
};
