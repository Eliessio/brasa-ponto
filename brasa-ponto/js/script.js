/* ===== Brasa & Ponto - Script ===== */
/* Número de WhatsApp (fácil de alterar) */
const WHATSAPP_NUMBER = '5563992120651'; // Formato: 55 + DDD + número

/* ===== Produtos ===== */
const products = [
  // Espetinhos
  {
    id: 1,
    name: 'Espetinho de Carne',
    desc: 'Carne bovina selecionada, temperada na medida e grelhada na brasa.',
    price: 9.00,
    category: 'espetinhos',
    img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80',
    popular: true
  },
  {
    id: 2,
    name: 'Espetinho de Frango',
    desc: 'Peito de frango suculento com tempero especial da casa.',
    price: 8.00,
    category: 'espetinhos',
    img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80',
    popular: false
  },
  {
    id: 3,
    name: 'Espetinho de Frango com Bacon',
    desc: 'Frango envolvido em bacon crocante. O favorito da casa!',
    price: 10.00,
    category: 'espetinhos',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    popular: true
  },
  {
    id: 4,
    name: 'Espetinho de Calabresa',
    desc: 'Calabresa defumada grelhada com um toque de limão.',
    price: 8.00,
    category: 'espetinhos',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
    popular: false
  },
  {
    id: 5,
    name: 'Espetinho de Queijo Coalho',
    desc: 'Queijo coalho dourado na brasa, crocante por fora e macio por dentro.',
    price: 9.00,
    category: 'espetinhos',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    popular: false
  },
  // Combos
  {
    id: 6,
    name: 'Combo Brasa',
    desc: '4 espetinhos à escolha + batata frita + refrigerante lata.',
    price: 39.90,
    category: 'combos',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
    popular: true
  },
  {
    id: 7,
    name: 'Combo Família',
    desc: '8 espetinhos + 2 porções de batata + 2 refrigerantes 2L.',
    price: 79.90,
    category: 'combos',
    img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80',
    popular: false
  },
  {
    id: 8,
    name: 'Combo Solo',
    desc: '2 espetinhos + batata pequena + refrigerante lata.',
    price: 24.90,
    category: 'combos',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    popular: false
  },
  // Marmitex
  {
    id: 9,
    name: 'Marmitex Especial',
    desc: 'Arroz, feijão, farofa, salada e 2 espetinhos à escolha.',
    price: 24.90,
    category: 'marmitex',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
    popular: true
  },
  {
    id: 10,
    name: 'Marmitex Tradicional',
    desc: 'Arroz, feijão, farofa, salada e 1 espetinho.',
    price: 19.90,
    category: 'marmitex',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    popular: false
  },
  {
    id: 11,
    name: 'Marmitex Executiva',
    desc: 'Arroz, feijão, batata frita, salada e filé grelhado.',
    price: 27.90,
    category: 'marmitex',
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
    popular: false
  },
  // Hambúrgueres
  {
    id: 12,
    name: 'X-Bacon',
    desc: 'Hambúrguer artesanal 180g, queijo, bacon crocante, alface e molho especial.',
    price: 22.90,
    category: 'hamburgueres',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    popular: true
  },
  {
    id: 13,
    name: 'X-Tudo',
    desc: 'Hambúrguer, queijo, bacon, ovo, presunto, alface, tomate e molho.',
    price: 26.90,
    category: 'hamburgueres',
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80',
    popular: false
  },
  {
    id: 14,
    name: 'Smash Burger',
    desc: 'Dois blends smash 90g, queijo cheddar derretido e cebola caramelizada.',
    price: 24.90,
    category: 'hamburgueres',
    img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80',
    popular: false
  },
  // Porções
  {
    id: 15,
    name: 'Batata Frita com Cheddar e Bacon',
    desc: 'Batata crocante coberta com cheddar cremoso e bacon crocante.',
    price: 19.90,
    category: 'porcoes',
    img: 'https://images.unsplash.com/photo-1573080496689-880f3e96bba0?w=600&q=80',
    popular: true
  },
  {
    id: 16,
    name: 'Porção de Calabresa',
    desc: 'Calabresa acebolada com limão. Serve 2 pessoas.',
    price: 22.90,
    category: 'porcoes',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    popular: false
  },
  {
    id: 17,
    name: 'Porção Mista',
    desc: 'Espetinhos sortidos + batata frita. Ideal para dividir.',
    price: 34.90,
    category: 'porcoes',
    img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80',
    popular: false
  },
  // Bebidas
  {
    id: 18,
    name: 'Coca-Cola Lata',
    desc: 'Lata 350ml gelada.',
    price: 6.00,
    category: 'bebidas',
    img: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600&q=80',
    popular: false
  },
  {
    id: 19,
    name: 'Guaraná Lata',
    desc: 'Lata 350ml gelada.',
    price: 5.00,
    category: 'bebidas',
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80',
    popular: false
  },
  {
    id: 20,
    name: 'Água Mineral',
    desc: 'Garrafa 500ml sem gás.',
    price: 3.50,
    category: 'bebidas',
    img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80',
    popular: false
  },
  {
    id: 21,
    name: 'Suco Natural 400ml',
    desc: 'Laranja, abacaxi ou maracujá. Feito na hora.',
    price: 8.00,
    category: 'bebidas',
    img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80',
    popular: false
  }
];

