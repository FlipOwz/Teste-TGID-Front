# 🛍️ Loja Online React

Este é um projeto simples de loja online criado com **React.js** e **JSON Server**, que simula uma API REST para listar produtos, visualizar detalhes e adicionar itens ao carrinho.

## 🚀 Tecnologias Utilizadas

- ⚛️ React.js
- 📦 JSON Server (API fake)
- 💅 CSS Responsivo
- 📂 React Router DOM
- 💡 Context API (para o carrinho de compras)

---

## 📦 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/loja-online.git
cd loja-online
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor JSON (porta 3001)

```bash
npx json-server --watch dbTeste.json --port 3001
```
Este comando simula uma API REST acessível em: http://localhost:3001/produtos

### 4. Inicie o app React (porta 3000)

```bash
npm start
```

### 📁 Exemplo de Dados da API

```json
{
  "produtos": [
    {
      "id": 1,
      "nome": "Camisa Básica",
      "descricao": "Camisa confortável de algodão",
      "preco": 49.9,
      "imagem": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80"
    },
    {
      "id": 2,
      "nome": "Calça Jeans",
      "descricao": "Calça jeans azul claro",
      "preco": 89.9,
      "imagem": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 3,
      "nome": "Tênis Esportivo",
      "descricao": "Tênis confortável para o dia a dia",
      "preco": 129.9,
      "imagem": "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
}

```

### 🛒 Funcionalidades

- ✅ Listagem de produtos na Home

- ✅ Visualização de detalhes do produto

- ✅ Carrinho com quantidade e total

- ✅ Layout responsivo (1 ou 2 colunas dependendo da tela)

- ✅ Context API para gerenciar o carrinho

### Feito por Felipe Galvão