import Image from "next/image";

export default function BrandSection() {
  return (
    <section id="sobre" className="py-24 bg-void-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              style={{ border: "1px solid rgba(200,176,138,0.15)" }}
            >
              {/* Real store photo — ASTRAL sign center */}
              <Image
                src="/store-hero.jpg"
                alt="Astral Sunglasses — Loja Rua das Pedras, Búzios"
                fill
                quality={92}
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />

              {/* Minimal overlay — logo/text on top must stay legible */}
              <div
                className="absolute inset-0"
                style={{ background: "rgba(0,0,0,0.38)" }}
              />
              {/* Bottom warm gradient just for the footer tag strip */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(6,4,2,0.65) 0%, transparent 48%)" }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-10 text-center">
                <svg
                  width="80"
                  height="76"
                  viewBox="0 0 80 76"
                  fill="none"
                  className="mb-6"
                  style={{ filter: "drop-shadow(0 0 20px rgba(245,124,0,0.5))" }}
                >
                  <path d="M40 2L78 74H2L40 2Z" fill="url(#brand-logo-g)" />
                  <path d="M22 52H58" stroke="#0D0D0D" strokeWidth="6" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="brand-logo-g" x1="40" y1="2" x2="40" y2="74" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F5B041" />
                      <stop offset="1" stopColor="#F57C00" />
                    </linearGradient>
                  </defs>
                </svg>

                <p className="text-white font-black text-3xl tracking-[0.2em] mb-1">ASTRAL</p>
                <p className="text-white/30 text-xs tracking-[0.45em] font-light mb-8">SUNGLASSES</p>

                <div className="flex gap-6">
                  {[
                    { number: "2018", label: "Fundação" },
                    { number: "RJ", label: "Búzios" },
                    { number: "BR", label: "Nacional" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="text-brand font-black text-xl">{item.number}</p>
                      <p className="text-white/30 text-[10px] tracking-wider mt-0.5">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div
                className="absolute bottom-0 left-0 right-0 py-4 px-6 flex items-center gap-3"
                style={{
                  background: "linear-gradient(to top, rgba(13,13,13,0.9), transparent)",
                  borderTop: "1px solid rgba(245,124,0,0.1)",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-brand pulse-glow" />
                <p className="text-white/50 text-xs tracking-wider">100% FEITO COM AMOR EM BÚZIOS, RJ</p>
              </div>
            </div>

            {/* Floating decoration */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(245,124,0,0.1) 0%, transparent 70%)",
                border: "1px solid rgba(245,124,0,0.1)",
              }}
            />
            <div
              className="absolute -top-6 -left-6 w-20 h-20 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(245,181,65,0.08) 0%, transparent 70%)",
                border: "1px solid rgba(245,181,65,0.08)",
              }}
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="section-label mb-4">Nossa História</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Nascidos em Búzios,<br />
              <span className="gradient-text">criados para o mundo.</span>
            </h2>
            <div className="space-y-4 text-white/50 text-base leading-relaxed font-light">
              <p>
                A Astral Sunglasses nasceu à beira-mar de Búzios em 2018, da paixão pelo sol, pela
                liberdade e pela autenticidade que só o litoral carioca pode inspirar.
              </p>
              <p>
                Cada óculos é pensado para quem vive intensamente — seja na areia, nas pedras,
                ou nas ruas da cidade. Design premium com alma buziana.
              </p>
              <p>
                Da Rua das Pedras para o mundo: nosso compromisso é com qualidade, estilo e
                a identidade única de quem escolhe ser Astral.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/8">
              {[
                { value: "100%", label: "Qualidade garantida" },
                { value: "1 ano", label: "Garantia em todos os modelos" },
                { value: "48h", label: "Entrega expressa disponível" },
              ].map((item) => (
                <div key={item.label} className="text-center sm:text-left">
                  <p className="text-brand font-black text-2xl">{item.value}</p>
                  <p className="text-white/30 text-xs leading-tight mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#colecao"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold text-sm tracking-wider px-6 py-3.5 rounded transition-all duration-200"
              >
                VER COLEÇÃO
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://wa.me/5522998571234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-brand/50 text-white/70 hover:text-white font-semibold text-sm tracking-wider px-6 py-3.5 rounded transition-all duration-200"
              >
                FALAR CONOSCO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
