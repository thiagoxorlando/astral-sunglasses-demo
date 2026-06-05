"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "ASTRAL WOOD",
    subtitle: "Madeira & Âmbar",
    price: "R$ 349,90",
    tag: "NOVO",
    tagBg: "#8B5E1A",
    colors: ["#8B4513", "#D2691E", "#1a1a1a", "#F5B041"],
    /* Key light from top-left, warm wood tones */
    photoBg: `
      radial-gradient(ellipse at 22% 18%, rgba(255,210,130,0.14) 0%, transparent 45%),
      radial-gradient(ellipse at 75% 85%, rgba(180,90,10,0.1) 0%, transparent 35%),
      linear-gradient(160deg, #1e1208 0%, #130c05 55%, #080603 100%)
    `,
    rimColor: "#C8853A",
    lensLight: "rgba(255,200,100,0.1)",
    frameStop1: "#5a3010",
    frameStop2: "#2d1600",
  },
  {
    id: 2,
    name: "ASTRAL SUNSET",
    subtitle: "Tartaruga & Fogo",
    price: "R$ 329,90",
    tag: "MAIS VENDIDO",
    tagBg: "#C05000",
    colors: ["#F57C00", "#8B0000", "#1a1a1a", "#8B4513"],
    photoBg: `
      radial-gradient(ellipse at 25% 20%, rgba(255,160,60,0.16) 0%, transparent 45%),
      radial-gradient(ellipse at 70% 80%, rgba(200,50,0,0.1) 0%, transparent 35%),
      linear-gradient(160deg, #220e00 0%, #170800 55%, #080404 100%)
    `,
    rimColor: "#E06000",
    lensLight: "rgba(255,150,50,0.12)",
    frameStop1: "#6a2800",
    frameStop2: "#3d1000",
  },
  {
    id: 3,
    name: "ASTRAL OCEAN",
    subtitle: "Azul Profundo",
    price: "R$ 369,90",
    tag: "POLARIZADO",
    tagBg: "#1D2B53",
    colors: ["#1D2B53", "#2E6B8A", "#1a1a1a", "#4A90B8"],
    photoBg: `
      radial-gradient(ellipse at 25% 18%, rgba(100,180,255,0.1) 0%, transparent 45%),
      radial-gradient(ellipse at 70% 80%, rgba(29,43,83,0.3) 0%, transparent 40%),
      linear-gradient(160deg, #080f1e 0%, #050a14 55%, #030508 100%)
    `,
    rimColor: "#3A7AAA",
    lensLight: "rgba(100,180,255,0.1)",
    frameStop1: "#1a3055",
    frameStop2: "#0a1828",
  },
  {
    id: 4,
    name: "ASTRAL GOLD",
    subtitle: "Ouro & Champanhe",
    price: "R$ 419,90",
    tag: "PREMIUM",
    tagBg: "#8B6914",
    colors: ["#B8860B", "#DAA520", "#1a1a1a", "#C8A028"],
    photoBg: `
      radial-gradient(ellipse at 22% 18%, rgba(255,220,100,0.15) 0%, transparent 45%),
      radial-gradient(ellipse at 75% 82%, rgba(180,130,0,0.1) 0%, transparent 35%),
      linear-gradient(160deg, #181200 0%, #0f0c00 55%, #080700 100%)
    `,
    rimColor: "#C8A020",
    lensLight: "rgba(255,215,80,0.1)",
    frameStop1: "#5a4400",
    frameStop2: "#302400",
  },
  {
    id: 5,
    name: "ASTRAL SHADOW",
    subtitle: "Matte Black",
    price: "R$ 299,90",
    tag: "CLÁSSICO",
    tagBg: "#333",
    colors: ["#2a2a2a", "#444", "#1a1a1a"],
    photoBg: `
      radial-gradient(ellipse at 22% 18%, rgba(200,200,200,0.06) 0%, transparent 45%),
      radial-gradient(ellipse at 75% 82%, rgba(80,80,80,0.06) 0%, transparent 35%),
      linear-gradient(160deg, #141414 0%, #0d0d0d 55%, #070707 100%)
    `,
    rimColor: "#3a3a3a",
    lensLight: "rgba(255,255,255,0.05)",
    frameStop1: "#2e2e2e",
    frameStop2: "#1a1a1a",
  },
  {
    id: 6,
    name: "ASTRAL CORAL",
    subtitle: "Rosa & Quartzo",
    price: "R$ 339,90",
    tag: "FEMININO",
    tagBg: "#8B2020",
    colors: ["#C0392B", "#E74C3C", "#1a1a1a", "#F57C00"],
    photoBg: `
      radial-gradient(ellipse at 22% 18%, rgba(255,120,100,0.14) 0%, transparent 45%),
      radial-gradient(ellipse at 75% 82%, rgba(180,30,20,0.1) 0%, transparent 35%),
      linear-gradient(160deg, #200808 0%, #150505 55%, #080303 100%)
    `,
    rimColor: "#C03020",
    lensLight: "rgba(255,100,80,0.1)",
    frameStop1: "#5a1010",
    frameStop2: "#300808",
  },
];

