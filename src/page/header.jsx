import styleHeader from "../style/header.module.css";
import styleButton from "../style/styleButtons.module.css";
import menuIcon from "../assets/iconHeader.png";
import { username } from "../data/user.js";
import { useState } from "react";

export const Header = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const [menuClose, setMenuClose] = useState(true);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
    setMenuClicked(!menuClicked);
    setMenuClose(!showButtons);
  };
  return (
    <header className={styleHeader.header}>
      <div className={styleHeader.headerContainer}>
        <h1>{username}</h1>
        <div className={styleHeader.menuIcon} onClick={toggleButtons}>
          <img
            src={menuIcon}
            alt="Menu"
            className={`${styleButton.menuButton} ${
              menuClicked ? styleHeader.rotateMenuIcon : ""
            } ${menuClose ? "" : styleHeader.rotateMenuIconClose}`}
          />
        </div>
        <ul
          className={`${styleHeader.headerButtons} ${
            showButtons ? `${styleHeader.show} ${styleHeader.slideIn}` : ""
          }`}
        >
          <a href="#banner" className={styleButton.buttonHeader}>
            Home
          </a>
          <a href="#projects" className={styleButton.buttonHeader}>
            Projetos
          </a>
          <a href="#footer" className={styleButton.buttonHeader}>
            Contatos
          </a>
        </ul>
      </div>
    </header>
  );
};