/* ===== Estado do Carrinho ===== */
let cart = JSON.parse(localStorage.getItem('brasaCart')) || [];

/* ===== Elementos DOM ===== */
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartCount = document.getElementById('cartCount');
const cartBody = document.getElementById('cartBody');
const cartEmpty = document.getElementById('cartEmpty');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const btnCheckout = document.getElementById('btnCheckout');
const btnClearCart = document.getElementById('btnClearCart');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutClose = document.getElementById('checkoutClose');
const checkoutForm = document.getElementById('checkoutForm');
const successModal = document.getElementById('successModal');
const successClose = document.getElementById('successClose');
const toast = document.getElementById('toast');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const navOverlay = document.getElementById('navOverlay');
const header = document.getElementById('header');

/* ===== Inicialização ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderMaisPedidos();
  renderCardapio('todos');
  updateCartUI();
  setupEventListeners();
  setupCategoryTabs();
  setupScrollHeader();
  setupSmoothScroll();
});

/* ===== Renderização ===== */
function renderMaisPedidos() {
  const grid = document.getElementById('maisPedidosGrid');
  const populares = products.filter(p => p.popular);
  grid.innerHTML = populares.map((p, i) => createProductCard(p, i)).join('');
  attachAddButtons(grid);
}

function renderCardapio(category) {
  const grid = document.getElementById('cardapioGrid');
  const filtered = category === 'todos' 
    ? products 
    : products.filter(p => p.category === category);
  
  grid.innerHTML = filtered.map((p, i) => createProductCard(p, i)).join('');
  attachAddButtons(grid);
}

function createProductCard(product, index) {
  return `
    <article class="product-card" style="animation-delay: ${index * 0.05}s">
      <div class="product-img">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
        ${product.popular ? '<span class="product-badge">Mais pedido</span>' : ''}
      </div>
      <div class="product-body">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="product-footer">
          <span class="product-price">${formatPrice(product.price)}</span>
          <button class="btn-add" data-id="${product.id}" aria-label="Adicionar ${product.name} ao pedido">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

function attachAddButtons(container) {
  container.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      addToCart(id);
      btn.classList.add('added');
      btn.innerHTML = '<i class="fas fa-check"></i>';
      setTimeout(() => {
        btn.classList.remove('added');
        btn.innerHTML = '<i class="fas fa-plus"></i>';
      }, 1200);
    });
  });
}

/* ===== Carrinho ===== */
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  
  saveCart();
  updateCartUI();
  showToast(`${product.name} adicionado!`, 'success');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
  showToast('Item removido', 'success');
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast('Carrinho limpo', 'success');
}

function saveCart() {
  localStorage.setItem('brasaCart', JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  cartCount.textContent = count;
  cartCount.classList.toggle('show', count > 0);
  
  if (cart.length === 0) {
    cartEmpty.style.display = 'flex';
    cartItems.innerHTML = '';
    cartFooter.style.display = 'none';
  } else {
    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'flex';
    
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${formatPrice(item.price)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" data-action="minus" data-id="${item.id}" aria-label="Diminuir">
              <i class="fas fa-minus"></i>
            </button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" data-action="plus" data-id="${item.id}" aria-label="Aumentar">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <button class="cart-item-remove" data-id="${item.id}" aria-label="Remover">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `).join('');
    
    // Eventos dos botões de qty e remove
    cartItems.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const delta = btn.dataset.action === 'plus' ? 1 : -1;
        updateQty(id, delta);
      });
    });
    
    cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromCart(parseInt(btn.dataset.id));
      });
    });
    
    const total = getCartTotal();
    cartSubtotal.textContent = formatPrice(total);
    cartTotal.textContent = formatPrice(total);
  }
}

/* ===== Checkout ===== */
function openCheckout() {
  if (cart.length === 0) {
    showToast('Adicione itens ao carrinho', 'error');
    return;
  }
  
  closeCart();
  renderOrderSummary();
  checkoutModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  checkoutModal.classList.remove('open');
  document.body.style.overflow = '';
}

