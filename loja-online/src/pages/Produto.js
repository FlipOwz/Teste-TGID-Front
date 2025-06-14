// src/pages/Produto.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCarrinho } from '../context/CarrinhoContext';
import './Produto.css';
import './Pages.css';

function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const { adicionarAoCarrinho } = useCarrinho();

  useEffect(() => {
    fetch(`http://localhost:3001/produtos/${id}`)
      .then(res => res.json())
      .then(data => setProduto(data));
  }, [id]);

  if (!produto) return <p className="carregando">Carregando...</p>;

  return (
    <div className="produto-container">
      <div className="produto-card">
        <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
        <div className="produto-info">
          <h1>{produto.nome}</h1>
          <p className="descricao">{produto.descricao}</p>
          <p className="preco">Preço: R$ {produto.preco.toFixed(2)}</p>
          <button class="botao" onClick={() => {
            adicionarAoCarrinho(produto);
            alert('Produto adicionado ao carrinho!');
            }}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default Produto;
