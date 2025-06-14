import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produto from './pages/Produto';
import Carrinho from './pages/Carrinho';
import Menu from './components/Menu';
import { CarrinhoProvider } from './context/CarrinhoContext';

function App() {
  return (
    <CarrinhoProvider>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </Router>
    </CarrinhoProvider>
  );
}
export default App;
