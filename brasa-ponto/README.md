# Brasa & Ponto Espetaria

Site comercial completo e moderno para o estabelecimento fictício **Brasa & Ponto Espetaria**, localizado em Porto Nacional - TO.

Projeto desenvolvido para portfólio de desenvolvimento web.

## 🔥 Sobre o Projeto

Site one-page responsivo com:

- Página inicial com hero impactante
- Cardápio completo com categorias e filtros
- Sistema de carrinho funcional (localStorage)
- Checkout com geração de pedido via WhatsApp
- Seções: Sobre, Avaliações, Localização e Contato
- Design moderno, mobile-first e profissional

## 🚀 Como usar

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Ou sirva a pasta com um servidor local:

```bash
# Com Python
python -m http.server 8000

# Com Node (npx)
npx serve .
```

Acesse: `http://localhost:8000`

## 📁 Estrutura

```
brasa-ponto/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos
├── js/
│   └── script.js       # Lógica do carrinho e interações
├── assets/             # Pasta para assets locais (opcional)
└── README.md
```

## ⚙️ Configurações importantes

No arquivo `js/script.js`, altere o número de WhatsApp:

```js
const WHATSAPP_NUMBER = '5563999999999'; // 55 + DDD + número
```

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (variáveis, Grid, Flexbox, animações)
- JavaScript vanilla (sem frameworks)
- Font Awesome (ícones)
- Google Fonts (Inter + Playfair Display)
- Imagens via Unsplash

## 📱 Responsivo

Testado mentalmente e estruturado para:

- Desktop
- Notebook
- Tablet
- Smartphone

## 📝 Observações

- Todo o conteúdo é **fictício**
- Preços e dados são demonstrativos
- O site não possui backend (pedido vai para WhatsApp)
- Ideal para demonstração de front-end em portfólio

---

© 2026 Brasa & Ponto Espetaria — Projeto de portfólio
