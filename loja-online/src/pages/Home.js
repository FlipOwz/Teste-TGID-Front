import { useEffect, useState } from 'react';
import axios from 'axios';
import ProdutoCard from '../components/ProdutoCard';

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/produtos')
      .then((res) => setProdutos(res.data));
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      {produtos.map(prod => (
        <ProdutoCard key={prod.id} produto={prod} />
      ))}
    </div>
  );
}
