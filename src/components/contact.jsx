import React from 'react';
import useStore from '../store';

function Contact(props) {
  return (
    <div id="contact-container">
      <h1>Contact Us</h1>
      
      <div className="contact-card">
        <h2>Sayanton Dibbo</h2>
        <p>
          <a href="https://ieeexplore.ieee.org/author/37085858505" target="_blank" rel="noopener noreferrer">IEEE Profile</a><br/>
          Email: <a href="mailto:sayanton.v.dibbo.gr@dartmouth.edu">sayanton.v.dibbo.gr@dartmouth.edu</a>
        </p>
      </div>
      
      <div className="contact-card">
        <h2>Cameron Keith</h2>
        <p>
        <a href="https://scholar.google.com/citations?user=3e0e" target="_blank" rel="noopener noreferrer">Google Scholar</a><br/>
        <a href="https://github.com/ckeith26" target="_blank" rel="noopener noreferrer">Github</a><br/>
        <a href="https://www.linkedin.com/in/cameron-keith-656b27253/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br/>
          Email: <a href="mailto:cameron.s.keith.26@dartmouth.edu">cameron.s.keith.26@dartmouth.edu</a>
          
        </p>
      </div>
    </div>
  );
}

export default Contact;
