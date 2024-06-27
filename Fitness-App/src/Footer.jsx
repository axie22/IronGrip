import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="mailto:goodgy24@wfu.edu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Contact"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4>GitHub</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  className='social-icon-link github'
                  href='https://github.com/your-github-repo'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='GitHub'
                >
                  <i className='fab fa-github' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="column-small">
            &copy;{new Date().getFullYear()} Fitness App
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;