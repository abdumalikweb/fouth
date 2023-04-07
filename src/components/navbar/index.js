import React from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import logo from "../.././assets/imges/header/logo.svg";
import heart from "../.././assets/imges/header/heart.svg";

import "./navbar.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <Container>
          <div className="container">
            <div className="navbar">
              <div className="logo_header">
                <NavLink to="/">
                  <img src={logo} alt="" />
                </NavLink>
              </div>
              <div className="nav">
                <nav>
                  <ul>
                    <li>
                      <a href="index.html">Пицца</a>
                    </li>
                    <li>
                      <a href="index.html">Суши</a>
                    </li>
                    <li>
                      <a href="index.html">Напитки</a>
                    </li>
                    <li>
                      <a href="index.html">Закуски</a>
                    </li>
                    <li>
                      <a href="index.html">Комбо</a>
                    </li>
                    <li>
                      <a href="index.html">Десерты</a>
                    </li>
                    <li>
                      <a href="index.html">Соусы</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="cart">
                <NavLink to="/card">
                  <button>Card</button>
                </NavLink>
                <NavLink to= "/like">
                  <img src={heart} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
