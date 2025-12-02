import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Grand Hotel</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#rooms">Rooms</a>
          <a href="#amenities">Amenities</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};
