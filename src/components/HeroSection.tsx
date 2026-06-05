"use client";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-void"
    >
      {/* Full-bleed lifestyle atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 70% 50%, rgba(245,124,0,0.09) 0%, transparent 55%),
            radial-gradient(ellipse at 15% 85%, rgba(245,124,0,0.14) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 10%, rgba(245,181,65,0.04) 0%, transparent 40%)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-12">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 xl:gap-12 items-stretch min-h-[88vh]">

          {/* Left: Editorial copy */}
          <div className="flex flex-col justify-center order-2 lg:order-1 py-8 lg:py-16">

            {/* Location badge */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest"
                style={{
                  background: "rgba(245,124,0,0.1)",
                  border: "1px solid rgba(245,124,0,0.25)",
                  color: "#F5B041",
                }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="#F57C00">
                  <circle cx="4" cy="4" r="4" />
                </svg>
                RUA DAS PEDRAS · BÚZIOS, RJ
              </div>
            </div>

            {/* Headline — editorial weight */}
            <h1 className="font-black leading-[1.0] tracking-tight mb-8">
              <span
                className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] text-white"
                style={{ letterSpacing: "-0.03em" }}
              >
                A beleza
              </span>
              <span
                className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] text-white"
                style={{ letterSpacing: "-0.03em" }}
              >
                do seu
              </span>
              <span
                className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]"
                style={{
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(90deg, #F5B041 0%, #F57C00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                mundo.
              </span>
            </h1>

            <p className="text-white/45 text-base sm:text-lg font-light leading-relaxed max-w-sm mb-3">
              Nascemos no sol de Búzios para quem vive com intensidade.
              Liberdade, autenticidade e estilo em cada lente.
            </p>
            <p className="text-brand text-sm font-semibold tracking-widest mb-10">
              100% BUZIANA · DESDE 2018
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href="#colecao"
                className="inline-flex items-center justify-center gap-2 text-white font-bold text-sm tracking-wider px-8 py-4 rounded-lg transition-all duration-300"
                style={{
                  background: "#F57C00",
                  boxShadow: "0 4px 24px rgba(245,124,0,0.35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 36px rgba(245,124,0,0.55)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(245,124,0,0.35)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                VER COLEÇÃO
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://wa.me/5522998571234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white font-semibold text-sm tracking-wider px-8 py-4 rounded-lg transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                FALAR NO WHATSAPP
              </a>
            </div>

            {/* Social proof bar */}
            <div
              className="flex items-center gap-6 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              {[
                { value: "5.000+", label: "Clientes" },
                { value: "12", label: "Coleções" },
                { value: "4.9 ★", label: "Avaliação" },
                { value: "Todo BR", label: "Entregamos" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <div>
                    <p className="text-brand font-black text-lg sm:text-xl tabular-nums">{stat.value}</p>
                    <p className="text-white/35 text-[10px] font-medium tracking-wider mt-0.5 uppercase">{stat.label}</p>
                  </div>
                  {i < 3 && <div className="w-px h-8 bg-white/8" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Lifestyle photo composite */}
          <div className="order-1 lg:order-2 flex items-stretch">
            <div className="relative w-full flex flex-col gap-3 pt-20 pb-8">

              {/* Main lifestyle "photo" — beach sunset product shot */}
              <div
                className="relative flex-1 rounded-2xl overflow-hidden"
                style={{
                  minHeight: "360px",
                  background: `
                    linear-gradient(to bottom,
                      #06090f 0%,
                      #0a1020 18%,
                      #0f1e38 35%,
                      #1a2d4a 48%,
                      #3d2410 62%,
                      #7a3c08 72%,
                      #c96010 82%,
                      #e8820a 88%,
                      #3d1a00 95%,
                      #1a0a00 100%
                    )
                  `,
                  border: "1px solid rgba(245,124,0,0.12)",
                }}
              >
                {/* Sun disc */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: "140px",
                    height: "140px",
                    bottom: "28%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "radial-gradient(circle, rgba(255,200,80,0.55) 0%, rgba(230,130,20,0.3) 40%, transparent 70%)",
                    borderRadius: "50%",
                  }}
                />

                {/* Ocean reflection band */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    bottom: "25%",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,200,100,0.6) 30%, rgba(255,220,120,0.8) 50%, rgba(255,200,100,0.6) 70%, transparent 100%)",
                  }}
                />

                {/* Water ripple lines */}
                {[22, 20, 18, 16].map((pct, i) => (
                  <div
                    key={i}
                    className="absolute pointer-events-none"
                    style={{
                      bottom: `${pct}%`,
                      left: "10%",
                      right: "10%",
                      height: "1px",
                      background: `rgba(255,180,80,${0.08 - i * 0.015})`,
                    }}
                  />
                ))}

                {/* Beach silhouette */}
                <div
                  className="absolute bottom-0 left-0 right-0 pointer-events-none"
                  style={{ height: "25%" }}
                >
                  <svg viewBox="0 0 800 200" preserveAspectRatio="none" className="w-full h-full">
                    <path
                      d="M0 200 L0 140 Q100 120 200 135 Q300 150 400 125 Q500 100 600 120 Q700 140 800 110 L800 200 Z"
                      fill="#0a0604"
                    />
                    {/* Rocks */}
                    <ellipse cx="120" cy="138" rx="30" ry="12" fill="#0d0806" />
                    <ellipse cx="640" cy="118" rx="22" ry="9" fill="#0d0806" />
                    {/* Palm silhouette */}
                    <line x1="680" y1="165" x2="695" y2="90" stroke="#080503" strokeWidth="4" />
                    <path d="M695 90 Q720 75 745 80 Q730 85 720 95" fill="#080503" />
                    <path d="M695 90 Q670 70 648 78 Q660 85 672 95" fill="#080503" />
                    <path d="M695 90 Q715 60 740 55 Q725 68 712 80" fill="#080503" />
                    <path d="M695 90 Q665 55 644 53 Q658 67 671 80" fill="#080503" />
                  </svg>
                </div>

                {/* Product floating in golden hour light */}
                <div
                  className="absolute inset-0 flex items-center justify-center float-animation pointer-events-none"
                  style={{ paddingBottom: "22%" }}
                >
                  <div className="relative">
                    {/* Glow halo behind product */}
                    <div
                      style={{
                        position: "absolute",
                        inset: "-30px",
                        background: "radial-gradient(circle, rgba(245,181,65,0.2) 0%, transparent 65%)",
                        borderRadius: "50%",
                      }}
                    />
                    <svg
                      viewBox="0 0 380 170"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        width: "clamp(220px, 50vw, 340px)",
                        filter: "drop-shadow(0 8px 32px rgba(200,100,0,0.5)) drop-shadow(0 0 20px rgba(245,181,65,0.3))",
                      }}
                    >
                      {/* Left lens */}
                      <rect x="8" y="28" width="155" height="108" rx="18" fill="url(#hl-frame)" />
                      <rect x="12" y="32" width="147" height="100" rx="15" fill="url(#hl-lens)" />
                      {/* Left lens sheen (golden hour) */}
                      <ellipse cx="52" cy="58" rx="32" ry="15" fill="rgba(255,200,100,0.12)" />
                      <path d="M20 45 Q85 35 155 50" stroke="rgba(255,220,120,0.08)" strokeWidth="1" fill="none" />

                      {/* Right lens */}
                      <rect x="217" y="28" width="155" height="108" rx="18" fill="url(#hl-frame)" />
                      <rect x="221" y="32" width="147" height="100" rx="15" fill="url(#hl-lens)" />
                      <ellipse cx="261" cy="58" rx="32" ry="15" fill="rgba(255,200,100,0.12)" />

                      {/* Bridge */}
                      <path d="M163 82 Q190 68 217 82" stroke="url(#hl-bridge)" strokeWidth="5" strokeLinecap="round" fill="none" />

                      {/* Temple arms */}
                      <path d="M8 82 L-20 88" stroke="url(#hl-frame-stroke)" strokeWidth="5" strokeLinecap="round" />
                      <path d="M372 82 L400 88" stroke="url(#hl-frame-stroke)" strokeWidth="5" strokeLinecap="round" />

                      {/* Frame top edge highlight (rim light) */}
                      <path d="M8 40 Q85 28 163 40" stroke="rgba(255,200,80,0.2)" strokeWidth="1.5" fill="none" />
                      <path d="M217 40 Q294 28 372 40" stroke="rgba(255,200,80,0.2)" strokeWidth="1.5" fill="none" />

                      <defs>
                        <linearGradient id="hl-frame" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                          <stop stopColor="#4a2800" />
                          <stop offset="0.5" stopColor="#2d1600" />
                          <stop offset="1" stopColor="#1a0d00" />
                        </linearGradient>
                        <linearGradient id="hl-frame-stroke" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                          <stop stopColor="#4a2800" />
                          <stop offset="1" stopColor="#2d1600" />
                        </linearGradient>
                        <linearGradient id="hl-lens" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                          <stop stopColor="#1a0c02" stopOpacity="0.96" />
                          <stop offset="0.6" stopColor="#0a0804" stopOpacity="0.98" />
                          <stop offset="1" stopColor="#050305" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="hl-bridge" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                          <stop stopColor="#F5B041" />
                          <stop offset="1" stopColor="#F57C00" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Top overlay: campaign text */}
                <div className="absolute top-5 left-6 right-6 flex items-start justify-between pointer-events-none">
                  <div>
                    <p
                      className="text-[10px] tracking-[0.4em] font-semibold"
                      style={{ color: "rgba(245,181,65,0.7)" }}
                    >
                      COLEÇÃO VERÃO 2025
                    </p>
                  </div>
                  <div
                    className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider"
                    style={{
                      background: "rgba(245,124,0,0.9)",
                      color: "white",
                    }}
                  >
                    NOVO
                  </div>
                </div>
              </div>

              {/* Bottom row: two mini cards */}
              <div className="grid grid-cols-2 gap-3">
                {/* Shipping badge */}
                <div
                  className="relative rounded-xl p-4 flex items-center gap-3 overflow-hidden"
                  style={{
                    background: "#141414",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(245,124,0,0.12)" }}
                  >
                    <svg width="18" height="18" fill="none" stroke="#F57C00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="1" y="3" width="15" height="13" rx="1" />
                      <path d="M16 8h4l3 3v5h-7V8z" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs">Frete grátis</p>
                    <p className="text-white/35 text-[10px] mt-0.5">Todo o Brasil</p>
                  </div>
                </div>

                {/* Price badge */}
                <div
                  className="relative rounded-xl p-4 flex items-center gap-3 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #1a0f00, #0d0a00)",
                    border: "1px solid rgba(245,124,0,0.2)",
                  }}
                >
                  <div>
                    <p className="text-white/40 text-[10px] font-medium tracking-wider">A PARTIR DE</p>
                    <p className="text-brand font-black text-xl tabular-nums">R$ 299,90</p>
                  </div>
                  <div className="ml-auto">
                    <div
                      className="text-[9px] font-bold tracking-wider px-2 py-1 rounded"
                      style={{
                        background: "rgba(245,124,0,0.15)",
                        color: "#F57C00",
                        border: "1px solid rgba(245,124,0,0.25)",
                      }}
                    >
                      12×
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 pointer-events-none">
        <span className="text-white text-[9px] tracking-[0.35em] font-medium">SCROLL</span>
        <div className="w-px h-7 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
