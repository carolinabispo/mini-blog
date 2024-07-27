import React from "react";
import { NavLink } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

// CSS
import styles from "../navbar/Navbar.module.css";
const NavBar = () => {
  const { user } = useAuthValue();
  const {logout} = useAuthentication()

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        Mini <span>Blog</span>
        <ul className={styles.links_list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Entrar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Cadastrar
                </NavLink>
              </li>
            </>
          )}
          {user && (
                <>
                <li>
                  <NavLink
                    to="/posts/create"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                  >
                    Novo Post
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                  >
                    Dahsboard
                  </NavLink>
                </li>
              </>
          )}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Sobre
            </NavLink>
          </li>
          {user && (
            <li>
              <button onClick={logout}> Sair</button>
            </li>
          )}
        </ul>
      </NavLink>
    </nav>
  );
};

export default NavBar;
