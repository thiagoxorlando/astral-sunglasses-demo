export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-void"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,124,0,0.12) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />
      <div
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,181,65,0.05) 0%, transparent 70%)",
          transform: "translate(30%, 0)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          {/* Left: Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-brand" />
              <span className="section-label">100% Buziana</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              <span className="text-white">A beleza do</span>
              <br />
              <span className="text-white">seu mundo</span>
              <br />
              <span className="gradient-text">nas nossas</span>
              <br />
              <span className="gradient-text">lentes.</span>
            </h1>

            {/* Subtext */}
            <p className="text-white/50 text-base sm:text-lg font-light leading-relaxed max-w-md mb-10">
              Óculos de sol premium criados em Búzios, para quem vive com
              estilo, liberdade e autenticidade.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#colecao"
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold text-sm tracking-wider px-8 py-4 rounded transition-all duration-300 glow-brand-sm hover:glow-brand"
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
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand/60 text-white/80 hover:text-white font-semibold text-sm tracking-wider px-8 py-4 rounded transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                FALAR NO WHATSAPP
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/8">
              {[
                { value: "5.000+", label: "Clientes" },
                { value: "12", label: "Coleções" },
                { value: "4.9★", label: "Avaliação" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-brand font-black text-xl sm:text-2xl">{stat.value}</p>
                  <p className="text-white/40 text-xs font-medium tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Main visual card */}
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden float-animation"
                style={{
                  background:
                    "linear-gradient(135deg, #1a1208 0%, #1C1005 30%, #0D0D0D 100%)",
                  boxShadow:
                    "0 0 80px rgba(245, 124, 0, 0.12), inset 0 0 80px rgba(245, 124, 0, 0.04)",
                  border: "1px solid rgba(245, 124, 0, 0.15)",
                }}
              >
                {/* Glow from bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 100%, rgba(245,124,0,0.25) 0%, transparent 70%)",
                  }}
                />

                {/* Sunglasses SVG illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 320 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4/5"
                    style={{ filter: "drop-shadow(0 0 20px rgba(245,124,0,0.4))" }}
                  >
                    {/* Frame */}
                    <rect x="10" y="30" width="130" height="90" rx="16" fill="url(#frame-g)" fillOpacity="0.9" />
                    <rect x="180" y="30" width="130" height="90" rx="16" fill="url(#frame-g)" fillOpacity="0.9" />

                    {/* Lenses */}
                    <rect x="14" y="34" width="122" height="82" rx="13" fill="url(#lens-g)" />
                    <rect x="184" y="34" width="122" height="82" rx="13" fill="url(#lens-g)" />

                    {/* Lens sheen */}
                    <ellipse cx="50" cy="55" rx="25" ry="12" fill="rgba(255,255,255,0.06)" />
                    <ellipse cx="220" cy="55" rx="25" ry="12" fill="rgba(255,255,255,0.06)" />

                    {/* Bridge */}
                    <path d="M140 75 Q160 65 180 75" stroke="url(#bridge-g)" strokeWidth="4" strokeLinecap="round" fill="none" />

                    {/* Arms */}
                    <path d="M10 70 L-10 75" stroke="url(#frame-g)" strokeWidth="4" strokeLinecap="round" />
                    <path d="M310 70 L330 75" stroke="url(#frame-g)" strokeWidth="4" strokeLinecap="round" />

                    {/* Highlight lines on lenses */}
                    <line x1="30" y1="45" x2="110" y2="45" stroke="rgba(245,181,65,0.15)" strokeWidth="1" />
                    <line x1="200" y1="45" x2="280" y2="45" stroke="rgba(245,181,65,0.15)" strokeWidth="1" />

                    <defs>
                      <linearGradient id="frame-g" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                        <stop stopColor="#3D2000" />
                        <stop offset="1" stopColor="#1a0d00" />
                      </linearGradient>
                      <linearGradient id="lens-g" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                        <stop stopColor="#0a0a0a" stopOpacity="0.92" />
                        <stop offset="1" stopColor="#1a1005" stopOpacity="0.95" />
                      </linearGradient>
                      <linearGradient id="bridge-g" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                        <stop stopColor="#F5B041" />
                        <stop offset="1" stopColor="#F57C00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Brand tag */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-brand font-black text-lg tracking-wider">ASTRAL</p>
                      <p className="text-white/30 text-xs tracking-[0.2em]">SUNGLASSES</p>
                    </div>
                    <div
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(245, 124, 0, 0.15)",
                        border: "1px solid rgba(245, 124, 0, 0.3)",
                        color: "#F57C00",
                      }}
                    >
                      NOVO
                    </div>
                  </div>
                </div>

                {/* Top corner decoration */}
                <div className="absolute top-5 right-5 opacity-30">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#F57C00" strokeWidth="1" />
                    <path d="M12 2v20M2 12h20" stroke="#F57C00" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>

              {/* Floating price badge */}
              <div
                className="absolute -bottom-4 -left-4 sm:-left-6 px-4 py-3 rounded-xl"
                style={{
                  background: "#1C1C1C",
                  border: "1px solid rgba(245,124,0,0.25)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                }}
              >
                <p className="text-white/40 text-[10px] font-medium tracking-wider mb-0.5">A PARTIR DE</p>
                <p className="text-brand font-black text-xl">R$ 299,90</p>
              </div>

              {/* Floating tag */}
              <div
                className="absolute -top-3 -right-3 sm:-right-5 px-3 py-2 rounded-lg"
                style={{
                  background: "#F57C00",
                  boxShadow: "0 4px 16px rgba(245,124,0,0.5)",
                }}
              >
                <p className="text-white font-bold text-xs tracking-wide">NOVO ✦</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-[10px] tracking-[0.3em] font-medium">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
