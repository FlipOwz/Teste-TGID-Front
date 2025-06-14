// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Pages.css';

function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/produtos')
      .then(res => res.json())
      .then(data => setProdutos(data));
  }, []);

  return (
    <div className="home-container">
      <h1>Seja bem-vindo!</h1>
      <p>Esta é uma loja de teste para utilização do React e Json.</p>

      <h2>🛍️ Nossos Produtos</h2>
      <div className="produtos-grid">
        {produtos.map(produto => (
          <div className="produto-card" key={produto.id}>
            <img
              src={produto.imagem || 'https://via.placeholder.com/300x300?text=Produto'}
              alt={produto.nome}
              className="produto-imagem"
            />
            <h2>{produto.nome}</h2>
            <p>R$ {produto.preco.toFixed(2)}</p>
            <Link to={`/produto/${produto.id}`} className="btn">
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
