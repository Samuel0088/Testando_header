import { useState } from "react";
import style from "./Cabecalho.module.css";

const Cabecalho = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => setMenuAtivo((v) => !v);
  const fechar = () => setMenuAtivo(false);

  return (
    <div className={style.Cabecalho}>
      <nav className={style.navBar}>
        {/* LOGO PRINCIPAL */}
        <div className={style.logo}>
          <a href="../principal/index.html">Mobiliza Vida</a>
        </div>

        {/* BOTÃO HAMBURGUER */}
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

        {/* MENU MOBILE */}
        <ul
          id="menu-mobile"
          className={`${style.menuItems} ${menuAtivo ? style.active : ""}`}
          role="menu"
          aria-hidden={!menuAtivo}
        >
          <li>
            <button
              className={style.close}
              onClick={fechar}
              aria-label="Fechar menu"
              type="button"
            >
              ×
            </button>
          </li>

          <li className={style.logoMenu}>
            <p>Mobiliza Vida</p>
          </li>

          <li><a href="../linhaEMTU/linhaEMTU.html">EMTU</a></li>
          <li><a href="../linhaSOU/linhaSOU.html">SOU</a></li>
          <li><a href="#">Status</a></li>
          <li><a href="#">Tempo real</a></li>
        </ul>
      </nav>

      {/* SOBREPOSIÇÃO FUNDO */}
      <div
        className={`${style.overlay} ${menuAtivo ? style.show : ""}`}
        onClick={fechar}
        aria-hidden={!menuAtivo}
      />
    </div>
  );
};

export { Cabecalho };
