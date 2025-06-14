import React from 'react';
import { useCarrinho } from '../context/CarrinhoContext';

function CarrinhoResumo() {
  const { carrinho } = useCarrinho();
  const total = carrinho.reduce((soma, p) => soma + p.preco, 0);

  return (
    <span style={{ color: '#fff' }}>
      Itens: {carrinho.length} | Total: R$ {total.toFixed(2)}
    </span>
  );
}

export default CarrinhoResumo;
