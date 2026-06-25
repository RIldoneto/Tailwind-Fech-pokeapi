# PokéMundi - Pokédex Explorer

Projeto desenvolvido para a disciplina de **Desenvolvimento Web**.

---

## 📋 Descrição

PokéMundi é uma Pokédex interativa que consome a **PokeAPI** pública para buscar informações de Pokémon. O usuário pode pesquisar pelo nome do Pokémon e visualizar sua imagem, status base e alguns movimentos.

---

## 🎯 Objetivos do Projeto

- Consumir uma API pública usando `fetch`
- Apresentar os dados de forma responsiva e estilizada
- Utilizar Tailwind CSS
- Documentar decisões técnicas e limitações

---

## 🛠 Tecnologias Utilizadas

- **HTML5**
- **Tailwind CSS** (via CDN)
- **JavaScript (Vanilla)**
- **PokeAPI** (API pública)

---

## 🚀 Como Executar

1. Baixe ou clone o repositório
2. Coloque os arquivos na mesma pasta:
   - `index.html`
   - `busca.html`
   - `core.js`
3. Abra o arquivo `index.html` no navegador

**Não é necessário instalar nada.**

---


---

## 🔧 Decisões Técnicas

- **API escolhida**: [PokeAPI](https://pokeapi.co/) - Gratuita, estável e bem documentada.
- **Estilização**: Tailwind CSS via CDN (sem necessidade de build ou instalação).
- **Design**: Simples, clean e responsivo (mobile-first).
- **Funcionalidades**:
  - Busca por nome
  - Exibição da imagem oficial
  - Status base (HP, Attack, Defense, etc.)
  - Lista de movimentos
  - Navegação entre telas

---

## ⚠️ Limitações

- A PokeAPI não possui imagens de alta qualidade para todos os Pokémon.
- Apenas os primeiros 8 movimentos são exibidos (limitação para manter a interface limpa).
- Não há sistema de favoritos ou histórico de buscas.
- Não possui tratamento avançado de erros (ex: rate limit).
- Não funciona offline.

---

## 🔮 Possíveis Melhorias Futuras

- Adicionar filtro por tipo
- Sistema de favoritos (localStorage)
- Página de detalhes completa
- Modo dark/light
- Busca por ID ou geração
- Cache de resultados

---

## 📌 API Utilizada

**PokeAPI**  
Documentação: [https://pokeapi.co/](https://pokeapi.co/)

Endpoint principal:
```http
GET https://pokeapi.co/api/v2/pokemon/{nome}
