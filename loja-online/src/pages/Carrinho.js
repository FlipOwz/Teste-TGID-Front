// src/pages/Carrinho.js
import React from 'react';
import { useCarrinho } from '../context/CarrinhoContext';
import './Carrinho.css';

function Carrinho() {
  const { carrinho, removerDoCarrinho } = useCarrinho();

  // Agrupar produtos por ID
  const produtosAgrupados = carrinho.reduce((acc, item) => {
    const encontrado = acc.find(p => p.id === item.id);
    if (encontrado) {
      encontrado.quantidade += 1;
    } else {
      acc.push({ ...item, quantidade: 1 });
    }
    return acc;
  }, []);

  const total = produtosAgrupados.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <div className="carrinho-container">
      <h1>🛒 Carrinho de Compras</h1>
      {produtosAgrupados.map(item => (
        <div className="carrinho-item" key={item.id}>
          <h3>{item.nome} {item.quantidade > 1 && `x${item.quantidade}`}</h3>
          <p>Preço unitário: R$ {item.preco.toFixed(2)}</p>
          <p>Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}</p>
          <button className="btn" onClick={() => removerDoCarrinho(item.id)}>Remover</button>
        </div>
      ))}
      <h2>Total: R$ {total.toFixed(2)}</h2>
    </div>
  );
}

export default Carrinho;
