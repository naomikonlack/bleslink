import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial">
        <p>"TravelPal made it so easy to send a package to my friend across the country. The traveler I connected with was friendly and reliable. Highly recommend!"</p>
        <h3>- Jane Doe</h3>
      </div>
      <div className="testimonial">
        <p>"As a frequent traveler, I love being able to help others by carrying their packages. TravelPal has made my journeys more enjoyable and meaningful."</p>
        <h3>- John Smith</h3>
      </div>
      <div className="testimonial">
        <p>"The verification process gave me peace of mind. Knowing that I can track my package every step of the way is a game-changer."</p>
        <h3>- Sarah Lee</h3>
      </div>
    </div>
  );
};

export default Testimonials;
