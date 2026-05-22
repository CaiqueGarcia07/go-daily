export const FLAVORS = [
  { id: 'caramelo', label: 'Caramelo Salgado', emoji: '🍯', color: '#C8742F' },
  { id: 'frutas',   label: 'Frutas Vermelhas', emoji: '🍓', color: '#C0392B' },
  { id: 'morango',  label: 'Morango',          emoji: '🍓', color: '#E91E8C' },
  { id: 'maca',     label: 'Maçã Verde',       emoji: '🍏', color: '#27AE60' },
];

export const PRODUCTS = [
  {
    id: 'whey-gummy-caramelo',
    name: 'Whey Gummy',
    flavor: 'Caramelo Salgado',
    flavorEmoji: '🍯',
    flavorColor: '#C8742F',
    category: 'gummy',
    price: 149.9,
    oldPrice: 189.9,
    discount: '-21%',
    badge: '🔥 -21%',
    badgeType: 'yellow',
    rating: 4.9,
    reviews: 312,
    attrs: ['12g Proteína', 'Zero Glúten', 'Zero Açúcar'],
    installments: '3× de R$ 49,97',
    img: null,
  },
  {
    id: 'whey-gummy-frutas',
    name: 'Whey Gummy',
    flavor: 'Frutas Vermelhas',
    flavorEmoji: '🍓',
    flavorColor: '#C0392B',
    category: 'gummy',
    price: 149.9,
    oldPrice: 189.9,
    discount: '-21%',
    badge: '🔥 -21%',
    badgeType: 'yellow',
    rating: 4.9,
    reviews: 287,
    attrs: ['12g Proteína', 'Zero Glúten', 'Zero Açúcar'],
    installments: '3× de R$ 49,97',
    img: null,
  },
  {
    id: 'whey-gummy-morango',
    name: 'Whey Gummy',
    flavor: 'Morango',
    flavorEmoji: '🍓',
    flavorColor: '#E91E8C',
    category: 'gummy',
    price: 149.9,
    oldPrice: null,
    discount: null,
    badge: '🆕 NOVO',
    badgeType: 'orange',
    rating: 4.8,
    reviews: 94,
    attrs: ['12g Proteína', 'Zero Glúten', 'Zero Açúcar'],
    installments: '3× de R$ 49,97',
    img: null,
  },
  {
    id: 'whey-gummy-maca',
    name: 'Whey Gummy',
    flavor: 'Maçã Verde',
    flavorEmoji: '🍏',
    flavorColor: '#27AE60',
    category: 'gummy',
    price: 149.9,
    oldPrice: null,
    discount: null,
    badge: '🆕 NOVO',
    badgeType: 'orange',
    rating: 4.7,
    reviews: 61,
    attrs: ['12g Proteína', 'Zero Glúten', 'Zero Açúcar'],
    installments: '3× de R$ 49,97',
    img: null,
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Ana Paula M.',
    avatar: 'A',
    date: '12 mai. 2025',
    rating: 5,
    flavor: 'Caramelo Salgado',
    flavorEmoji: '🍯',
    text: '"Simplesmente incrível! Não acreditava que uma bala poderia ter tanta proteína e ser tão gostosa. O sabor de caramelo salgado é perfeito — não é enjoativo e dá aquela sensação especial."',
    helpful: 42,
  },
  {
    id: 2,
    name: 'Rodrigo S.',
    avatar: 'R',
    date: '8 mai. 2025',
    rating: 5,
    flavor: 'Frutas Vermelhas',
    flavorEmoji: '🍓',
    text: '"Comprei o sabor frutas vermelhas e me surpreendi. Levo sempre pra academia — é muito prático e substitui aquele biscoito que eu comia antes do treino. Vale cada centavo."',
    helpful: 38,
  },
  {
    id: 3,
    name: 'Juliana C.',
    avatar: 'J',
    date: '2 mai. 2025',
    rating: 5,
    flavor: 'Morango',
    flavorEmoji: '🍓',
    text: '"Já é o terceiro pote que compro! O morango é meu favorito. Entrega super rápida e embalagem impecável. Recomendo para toda a família — com orientação nutricional, claro!"',
    helpful: 29,
  },
];

