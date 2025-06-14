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
      "imagem": "https://via.placeholder.com/250x250"
    },
    {
      "id": 2,
      "nome": "Calça Jeans",
      "descricao": "Calça jeans azul escuro",
      "preco": 89.9,
      "imagem": "https://via.placeholder.com/250x250"
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