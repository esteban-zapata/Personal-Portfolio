import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
  <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to Reach Out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} 
            alt="Email Icon"/>
        <a href = "mailto: ezapata2002@gmail.com">ezapata2002@gmail.com</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} 
            alt="linkedIn Icon"/>
        <a href = "https://www.linkedin.com/in/esteban-zapata64/">linkedin.com/esteban-zapata64</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} 
            alt="Github Icon"/>
        <a href = "https://github.com/esteban-zapata">github.com/esteban-zapata</a>
        </li>
    </ul>
  </footer>
  );
  
};