const filters = ["TODOS", "MASCULINO", "FEMININO", "POLARIZADO", "LANÇAMENTO"];

function PhotoProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [liked, setLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const gradId = `pg-${product.id}`;
  const lensId = `pl-${product.id}`;
  const bridgeId = `pb-${product.id}`;

  return (
    <div
      className="group relative rounded-2xl overflow-hidden card-hover cursor-pointer"
      style={{
        background: "#0f0f0f",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Product photo simulation */}
      <div
        className="relative overflow-hidden"
        style={{
          height: "240px",
          background: product.photoBg,
        }}
      >
        {/* Studio floor reflection */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
          }}
        />

        {/* Collection number — editorial detail */}
        <div
          className="absolute top-4 left-4 pointer-events-none"
          style={{ color: "rgba(255,255,255,0.1)", fontSize: "52px", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.05em" }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Heart button */}
        <button
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            background: "rgba(0,0,0,0.5)",
            border: liked ? "1px solid rgba(245,124,0,0.6)" : "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setLiked(!liked)}
          aria-label="Favoritar"
        >
          <svg width="13" height="13" fill={liked ? "#F57C00" : "none"} stroke={liked ? "#F57C00" : "rgba(255,255,255,0.7)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Tag */}
        <div
          className="absolute bottom-4 left-4 text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded z-10"
          style={{ background: product.tagBg }}
        >
          {product.tag}
        </div>

        {/* Product SVG — photographic lighting */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            viewBox="0 0 340 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "82%",
              marginTop: "20px",
              filter: `drop-shadow(0 12px 24px rgba(0,0,0,0.7)) drop-shadow(0 0 16px ${product.rimColor}44)`,
            }}
          >
            {/* Left lens frame */}
            <rect x="5" y="22" width="140" height="100" rx="16" fill={`url(#${gradId})`} />
            {/* Left lens glass */}
            <rect x="9" y="26" width="132" height="92" rx="13" fill={`url(#${lensId})`} />
            {/* Left lens highlight (key light) */}
            <ellipse cx="42" cy="50" rx="28" ry="13" fill={product.lensLight} />
            <line x1="16" y1="38" x2="100" y2="38" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

            {/* Right lens frame */}
            <rect x="195" y="22" width="140" height="100" rx="16" fill={`url(#${gradId})`} />
            {/* Right lens glass */}
            <rect x="199" y="26" width="132" height="92" rx="13" fill={`url(#${lensId})`} />
            <ellipse cx="232" cy="50" rx="28" ry="13" fill={product.lensLight} />

            {/* Bridge */}
            <path
              d="M145 72 Q170 60 195 72"
              stroke={`url(#${bridgeId})`}
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Temple arms with subtle end-tips */}
            <path d="M5 72 L-14 76" stroke={`url(#${gradId})`} strokeWidth="4.5" strokeLinecap="round" />
            <path d="M335 72 L354 76" stroke={`url(#${gradId})`} strokeWidth="4.5" strokeLinecap="round" />

            {/* Rim light (back-lit top edge) */}
            <path d="M9 32 Q75 20 145 32" stroke={product.rimColor} strokeWidth="1.5" strokeOpacity="0.25" fill="none" />
            <path d="M199 32 Q265 20 335 32" stroke={product.rimColor} strokeWidth="1.5" strokeOpacity="0.25" fill="none" />

            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                <stop stopColor={product.frameStop1} />
                <stop offset="0.6" stopColor={product.frameStop2} />
                <stop offset="1" stopColor={product.frameStop2} stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id={lensId} x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                <stop stopColor="#0e0e0e" />
                <stop offset="0.7" stopColor="#080808" />
                <stop offset="1" stopColor="#030303" />
              </linearGradient>
              <linearGradient id={bridgeId} x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                <stop stopColor="#F5B041" />
                <stop offset="1" stopColor="#F57C00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Card info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="text-white/35 text-[10px] font-medium tracking-widest mb-1">{product.subtitle}</p>
            <p className="text-white font-black text-sm tracking-wide">{product.name}</p>
            <p className="text-brand font-black text-lg mt-0.5">{product.price}</p>
          </div>
          {product.colors.length > 3 && (
            <span
              className="text-[10px] font-bold tracking-wider px-2 py-1 rounded mt-1 whitespace-nowrap"
              style={{
                background: "rgba(245,124,0,0.1)",
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
              className="w-4 h-4 rounded-full transition-all duration-200 flex-shrink-0"
              style={{
                background: color,
                boxShadow: selectedColor === i
                  ? `0 0 0 2px #0D0D0D, 0 0 0 3.5px ${color}`
                  : "none",
                transform: selectedColor === i ? "scale(1.2)" : "scale(1)",
              }}
              aria-label={`Cor ${i + 1}`}
            />
          ))}
          <span className="text-white/30 text-[10px] ml-1">
            {product.colors.length} {product.colors.length === 1 ? "cor" : "cores"}
          </span>
        </div>

        {/* Add to cart */}
        <button
          className="w-full py-2.5 text-white/70 hover:text-white text-xs font-bold tracking-widest rounded-lg transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#F57C00";
            (e.currentTarget as HTMLElement).style.borderColor = "#F57C00";
            (e.currentTarget as HTMLElement).style.color = "white";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
          }}
        >
          ADICIONAR AO CARRINHO
        </button>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState("TODOS");

  return (
    <section id="colecao" className="py-24 bg-void">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="section-label mb-3">Nossa Coleção</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              COLEÇÃO EM DESTAQUE
            </h2>
            <p className="text-white/40 text-sm mt-2">
              Todos os modelos com entrega para todo o Brasil
            </p>
          </div>
          <a
            href="#"
            className="text-brand text-sm font-bold tracking-widest flex items-center gap-2 hover:gap-3 transition-all duration-200 whitespace-nowrap"
          >
            VER TODOS
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Shipping reinforcement pill */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider"
            style={{
              background: "rgba(245,124,0,0.08)",
              border: "1px solid rgba(245,124,0,0.2)",
              color: "#F5B041",
            }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="1" y="3" width="15" height="13" rx="1" />
              <path d="M16 8h4l3 3v5h-7V8z" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            FRETE GRÁTIS para todo o Brasil nas compras acima de R$ 300
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="tag-pill text-white/50"
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
          {products.map((product, index) => (
            <PhotoProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 hover:border-brand/40 text-white/50 hover:text-white text-xs font-bold tracking-widest rounded-lg transition-all duration-300">
            CARREGAR MAIS MODELOS
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
