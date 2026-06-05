const testimonials = [
  {
    id: 1,
    name: "Carolina Mendes",
    location: "Rio de Janeiro, RJ",
    avatar: "CM",
    avatarColor: "#F57C00",
    rating: 5,
    text: "Comprei o Astral Sunset e simplesmente apaixonei! A qualidade é incrível, chegou muito bem embalado e o atendimento via WhatsApp foi super rápido. Já indiquei para todas as minhas amigas!",
    product: "Astral Sunset",
    verified: true,
  },
  {
    id: 2,
    name: "Rafael Torres",
    location: "São Paulo, SP",
    avatar: "RT",
    avatarColor: "#1D2B53",
    rating: 5,
    text: "Minha segunda compra na Astral e a marca só melhora. O Astral Wood é simplesmente perfeito para o verão. Polarizado de verdade, boa lente e acabamento premium. Vale cada centavo.",
    product: "Astral Wood",
    verified: true,
  },
  {
    id: 3,
    name: "Beatriz Lemos",
    location: "Búzios, RJ",
    avatar: "BL",
    avatarColor: "#C0392B",
    rating: 5,
    text: "Moradora de Búzios e já sou fã há anos. Fiz óculos de grau com a Astral e o resultado foi perfeito. Atendimento presencial nota 10, equipe super atenciosa. Recomendo demais!",
    product: "Astral Ocean — Grau",
    verified: true,
  },
  {
    id: 4,
    name: "Lucas Brandão",
    location: "Florianópolis, SC",
    avatar: "LB",
    avatarColor: "#F5B041",
    rating: 5,
    text: "Recebi muito rápido aqui em SC! A caixa premium já impressiona antes de abrir. O Astral Gold é o mais estiloso que já tive. Design exclusivo e qualidade surpreendente para o preço.",
    product: "Astral Gold",
    verified: true,
  },
  {
    id: 5,
    name: "Fernanda Costa",
    location: "Brasília, DF",
    avatar: "FC",
    avatarColor: "#2E6B8A",
    rating: 5,
    text: "Presenteei meu marido com o Astral Shadow e ele amou tanto que pediu mais um! Entrega rápida até o DF, rastreamento funcionou perfeitamente. Marcou nossa viagem a Búzios.",
    product: "Astral Shadow",
    verified: true,
  },
  {
    id: 6,
    name: "André Silveira",
    location: "Salvador, BA",
    avatar: "AS",
    avatarColor: "#8B4513",
    rating: 5,
    text: "Atendimento via WhatsApp foi incrível, me ajudaram a escolher o modelo certo. Chegou em 3 dias na Bahia! O Astral Coral combinou perfeitamente com o estilo baiano. Nota mil!",
    product: "Astral Coral",
    verified: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "#F57C00" : "rgba(255,255,255,0.1)"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-void overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Depoimentos</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F57C00">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-white/50 text-sm">
              <span className="text-brand font-bold">4.9</span> de 5 — +1.200 avaliações
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl flex flex-col gap-4 card-hover"
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: t.avatarColor }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-tight">{t.name}</p>
                    <p className="text-white/35 text-[11px] mt-0.5">{t.location}</p>
                  </div>
                </div>
                {t.verified && (
                  <div
                    className="flex items-center gap-1 px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{
                      background: "rgba(245,124,0,0.1)",
                      border: "1px solid rgba(245,124,0,0.2)",
                    }}
                  >
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="#F57C00">
                      <path d="M20 6L9 17l-5-5" stroke="#F57C00" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[9px] font-bold tracking-wider" style={{ color: "#F57C00" }}>VERIFICADO</span>
                  </div>
                )}
              </div>

              <StarRating rating={t.rating} />

              <p className="text-white/55 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div
                className="pt-4 mt-auto border-t border-white/6 flex items-center gap-2"
              >
                <svg width="12" height="12" fill="none" stroke="rgba(245,124,0,0.6)" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <circle cx="11" cy="11" r="3" fill="rgba(245,124,0,0.6)" stroke="none" />
                </svg>
                <span className="text-white/30 text-[10px] font-medium tracking-wider">{t.product.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-white/30 text-sm mb-4">Mais de 5.000 clientes satisfeitos em todo o Brasil</p>
          <a
            href="#colecao"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold text-sm tracking-wider px-8 py-3.5 rounded transition-all duration-200 glow-brand-sm"
          >
            FAZER MEU PEDIDO
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
