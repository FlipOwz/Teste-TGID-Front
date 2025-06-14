import React from 'react';
import { Link } from 'react-router-dom';
import CarrinhoResumo from './CarrinhoResumo';
import './Menu.css';

function Menu() {
  return (
    <nav className="menu">
      <Link to="/">🏠 Início</Link>
      <Link to="/carrinho">🛒 Carrinho</Link>
      <CarrinhoResumo />
    </nav>
  );
}

export default Menu;
