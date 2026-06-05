"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "ASTRAL WOOD",
    price: "R$ 349,90",
    tag: "NOVO",
    tagColor: "#F57C00",
    colors: ["#8B4513", "#D2691E", "#1a1a1a", "#F5B041"],
    bgGradient:
      "linear-gradient(145deg, #2d1a08 0%, #1a0f04 50%, #0d0a06 100%)",
    accentColor: "rgba(245, 181, 65, 0.15)",
    glowColor: "rgba(245, 181, 65, 0.2)",
  },
  {
    id: 2,
    name: "ASTRAL SUNSET",
    price: "R$ 329,90",
    tag: "MAIS VENDIDO",
    tagColor: "#F57C00",
    colors: ["#F57C00", "#8B0000", "#1a1a1a", "#8B4513"],
    bgGradient:
      "linear-gradient(145deg, #2d0e00 0%, #1a0800 50%, #0d0505 100%)",
    accentColor: "rgba(245, 124, 0, 0.15)",
    glowColor: "rgba(245, 124, 0, 0.25)",
  },
  {
    id: 3,
    name: "ASTRAL OCEAN",
    price: "R$ 369,90",
    tag: "COLEÇÃO",
    tagColor: "#1D2B53",
    colors: ["#1D2B53", "#2E6B8A", "#1a1a1a"],
    bgGradient:
      "linear-gradient(145deg, #0a1020 0%, #060c18 50%, #050810 100%)",
    accentColor: "rgba(29, 43, 83, 0.3)",
    glowColor: "rgba(46, 107, 138, 0.2)",
  },
  {
    id: 4,
    name: "ASTRAL GOLD",
    price: "R$ 419,90",
    tag: "PREMIUM",
    tagColor: "#B8860B",
    colors: ["#B8860B", "#DAA520", "#1a1a1a", "#8B7355"],
    bgGradient:
      "linear-gradient(145deg, #1a1200 0%, #100c00 50%, #0a0800 100%)",
    accentColor: "rgba(184, 134, 11, 0.15)",
    glowColor: "rgba(218, 165, 32, 0.2)",
  },
  {
    id: 5,
    name: "ASTRAL SHADOW",
    price: "R$ 299,90",
    tag: "CLÁSSICO",
    tagColor: "#555",
    colors: ["#2a2a2a", "#444", "#1a1a1a"],
    bgGradient:
      "linear-gradient(145deg, #1a1a1a 0%, #111 50%, #0a0a0a 100%)",
    accentColor: "rgba(255, 255, 255, 0.05)",
    glowColor: "rgba(255, 255, 255, 0.08)",
  },
  {
    id: 6,
    name: "ASTRAL CORAL",
    price: "R$ 339,90",
    tag: "FEMININO",
    tagColor: "#C0392B",
    colors: ["#C0392B", "#E74C3C", "#1a1a1a", "#F57C00"],
    bgGradient:
      "linear-gradient(145deg, #2d0a08 0%, #1a0604 50%, #0d0302 100%)",
    accentColor: "rgba(192, 57, 43, 0.15)",
    glowColor: "rgba(231, 76, 60, 0.2)",
  },
];

const filters = ["TODOS", "MASCULINO", "FEMININO", "POLARIZADO", "LANÇAMENTO"];

