import './Features.css';

export const Features = () => {
  const features = [
    {
      title: 'Luxury Rooms',
      description: 'Spacious rooms with stunning views and premium amenities',
      icon: '🛏️'
    },
    {
      title: 'Fine Dining',
      description: 'World-class restaurants featuring international cuisine',
      icon: '🍽️'
    },
    {
      title: 'Spa & Wellness',
      description: 'Relax and rejuvenate at our state-of-the-art spa',
      icon: '💆'
    },
    {
      title: 'Pool & Fitness',
      description: 'Olympic-sized pool and fully equipped fitness center',
      icon: '🏊'
    }
  ];

  return (
    <section className="features" id="amenities">
      <h2 className="features-title">Our Amenities</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
