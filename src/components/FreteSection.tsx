const benefits = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Frete Grátis",
    desc: "Nas compras acima de R$ 300",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Embalagem Premium",
    desc: "Caixa especial Astral em toda compra",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Rastreamento",
    desc: "Acompanhe seu pedido em tempo real",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Devolução Fácil",
    desc: "30 dias para troca sem custo",
  },
];

export default function FreteSection() {
  return (
    <section id="frete" className="py-24 bg-void-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="section-label mb-4">Entrega Nacional</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-[1.1] mb-6">
              FRETE PARA TODO<br />
              <span className="gradient-text">O BRASIL</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              De Búzios para qualquer cidade do país. Receba seu Astral onde estiver —
              com segurança, agilidade e a embalagem premium que você merece.
            </p>

            {/* Reinforcement badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl mb-10"
              style={{
                background: "rgba(245,124,0,0.07)",
                border: "1px solid rgba(245,124,0,0.2)",
              }}
            >
              <svg width="20" height="20" fill="none" stroke="#F57C00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <span className="text-brand font-bold text-sm">Enviamos para todo o Brasil</span>
              <span className="text-white/30 text-xs">— 27 estados cobertos</span>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-brand"
                    style={{ background: "rgba(245,124,0,0.1)" }}
                  >
                    {b.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{b.title}</p>
                    <p className="text-white/40 text-xs mt-0.5 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#colecao"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold text-sm tracking-wider px-6 py-3.5 rounded transition-all duration-200"
              >
                COMPRAR AGORA
              </a>
              <p className="text-white/30 text-xs">Entrega via Correios e transportadoras parceiras</p>
            </div>
          </div>

          {/* Brazil map visual */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(245,124,0,0.1) 0%, transparent 70%)",
                  transform: "scale(1.3)",
                }}
              />

              {/* Brazil SVG map */}
              <svg
                viewBox="0 0 350 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-72 sm:w-80 lg:w-96 relative z-10"
                style={{ filter: "drop-shadow(0 0 30px rgba(245,124,0,0.15))" }}
              >
                {/* Simplified Brazil silhouette */}
                <path
                  d="M175 20 L220 18 L260 30 L290 55 L310 90 L315 130 L305 165 L295 200 L310 230 L320 265 L310 295 L280 325 L255 350 L220 365 L185 370 L155 360 L130 340 L110 310 L100 280 L115 255 L120 225 L105 200 L90 175 L80 145 L85 115 L95 90 L115 65 L140 42 L165 25 Z"
                  fill="url(#brazil-g)"
                  fillOpacity="0.85"
                />
                <path
                  d="M175 20 L220 18 L260 30 L290 55 L310 90 L315 130 L305 165 L295 200 L310 230 L320 265 L310 295 L280 325 L255 350 L220 365 L185 370 L155 360 L130 340 L110 310 L100 280 L115 255 L120 225 L105 200 L90 175 L80 145 L85 115 L95 90 L115 65 L140 42 L165 25 Z"
                  stroke="#F57C00"
                  strokeWidth="2"
                  strokeOpacity="0.4"
                />

                {/* State outlines (simplified) */}
                <line x1="150" y1="80" x2="290" y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="130" y1="140" x2="305" y2="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="115" y1="200" x2="295" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="110" y1="260" x2="310" y2="260" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="120" y1="320" x2="285" y2="320" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

                {/* Location dots */}
                <circle cx="195" cy="270" r="7" fill="#F57C00" fillOpacity="0.9" />
                <circle cx="195" cy="270" r="14" fill="#F57C00" fillOpacity="0.15" />
                <circle cx="195" cy="270" r="20" fill="#F57C00" fillOpacity="0.06" />

                {/* Other city dots */}
                <circle cx="140" cy="130" r="4" fill="#F5B041" fillOpacity="0.6" />
                <circle cx="250" cy="160" r="4" fill="#F5B041" fillOpacity="0.6" />
                <circle cx="170" cy="340" r="4" fill="#F5B041" fillOpacity="0.6" />
                <circle cx="280" cy="240" r="4" fill="#F5B041" fillOpacity="0.6" />
                <circle cx="115" cy="220" r="4" fill="#F5B041" fillOpacity="0.6" />

                {/* Búzios label */}
                <text x="208" y="268" fill="#F57C00" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Búzios</text>

                <defs>
                  <linearGradient id="brazil-g" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop stopColor="#1a1005" />
                    <stop offset="0.5" stopColor="#141414" />
                    <stop offset="1" stopColor="#0d0d0d" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Label */}
              <div className="text-center mt-4">
                <p className="text-brand font-bold text-sm tracking-wider">ENTREGAMOS EM TODO O PAÍS</p>
                <p className="text-white/30 text-xs mt-1">Via Correios e transportadoras parceiras</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