function ProductCard({ product }: { product: typeof products[0] }) {
  const [liked, setLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div
      className="relative rounded-2xl overflow-hidden card-hover cursor-pointer"
      style={{
        background: "#141414",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Product visual area */}
      <div
        className="relative h-52 sm:h-56 flex items-center justify-center overflow-hidden"
        style={{ background: product.bgGradient }}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 80%, ${product.glowColor} 0%, transparent 65%)`,
          }}
        />

        {/* Sunglasses illustration */}
        <svg
          viewBox="0 0 260 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4/5 relative z-10"
          style={{ filter: `drop-shadow(0 0 12px ${product.glowColor})` }}
        >
          <rect x="5" y="20" width="105" height="72" rx="13" fill="rgba(0,0,0,0.7)" stroke={product.colors[selectedColor]} strokeWidth="2" />
          <rect x="150" y="20" width="105" height="72" rx="13" fill="rgba(0,0,0,0.7)" stroke={product.colors[selectedColor]} strokeWidth="2" />
          <rect x="8" y="23" width="99" height="66" rx="11" fill="url(#prod-lens)" fillOpacity="0.95" />
          <rect x="153" y="23" width="99" height="66" rx="11" fill="url(#prod-lens)" fillOpacity="0.95" />
          <ellipse cx="38" cy="40" rx="18" ry="9" fill="rgba(255,255,255,0.05)" />
          <ellipse cx="183" cy="40" rx="18" ry="9" fill="rgba(255,255,255,0.05)" />
          <path d="M110 56 Q130 46 150 56" stroke={product.colors[selectedColor]} strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M5 55 L-8 60" stroke={product.colors[selectedColor]} strokeWidth="3" strokeLinecap="round" />
          <path d="M255 55 L268 60" stroke={product.colors[selectedColor]} strokeWidth="3" strokeLinecap="round" />
          <defs>
            <linearGradient id="prod-lens" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
              <stop stopColor="#0a0a0a" />
              <stop offset="1" stopColor="#1a1005" />
            </linearGradient>
          </defs>
        </svg>

        {/* Tag */}
        <div
          className="absolute top-3 left-3 text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full"
          style={{ background: product.tagColor }}
        >
          {product.tag}
        </div>

        {/* Heart */}
        <button
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            background: "rgba(0,0,0,0.5)",
            border: liked ? "1px solid rgba(245,124,0,0.5)" : "1px solid rgba(255,255,255,0.1)",
          }}
          onClick={() => setLiked(!liked)}
          aria-label="Favoritar"
        >
          <svg width="14" height="14" fill={liked ? "#F57C00" : "none"} stroke={liked ? "#F57C00" : "rgba(255,255,255,0.6)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Product info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <p className="text-white font-bold text-sm tracking-wide">{product.name}</p>
            <p className="text-brand font-black text-lg mt-0.5">{product.price}</p>
          </div>
          {product.colors.length > 3 && (
            <span
              className="text-[10px] font-bold tracking-wider px-2 py-1 rounded whitespace-nowrap mt-0.5"
              style={{
                background: "rgba(245,124,0,0.12)",
                color: "#F57C00",
                border: "1px solid rgba(245,124,0,0.2)",
              }}
            >
              +{product.colors.length - 3} CORES
            </span>
          )}
        </div>

        {/* Color swatches */}
        <div className="flex items-center gap-2 mb-4">
          {product.colors.map((color, i) => (
            <button
              key={i}
              onClick={() => setSelectedColor(i)}
              className="w-5 h-5 rounded-full transition-all duration-200 flex-shrink-0"
              style={{
                background: color,
                boxShadow: selectedColor === i ? `0 0 0 2px #0D0D0D, 0 0 0 3.5px ${color}` : "none",
                transform: selectedColor === i ? "scale(1.15)" : "scale(1)",
              }}
              aria-label={`Cor ${i + 1}`}
            />
          ))}
        </div>

        {/* Add to cart */}
        <button
          className="w-full py-2.5 text-white text-xs font-bold tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-2 hover:bg-brand hover:text-white"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#F57C00";
            e.currentTarget.style.border = "1px solid #F57C00";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
          }}
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          ADICIONAR AO CARRINHO
        </button>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState("TODOS");

  return (
    <section id="colecao" className="py-20 bg-void">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="section-label mb-3">Nossa Coleção</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              COLEÇÃO EM DESTAQUE
            </h2>
          </div>
          <a
            href="#"
            className="text-brand text-sm font-semibold tracking-wider flex items-center gap-2 hover:gap-3 transition-all duration-200 whitespace-nowrap"
          >
            VER TODOS
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="tag-pill text-white/60"
              style={
                activeFilter === filter
                  ? { background: "#F57C00", borderColor: "#F57C00", color: "white" }
                  : {}
              }
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 hover:border-brand/50 text-white/60 hover:text-white text-sm font-semibold tracking-wider rounded transition-all duration-300"
          >
            CARREGAR MAIS
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
