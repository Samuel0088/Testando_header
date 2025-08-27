import { useState } from "react";
import style from "./Cabecalho.module.css";

const Cabecalho = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => setMenuAtivo((prev) => !prev);
  const fecharMenu = () => setMenuAtivo(false);

  return (
    <header className={style.Cabecalho}>
      <nav className={style.navBar}>
        {/* Logo */}
        <div className={style.logo}>
          <a href="../principal/index.html">Mobiliza Vida</a>
        </div>

        {/* Botão hamburguer */}
        <button
          className={style.hamburger}
          onClick={toggleMenu}
          aria-expanded={menuAtivo}
          aria-controls="menu-mobile"
          aria-label="Abrir menu"
          type="button"
        >
          <div></div>
          <div></div>
          <div></div>
        </button>

        {/* Menu Mobile */}
        <div
          id="menu-mobile"
          className={`${style.menuItems} ${menuAtivo ? style.active : ""}`}
          role="menu"
          aria-hidden={!menuAtivo}
        >
          <button
            className={style.close}
            onClick={fecharMenu}
            aria-label="Fechar menu"
            type="button"
          >
            ×
          </button>

          <div className={style.logoMenu}>
            <p>Mobiliza Vida</p>
          </div>

          <ul>
            <li><a href="../linhaEMTU/linhaEMTU.html">EMTU</a></li>
            <li><a href="../linhaSOU/linhaSOU.html">SOU</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">Tempo real</a></li>
          </ul>
        </div>
      </nav>

      {/* Overlay para fechar o menu ao clicar fora */}
      <div
        className={`${style.overlay} ${menuAtivo ? style.show : ""}`}
        onClick={fecharMenu}
        aria-hidden={!menuAtivo}
      />
    </header>
  );
};

export { Cabecalho };
