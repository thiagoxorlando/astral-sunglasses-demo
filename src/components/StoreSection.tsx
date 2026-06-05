export default function StoreSection() {
  return (
    <section id="loja" className="py-24 bg-void-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Visite-nos</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
            CONHEÇA NOSSA LOJA NA
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #F5B041 0%, #F57C00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              RUA DAS PEDRAS
            </span>
          </h2>
          <p className="text-white/40 text-base mt-5 max-w-lg mx-auto leading-relaxed">
            No coração de Búzios, na rua mais famosa do litoral carioca,
            nossa loja te recebe com estilo, atenção e a melhor seleção de óculos da região.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">

          {/* Left: Info cards */}
          <div className="space-y-4">

            {/* Address card */}
            <div
              className="p-6 rounded-2xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1e1208, #130c05)",
                border: "1px solid rgba(245,124,0,0.2)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 100% 0%, rgba(245,181,65,0.12), transparent 70%)",
                }}
              />
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(245,124,0,0.15)" }}
                >
                  <svg width="18" height="18" fill="none" stroke="#F57C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-brand text-xs font-bold tracking-widest mb-1">ENDEREÇO</p>
                  <p className="text-white font-bold text-lg leading-tight">Rua das Pedras</p>
                  <p className="text-white/60 text-sm mt-0.5">Búzios — RJ · Centro histórico</p>
                  <a
                    href="https://www.google.com/maps?q=Rua+das+Pedras+Buzios+RJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand text-xs font-semibold tracking-wider mt-3 hover:gap-2.5 transition-all duration-200"
                  >
                    VER NO MAPA
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(245,124,0,0.1)" }}
                >
                  <svg width="16" height="16" fill="none" stroke="#F57C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <p className="text-brand text-xs font-bold tracking-widest">HORÁRIO DE FUNCIONAMENTO</p>
              </div>
              <div className="space-y-2.5">
                {[
                  { day: "Segunda a Sexta", hours: "09h às 20h" },
                  { day: "Sábado", hours: "09h às 22h" },
                  { day: "Domingo e Feriados", hours: "10h às 18h" },
                ].map((item) => (
                  <div key={item.day} className="flex items-center justify-between">
                    <span className="text-white/50 text-sm">{item.day}</span>
                    <span className="text-white font-semibold text-sm">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-brand text-xs font-bold tracking-widest mb-4">FALE CONOSCO</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/5522998571234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(37,211,102,0.1)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">(22) 99857-1234</p>
                    <p className="text-white/30 text-xs">WhatsApp · Resposta em minutos</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/astralsunglasses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(195,50,100,0.1)" }}>
                    <svg width="15" height="15" fill="none" stroke="#C33264" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">@astralsunglasses</p>
                    <p className="text-white/30 text-xs">Siga e inspire-se</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map simulation + atmosphere */}
          <div className="flex flex-col gap-4">
            {/* Map placeholder */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                height: "320px",
                background: "linear-gradient(160deg, #0c1018 0%, #080c12 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Grid lines (map-style) */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />

              {/* Street lines (Rua das Pedras) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320" fill="none">
                {/* Main streets */}
                <line x1="0" y1="160" x2="400" y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                <line x1="200" y1="0" x2="200" y2="320" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                <line x1="0" y1="100" x2="400" y2="130" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                <line x1="0" y1="220" x2="400" y2="200" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                <line x1="100" y1="0" x2="100" y2="320" stroke="rgba(255,255,255,0.04)" strokeWidth="5" />
                <line x1="300" y1="0" x2="300" y2="320" stroke="rgba(255,255,255,0.04)" strokeWidth="5" />

                {/* Rua das Pedras label */}
                <text x="50" y="155" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="sans-serif" letterSpacing="2">RUA DAS PEDRAS</text>

                {/* Ocean blue area (right side = sea) */}
                <rect x="330" y="0" width="70" height="320" fill="rgba(29,43,83,0.15)" />
                <text x="342" y="170" fill="rgba(46,107,138,0.4)" fontSize="8" fontFamily="sans-serif">BAÍA</text>

                {/* Location pin */}
                <circle cx="200" cy="160" r="16" fill="rgba(245,124,0,0.2)" />
                <circle cx="200" cy="160" r="8" fill="#F57C00" />
                <circle cx="200" cy="160" r="4" fill="white" />

                {/* Pulse ring */}
                <circle cx="200" cy="160" r="24" stroke="#F57C00" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="200" cy="160" r="35" stroke="#F57C00" strokeWidth="0.8" strokeOpacity="0.2" />
              </svg>

              {/* Overlay badge */}
              <div
                className="absolute bottom-4 left-4 right-4 p-3 rounded-xl flex items-center gap-3"
                style={{
                  background: "rgba(13,13,13,0.85)",
                  border: "1px solid rgba(245,124,0,0.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(245,124,0,0.15)" }}
                >
                  <svg width="16" height="16" fill="none" stroke="#F57C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Astral Sunglasses</p>
                  <p className="text-white/40 text-xs">Rua das Pedras · Búzios, RJ</p>
                </div>
                <a
                  href="https://www.google.com/maps?q=Rua+das+Pedras+Buzios+RJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-brand text-[10px] font-bold tracking-wider hover:text-brand-gold transition-colors whitespace-nowrap"
                >
                  COMO CHEGAR →
                </a>
              </div>
            </div>

            {/* Búzios lifestyle quote */}
            <div
              className="p-6 rounded-2xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1e1208 0%, #140d05 100%)",
                border: "1px solid rgba(245,124,0,0.12)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 100% 0%, rgba(245,181,65,0.08), transparent 60%)",
                }}
              />
              <p className="text-brand text-xs font-bold tracking-widest mb-3">BÚZIOS · RJ</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Na rua mais charmosa de Búzios, entre boutiques e restaurantes à beira-mar,
                a Astral é o destino certo para quem quer unir{" "}
                <span className="text-white font-semibold">qualidade, estilo e a essência carioca</span>.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Praia", "Lifestyle", "Moda", "Exclusividade"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(245,124,0,0.1)",
                      border: "1px solid rgba(245,124,0,0.18)",
                      color: "rgba(245,181,65,0.8)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
