export default function GrauSection() {
  return (
    <section id="grau" className="py-20 bg-void overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Grau card */}
          <div
            className="relative rounded-2xl overflow-hidden p-8 sm:p-10 flex flex-col justify-between min-h-[320px]"
            style={{
              background: "linear-gradient(135deg, #1D2B53 0%, #0f1a32 60%, #080d1a 100%)",
              border: "1px solid rgba(29, 43, 83, 0.6)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 80% 20%, rgba(46,107,138,0.25) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-[10px] font-bold tracking-wider"
                style={{
                  background: "rgba(46,107,138,0.2)",
                  border: "1px solid rgba(46,107,138,0.4)",
                  color: "#6BAACC",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                DISPONÍVEL
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                ÓCULOS COM GRAU
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Envie sua receita ou agende um exame conosco. Trabalhamos com todos os tipos de grau
                — miopia, astigmatismo e hipermetropia.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href="https://wa.me/5522998571234?text=Olá! Gostaria de fazer óculos com grau."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-void-card font-bold text-xs tracking-wider px-5 py-3 rounded hover:bg-white/90 transition-colors duration-200"
              >
                ENVIAR RECEITA
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://wa.me/5522998571234?text=Olá! Gostaria de agendar um exame de vista."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 hover:text-white font-semibold text-xs tracking-wider px-5 py-3 rounded transition-all duration-200 hover:border-white/40"
              >
                AGENDAR EXAME
              </a>
            </div>

            {/* Decorative glasses icon */}
            <div className="absolute right-6 bottom-6 opacity-10">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                <rect x="2" y="8" width="50" height="44" rx="8" stroke="white" strokeWidth="3" />
                <rect x="68" y="8" width="50" height="44" rx="8" stroke="white" strokeWidth="3" />
                <path d="M52 30 Q60 22 68 30" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M2 30 L-8 33" stroke="white" strokeWidth="3" strokeLinecap="round" />
                <path d="M118 30 L128 33" stroke="white" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Agendamento card */}
          <div
            className="relative rounded-2xl overflow-hidden p-8 sm:p-10 flex flex-col justify-between min-h-[320px]"
            style={{
              background: "linear-gradient(135deg, #1a0f00 0%, #110a00 60%, #0a0600 100%)",
              border: "1px solid rgba(245,124,0,0.15)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 80%, rgba(245,124,0,0.15) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-[10px] font-bold tracking-wider"
                style={{
                  background: "rgba(245,124,0,0.12)",
                  border: "1px solid rgba(245,124,0,0.3)",
                  color: "#F57C00",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                GRATUITO
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                EXAME DE VISTA
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Agende seu exame gratuito na nossa loja em Búzios. Profissionais especializados
                e atendimento personalizado para você.
              </p>

              <div className="flex flex-col gap-2.5 mt-6">
                {[
                  "Exame completo gratuito",
                  "Lentes nacionais e importadas",
                  "Entrega em todo o Brasil",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245,124,0,0.2)" }}>
                      <svg width="8" height="8" fill="none" stroke="#F57C00" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-white/60 text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-8">
              <a
                href="https://wa.me/5522998571234?text=Olá! Gostaria de agendar um exame de vista."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold text-xs tracking-wider px-5 py-3 rounded transition-all duration-200 glow-brand-sm"
              >
                AGENDAR AGORA
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Calendar icon decoration */}
            <div className="absolute right-6 top-6 opacity-10">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
