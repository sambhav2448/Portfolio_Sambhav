import React from 'react';
import './contact.css';
import Fade from 'react-reveal/Fade';

function Contact() {
  return (
    <div>
      <Fade>
        <h1 className='about_contact_h1 '>Contact</h1>
      </Fade>
      <div className='contact_me_container'>
        <p className='cool_line_contact'>
          Collaborate on a Project ? Freelance Opportunity? Or Discuss a Cool
          Idea ?? Reach out to me!
        </p>

        <h5 className='email_contact_us'>sambhav2448@gmail.com</h5>
        <div className='icon_contactme'>
          <div className='flex_icon1'>
            <a
              href='https://www.facebook.com/profile.php?id=100029297869293'
              className='icon_bg_color fb'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='fab fa-facebook-f'></i>
            </a>
            <a
              href='https://github.com/sambhav2448'
              rel='noopener noreferrer'
              target='_blank'
              className='icon_bg_color github'
            >
              <i class='fab fa-github'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/sambhav2448/'
              target='_blank'
              className='icon_bg_color linkedin'
              rel='noopener noreferrer'
            >
              <i class='fab fa-linkedin-in '></i>
            </a>
            <a
              href='https://gitlab.com/Sambhav_22'
              className='icon_bg_color gitlab'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i class='fab fa-gitlab'></i>
            </a>
          </div>
          <div className='flex_icon2'>
            <a
              href='https://twitter.com/Sambhav00382643'
              target='_blank'
              className='icon_bg_color twitter'
              rel='noopener noreferrer'
            >
              <i class='fab fa-twitter '></i>
            </a>
            <a
              href='https://www.instagram.com/sambhav.js/'
              target='_blank'
              className='icon_bg_color insta'
              rel='noopener noreferrer'
            >
              <i class='fab fa-instagram '></i>
            </a>
            <a
              href='sambhav2448@gmail.com'
              target='_blank'
              className='icon_bg_color google'
              rel='noopener noreferrer'
            >
              <i class='fab fa-google '></i>
            </a>
            <a
              href='https://medium.com/@sambhav2448'
              target='_blank'
              className='icon_bg_color medium'
              rel='noopener noreferrer'
            >
              <i class='fab fa-medium-m '></i>
            </a>
          </div>
        </div>
      </div>
      <div className='footer_contact'>
        <p>Made with </p>
        <img
          className='heart_img'
          draggable='false'
          src='https://twemoji.maxcdn.com/2/72x72/2764.png'
          alt='❤️'
        ></img>
        <p> by Sambhav Jain </p>
      </div>
    </div>
  );
}

export default Contact;
