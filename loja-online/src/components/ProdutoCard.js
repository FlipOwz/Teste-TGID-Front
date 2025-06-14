import { Link } from 'react-router-dom';

export default function ProdutoCard({ produto }) {
  return (
    <div>
      <img src={produto.imagem} alt={produto.nome} />
      <h2>{produto.nome}</h2>
      <p>R$ {produto.preco.toFixed(2)}</p>
      <Link to={`/produto/${produto.id}`}>Ver mais</Link>
    </div>
  );
}
