const steps = [
  {
    num: "01",
    title: "Envie sua receita",
    desc: "Foto, PDF ou escaneado — aceitamos qualquer formato. Envie pelo WhatsApp em segundos.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Escolha seu modelo",
    desc: "Nossa equipe te ajuda a encontrar a armação certa para o seu rosto, estilo e grau.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="7" cy="12" r="4" />
        <circle cx="17" cy="12" r="4" />
        <line x1="11" y1="12" x2="13" y2="12" />
        <line x1="3" y1="12" x2="1" y2="11" />
        <line x1="21" y1="12" x2="23" y2="11" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Lentes produzidas",
    desc: "Laboratório próprio em Búzios. Miopia, astigmatismo, hipermetropia — todas as graduações.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Receba em casa",
    desc: "Embalagem premium Astral, para todo o Brasil. Entrega expressa disponível.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

const types = [
  { name: "Miopia", symbol: "-", range: "Visão longe", color: "#1D2B53" },
  { name: "Hipermetropia", symbol: "+", range: "Visão perto", color: "#2E6B8A" },
  { name: "Astigmatismo", symbol: "×", range: "Curvatura da córnea", color: "#4A90B8" },
  { name: "Multifocal", symbol: "≋", range: "Visão múltipla", color: "#1D2B53" },
];

export default function GrauSection() {
  return (
    <section id="grau" className="py-24 bg-void overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Big header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <p className="section-label mb-4">Saúde Visual</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.0] mb-6">
              ÓCULOS<br />
              COM GRAU<br />
              <span
                style={{
                  background: "linear-gradient(90deg, #F5B041, #F57C00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                NA ASTRAL.
              </span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-md mb-6">
              Sua saúde visual no estilo que você merece. Trabalhamos com todos os tipos de grau
              e todas as armações da nossa coleção — sem abrir mão do visual Astral.
            </p>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Exame de vista{" "}
              <span className="text-green-400 font-semibold">gratuito</span>{" "}
              na nossa loja em Búzios. Envie sua receita ou venha nos visitar
              na Rua das Pedras.
            </p>
          </div>

          {/* Visual — prescription glasses product shot */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              style={{
                background: `
                  radial-gradient(ellipse at 30% 25%, rgba(100,180,255,0.15) 0%, transparent 50%),
                  radial-gradient(ellipse at 70% 75%, rgba(29,43,83,0.5) 0%, transparent 50%),
                  linear-gradient(160deg, #080f1e 0%, #050a14 55%, #030508 100%)
                `,
                border: "1px solid rgba(29,43,83,0.5)",
              }}
            >
              {/* Background atmosphere */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 60%, rgba(46,107,138,0.15) 0%, transparent 60%)",
                }}
              />

              {/* Prescription glasses SVG */}
              <div className="absolute inset-0 flex items-center justify-center float-animation">
                <svg
                  viewBox="0 0 380 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    width: "80%",
                    filter: "drop-shadow(0 8px 32px rgba(46,107,138,0.5)) drop-shadow(0 0 20px rgba(100,180,255,0.2))",
                  }}
                >
                  {/* Left lens — transparent/clear */}
                  <rect x="5" y="20" width="155" height="118" rx="18" fill="url(#rx-frame)" />
                  <rect x="9" y="24" width="147" height="110" rx="15" fill="url(#rx-lens)" fillOpacity="0.85" />
                  {/* Lens refractive glare */}
                  <ellipse cx="45" cy="50" rx="35" ry="16" fill="rgba(180,220,255,0.1)" />
                  <path d="M16 38 Q82 28 155 42" stroke="rgba(200,230,255,0.12)" strokeWidth="1.5" fill="none" />
                  {/* Diopter text hint */}
                  <text x="55" y="90" fill="rgba(100,180,255,0.15)" fontSize="22" fontFamily="monospace" fontWeight="bold">-2.5</text>

                  {/* Right lens */}
                  <rect x="220" y="20" width="155" height="118" rx="18" fill="url(#rx-frame)" />
                  <rect x="224" y="24" width="147" height="110" rx="15" fill="url(#rx-lens)" fillOpacity="0.85" />
                  <ellipse cx="260" cy="50" rx="35" ry="16" fill="rgba(180,220,255,0.1)" />
                  <text x="240" y="90" fill="rgba(100,180,255,0.15)" fontSize="22" fontFamily="monospace" fontWeight="bold">-2.75</text>

                  {/* Bridge */}
                  <path d="M160 78 Q190 65 220 78" stroke="url(#rx-bridge)" strokeWidth="5" strokeLinecap="round" fill="none" />

                  {/* Temple arms */}
                  <path d="M5 79 L-16 84" stroke="url(#rx-frame)" strokeWidth="5" strokeLinecap="round" />
                  <path d="M375 79 L396 84" stroke="url(#rx-frame)" strokeWidth="5" strokeLinecap="round" />

                  {/* Rim highlights */}
                  <path d="M9 30 Q82 18 160 30" stroke="rgba(100,180,255,0.25)" strokeWidth="1.5" fill="none" />
                  <path d="M224 30 Q297 18 375 30" stroke="rgba(100,180,255,0.25)" strokeWidth="1.5" fill="none" />

                  <defs>
                    <linearGradient id="rx-frame" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                      <stop stopColor="#2d4070" />
                      <stop offset="0.5" stopColor="#1a2848" />
                      <stop offset="1" stopColor="#0f1830" />
                    </linearGradient>
                    <linearGradient id="rx-lens" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                      <stop stopColor="#0a1428" stopOpacity="0.7" />
                      <stop offset="1" stopColor="#050910" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="rx-bridge" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                      <stop stopColor="#4A90D8" />
                      <stop offset="1" stopColor="#2E6B8A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Floating badge */}
              <div
                className="absolute top-5 right-5 px-3 py-2 rounded-xl"
                style={{
                  background: "rgba(29,43,83,0.85)",
                  border: "1px solid rgba(46,107,138,0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p className="text-white/40 text-[9px] font-medium tracking-wider">A PARTIR DE</p>
                <p className="text-white font-black text-base">R$ 299,90</p>
                <p className="text-blue-300/50 text-[9px] mt-0.5">lentes inclusas</p>
              </div>

              {/* Bottom label */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4"
                style={{ background: "linear-gradient(to top, rgba(5,10,20,0.9), transparent)" }}
              >
                <p className="text-blue-300/70 text-xs font-bold tracking-widest">ÓCULOS COM GRAU · ASTRAL</p>
              </div>
            </div>

            {/* Exam free badge */}
            <div
              className="absolute -bottom-5 -left-5 px-4 py-3 rounded-xl"
              style={{
                background: "#141414",
                border: "1px solid rgba(37,211,102,0.3)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
              }}
            >
              <p className="text-green-400 font-black text-sm">Exame GRÁTIS</p>
              <p className="text-white/30 text-[10px] mt-0.5">na nossa loja em Búzios</p>
            </div>
          </div>
        </div>

        {/* Process steps */}
        <div className="mb-16">
          <p className="text-center section-label mb-8">Como funciona</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[calc(100%-8px)] w-full h-px z-10"
                    style={{
                      background: "linear-gradient(90deg, rgba(245,124,0,0.3), rgba(245,124,0,0.08))",
                    }}
                  />
                )}
                <div
                  className="p-5 rounded-xl h-full"
                  style={{
                    background: "#141414",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-brand font-black text-2xl tabular-nums">{step.num}</span>
                    <div className="text-brand">{step.icon}</div>
                  </div>
                  <p className="text-white font-bold text-sm mb-2">{step.title}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grau types + CTA */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-center">

          {/* Types of lenses */}
          <div>
            <p className="text-white/50 text-xs font-bold tracking-widest mb-5">TRABALHAMOS COM</p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {types.map((type) => (
                <div
                  key={type.name}
                  className="p-4 rounded-xl flex items-center gap-3"
                  style={{
                    background: "#141414",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 font-black text-white text-lg"
                    style={{ background: `${type.color}40` }}
                  >
                    {type.symbol}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{type.name}</p>
                    <p className="text-white/30 text-[10px] mt-0.5">{type.range}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantee list */}
            <div className="space-y-2.5">
              {[
                "Lentes nacionais e importadas",
                "Anti-reflexo e fotossensível disponíveis",
                "Garantia de 12 meses nas lentes",
                "Entrega para todo o Brasil",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(245,124,0,0.15)" }}
                  >
                    <svg width="10" height="10" fill="none" stroke="#F57C00" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div
            className="p-8 rounded-2xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1D2B53 0%, #0f1a32 60%, #080d1a 100%)",
              border: "1px solid rgba(46,107,138,0.4)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 100% 0%, rgba(46,107,138,0.3), transparent 60%)",
              }}
            />
            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-[10px] font-bold tracking-widest"
                style={{
                  background: "rgba(37,211,102,0.1)",
                  border: "1px solid rgba(37,211,102,0.3)",
                  color: "#25D366",
                }}
              >
                EXAME GRATUITO
              </div>
              <h3 className="text-2xl font-black text-white mb-3 leading-tight">
                Comece pelo seu <br />exame de vista.
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Agende pelo WhatsApp, venha até a Rua das Pedras em Búzios
                e saia com seu Astral no mesmo dia.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/5522998571234?text=Olá! Gostaria de agendar um exame de vista na Astral."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-white font-bold text-xs tracking-widest px-6 py-3.5 rounded-lg transition-all duration-200"
                  style={{
                    background: "#25D366",
                    boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  AGENDAR EXAME GRÁTIS
                </a>
                <a
                  href="https://wa.me/5522998571234?text=Olá! Vou enviar minha receita para fazer óculos com grau."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border text-white/70 hover:text-white font-semibold text-xs tracking-widest px-6 py-3.5 rounded-lg transition-all duration-200"
                  style={{ borderColor: "rgba(255,255,255,0.15)" }}
                >
                  ENVIAR RECEITA
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
