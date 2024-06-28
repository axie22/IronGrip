import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="column">          
            <ul className="list-unstyled">
              <li>
                <a
                  href="mailto:goodgy24@wfu.edu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Contact"
                >
                  <h4>Contact Us</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <ul className="list-unstyled">
              <li>
                <a
                  href='https://github.com/axie22/FitnessApp.git'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='GitHub repository'
                >
                  <h4>The Code</h4>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="column-small">
            &copy;{new Date().getFullYear()} Iron Grip
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