function renderOrderSummary() {
  const summary = document.getElementById('orderSummary');
  const total = getCartTotal();
  
  summary.innerHTML = `
    <h4>Resumo do pedido</h4>
    ${cart.map(item => `
      <div class="summary-item">
        <span>${item.qty}x ${item.name}</span>
        <span>${formatPrice(item.price * item.qty)}</span>
      </div>
    `).join('')}
    <div class="summary-total">
      <span>Total</span>
      <span>${formatPrice(total)}</span>
    </div>
  `;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  
  const nome = document.getElementById('clienteNome').value.trim();
  const tel = document.getElementById('clienteTel').value.trim();
  const entrega = document.querySelector('input[name="entrega"]:checked').value;
  const endereco = document.getElementById('clienteEndereco').value.trim();
  const obs = document.getElementById('clienteObs').value.trim();
  const pagamento = document.querySelector('input[name="pagamento"]:checked').value;
  
  if (!nome || !tel) {
    showToast('Preencha nome e telefone', 'error');
    return;
  }
  
  if (entrega === 'delivery' && !endereco) {
    showToast('Informe o endereço para delivery', 'error');
    return;
  }
  
  // Monta mensagem WhatsApp
  const total = getCartTotal();
  let msg = `🔥 *NOVO PEDIDO - Brasa & Ponto*\n\n`;
  msg += `👤 *Cliente:* ${nome}\n`;
  msg += `📱 *Telefone:* ${tel}\n`;
  msg += `🚚 *Entrega:* ${entrega === 'delivery' ? 'Delivery' : 'Retirada no local'}\n`;
  if (entrega === 'delivery') {
    msg += `📍 *Endereço:* ${endereco}\n`;
  }
  msg += `💳 *Pagamento:* ${formatPagamento(pagamento)}\n`;
  if (obs) {
    msg += `📝 *Obs:* ${obs}\n`;
  }
  msg += `\n📦 *Itens:*\n`;
  cart.forEach(item => {
    msg += `• ${item.qty}x ${item.name} — ${formatPrice(item.price * item.qty)}\n`;
  });
  msg += `\n💰 *Total: ${formatPrice(total)}*`;
  
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  
  // Limpa carrinho e mostra sucesso
  cart = [];
  saveCart();
  updateCartUI();
  closeCheckout();
  
  // Abre WhatsApp
  window.open(url, '_blank');
  
  // Modal de sucesso
  successModal.classList.add('open');
}

function formatPagamento(val) {
  const map = { pix: 'Pix', dinheiro: 'Dinheiro', cartao: 'Cartão' };
  return map[val] || val;
}

/* ===== Helpers ===== */
function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function showToast(message, type = 'success') {
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('show');
  document.body.style.overflow = '';
}

function toggleMenu() {
  const isOpen = nav.classList.toggle('open');
  menuToggle.classList.toggle('active', isOpen);
  navOverlay.classList.toggle('show', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMenu() {
  nav.classList.remove('open');
  menuToggle.classList.remove('active');
  navOverlay.classList.remove('show');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* ===== Event Listeners ===== */
function setupEventListeners() {
  // Cart
  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  btnClearCart.addEventListener('click', clearCart);
  btnCheckout.addEventListener('click', openCheckout);
  
  // Hero button
  document.getElementById('openCartHero')?.addEventListener('click', openCart);
  document.getElementById('goToMenu')?.addEventListener('click', () => {
    closeCart();
  });
  
  // Checkout
  checkoutClose.addEventListener('click', closeCheckout);
  checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  
  // Entrega toggle
  document.querySelectorAll('input[name="entrega"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const group = document.getElementById('enderecoGroup');
      group.style.display = radio.value === 'delivery' && radio.checked ? 'block' : 'none';
      if (radio.value === 'delivery') {
        document.getElementById('clienteEndereco').required = true;
      } else {
        document.getElementById('clienteEndereco').required = false;
      }
    });
  });
  
  // Success
  successClose.addEventListener('click', () => {
    successModal.classList.remove('open');
  });
  
  // Menu mobile
  menuToggle.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', closeMenu);
  
  // Fecha menu ao clicar em link
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Contato form
  document.getElementById('contatoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
    e.target.reset();
  });
  
  // Fecha modais com Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeCheckout();
      closeMenu();
      successModal.classList.remove('open');
    }
  });
}

function setupCategoryTabs() {
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderCardapio(tab.dataset.category);
    });
  });
}

function setupScrollHeader() {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    
    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