export const HOW_STEPS = [
  {
    step: 'PASSO 01',
    icon: '🛒',
    title: 'Escolha seu sabor',
    desc: 'Caramelo Salgado, Frutas Vermelhas, Morango ou Maçã Verde. Ou leve o kit completo com os 4 sabores.',
  },
  {
    step: 'PASSO 02',
    icon: '📦',
    title: 'Receba em casa',
    desc: 'Entrega para todo o Brasil em até 72h. Frete grátis em pedidos acima de R$ 199.',
  },
  {
    step: 'PASSO 03',
    icon: '🍬',
    title: 'Coma 4 balas',
    desc: 'Uma porção de 4 balas entrega 12g de proteína. Consuma antes, durante ou após o treino.',
  },
  {
    step: 'PASSO 04',
    icon: '💪',
    title: 'Sinta os resultados',
    desc: 'Proteína de qualidade para suporte muscular, recuperação e performance diária.',
  },
];

export const BENEFITS = [
  {
    icon: '💪',
    title: '12g de Proteína por porção',
    desc: 'Cada porção de 4 balas entrega 12g de proteína de alta qualidade para suportar sua musculatura e performance.',
  },
  {
    icon: '🌾',
    title: 'Zero Glúten e Zero Açúcar',
    desc: 'Apenas 4,8g de carboidratos por porção. Zero adição de açúcar. Ideal para dietas com ingestão controlada.',
  },
  {
    icon: '🕒',
    title: 'Praticidade total',
    desc: 'Sem preparo, sem shaker. Leve no bolso, na bolsa da academia ou na mochila do trabalho.',
  },
  {
    icon: '🏅',
    title: 'Certificado ANVISA',
    desc: 'Produzido com controle rigoroso de qualidade e rastreabilidade em cada lote fabricado.',
  },
];

export const TRUST_ITEMS = [
  { icon: '🚚', label: 'Frete Grátis',       sub: 'Acima de R$ 199' },
  { icon: '🔒', label: 'Pagamento Seguro',   sub: 'SSL & PCI certificado' },
  { icon: '↩️', label: 'Devolução Fácil',    sub: 'Até 30 dias' },
  { icon: '🏅', label: 'Qualidade Premium',  sub: 'Certificado ANVISA' },
];

export const ACCORDION_ITEMS = [
  {
    title: 'Modo de uso e conservação',
    body: 'Consuma de 4 a 8 balas ao dia ou conforme orientação profissional. Conservar em local fresco, seco e ao abrigo da luz. Consumir em 30 dias após aberto. Manter até 30°C.',
  },
  {
    title: 'Informação nutricional completa',
    body: '<strong>Porções:</strong> 40 · <strong>Porção:</strong> 20g (3 gomas)<br><br>Energia: 56kcal | Carboidratos: 4,8g | Açúcares: 0g | Proteínas: 12g | Fibras: 0,5g<br><br>Ingredientes: Proteína do Soro do Leite (Whey), Gelatina, Aromatizante artificial, Corante, Edulcorante Sucralose.',
  },
  {
    title: 'Política de devolução',
    body: 'Devolução em até 30 dias após recebimento, desde que o produto esteja lacrado e em perfeitas condições. Entre em contato pelo SAC para iniciar o processo.',
  },
];

export const RATING_BARS = [
  { stars: 5, count: 1043, pct: 95 },
  { stars: 4, count: 41,   pct: 4  },
  { stars: 3, count: 9,    pct: 1  },
  { stars: 2, count: 4,    pct: 0  },
  { stars: 1, count: 3,    pct: 0  },
];

export const FOOTER_COLS = [
  {
    title: 'Produtos',
    links: [
      { label: 'Whey Gummy', href: '#produto' },
      { label: 'Kit 4 Sabores', href: '#promo' },
      { label: 'Novidades', href: '#' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nós', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Imprensa', href: '#' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Rastrear pedido', href: '#' },
      { label: 'Contato', href: '#' },
    ],
  },
];
