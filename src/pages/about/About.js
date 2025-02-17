import React from "react";
//CSS
import styles from "../about/About.module.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o mini<span>Blog</span></h2>
      <p>
        Este projeto consiste em um blpg feito com react no front-end e Firebase
        no backend
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
