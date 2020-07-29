import React from 'react';
import Logo from '../../assets/img/logonormalG.png';
import './menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
      <img className="Logo" src={Logo} alt="Matrixflix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;