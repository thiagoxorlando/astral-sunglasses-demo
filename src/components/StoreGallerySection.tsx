import Image from "next/image";

/*
 * Cells 1-3 use real store-interior.jpg from the brand kit.
 * Cell 4 (grau) and 5 (packaging) retain CSS gradients.
 */
const galleryItems = [
  {
    id: 1,
    span: "tall",
    label: "Nossa loja",
    sublabel: "Rua das Pedras · Búzios",
    photoBg: `
      radial-gradient(ellipse at 45% 28%, rgba(200,176,138,0.32) 0%, rgba(200,176,138,0.12) 38%, transparent 62%),
      radial-gradient(ellipse at 80% 80%, rgba(245,124,0,0.12) 0%, transparent 45%),
      linear-gradient(160deg, #201808 0%, #140f06 42%, #0a0804 100%)
    `,
    accentLine: "Espaço exclusivo na capital do chique",
  },
  {
    id: 2,
    span: "wide",
    label: "Vitrine",
    sublabel: "Coleção completa em exposição",
    photoBg: `
      radial-gradient(ellipse at 22% 48%, rgba(217,195,165,0.28) 0%, rgba(200,176,138,0.10) 42%, transparent 65%),
      radial-gradient(ellipse at 78% 22%, rgba(245,124,0,0.10) 0%, transparent 45%),
      linear-gradient(145deg, #1e1608 0%, #120e05 52%, #080604 100%)
    `,
    accentLine: "Cada modelo com iluminação especial",
  },
  {
    id: 3,
    span: "square",
    label: "Atendimento",
    sublabel: "Experiência personalizada",
    photoBg: `
      radial-gradient(ellipse at 58% 28%, rgba(200,176,138,0.25) 0%, rgba(217,195,165,0.08) 45%, transparent 68%),
      linear-gradient(160deg, #1c1408 0%, #110e06 62%, #080805 100%)
    `,
    accentLine: "Nossa equipe te ajuda a escolher",
  },
  {
    id: 4,
    span: "square",
    label: "Óculos com Grau",
    sublabel: "Laboratório próprio",
    photoBg: `
      radial-gradient(ellipse at 35% 58%, rgba(29,43,83,0.55) 0%, rgba(46,80,140,0.20) 45%, transparent 68%),
      linear-gradient(160deg, #080f1e 0%, #050b14 62%, #030508 100%)
    `,
    accentLine: "Exame gratuito na loja",
  },
  {
    id: 5,
    span: "wide",
    label: "Embalagem Premium",
    sublabel: "Caixa exclusiva Astral",
    photoBg: `
      radial-gradient(ellipse at 50% 28%, rgba(217,195,165,0.30) 0%, rgba(200,176,138,0.12) 42%, transparent 65%),
      radial-gradient(ellipse at 18% 78%, rgba(245,124,0,0.14) 0%, transparent 42%),
      linear-gradient(160deg, #201608 0%, #150f05 52%, #0a0804 100%)
    `,
    accentLine: "Cada compra merece ser especial",
  },
];

function GlassesDecoration({ color = "rgba(245,181,65,0.3)", size = 120 }: { color?: string; size?: number }) {
  const s = size;
  return (
    <svg viewBox="0 0 240 110" fill="none" style={{ width: s, opacity: 0.15 }}>
      <rect x="3" y="18" width="100" height="74" rx="12" stroke={color} strokeWidth="2.5" />
      <rect x="137" y="18" width="100" height="74" rx="12" stroke={color} strokeWidth="2.5" />
      <path d="M103 55 Q120 44 137 55" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M3 55 L-12 59" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M237 55 L252 59" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function StoreGallerySection() {
  return (
    <section className="py-24 bg-void overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Conheça a Astral</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            A LOJA QUE VIVE NO CORAÇÃO DE BÚZIOS
          </h2>
          <p className="text-white/40 text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Cada canto da nossa loja foi pensado para que você viva uma experiência
            inesquecível — da vitrine ao espelho, da receita ao estojo.
          </p>
        </div>

        {/* Magazine mosaic */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[180px] lg:auto-rows-[200px]">

          {/* Item 1 — tall: wood shelving wall + palm tree */}
          <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group card-hover" style={{ border: "1px solid rgba(200,176,138,0.1)" }}>
            <Image
              src="/store-shelf.jpg"
              alt="Vitrine de óculos — Astral Sunglasses"
              fill
              quality={92}
              sizes="(max-width: 1024px) 50vw, 25vw"
              style={{ objectFit: "cover", objectPosition: "center 12%" }}
            />
            {/* Subtle darken only on hover */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
            {/* Bottom label gradient */}
            <div className="absolute bottom-0 left-0 right-0 p-5" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.0) 60%)" }}>
              <p className="text-brand text-[10px] font-bold tracking-widest mb-1">{galleryItems[0].sublabel.toUpperCase()}</p>
              <p className="text-white font-bold text-sm">{galleryItems[0].label}</p>
              <p className="text-white/50 text-[10px] mt-1">{galleryItems[0].accentLine}</p>
            </div>
          </div>

          {/* Item 2 — wide: ASTRAL sign + full store façade */}
          <div className="col-span-1 lg:col-span-2 row-span-1 relative rounded-2xl overflow-hidden group card-hover" style={{ border: "1px solid rgba(200,176,138,0.1)" }}>
            <Image
              src="/store-sign.jpg"
              alt="Loja Astral Sunglasses — Rua das Pedras, Búzios"
              fill
              quality={92}
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 22%" }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 55%)" }}>
              <p className="text-brand text-[9px] font-bold tracking-widest">{galleryItems[1].sublabel.toUpperCase()}</p>
              <p className="text-white font-bold text-xs mt-0.5">{galleryItems[1].label}</p>
            </div>
          </div>

          {/* Item 3 — square: interior corridor with arched walls */}
          <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group card-hover" style={{ border: "1px solid rgba(200,176,138,0.1)" }}>
            <Image
              src="/store-corridor.jpg"
              alt="Interior da Loja Astral Sunglasses"
              fill
              quality={92}
              sizes="(max-width: 1024px) 50vw, 25vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 55%)" }}>
              <p className="text-brand text-[9px] font-bold tracking-widest">{galleryItems[2].sublabel.toUpperCase()}</p>
              <p className="text-white font-bold text-xs mt-0.5">{galleryItems[2].label}</p>
            </div>
          </div>

          {/* Item 4 — square (grau lab) */}
          <div
            className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group card-hover"
            style={{ background: galleryItems[3].photoBg, border: "1px solid rgba(29,43,83,0.5)" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="40" height="40" fill="none" stroke="rgba(70,140,200,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="mx-auto">
                <circle cx="7" cy="12" r="4" />
                <circle cx="17" cy="12" r="4" />
                <line x1="11" y1="12" x2="13" y2="12" />
                <line x1="3" y1="12" x2="1" y2="11" />
                <line x1="21" y1="12" x2="23" y2="11" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent)" }}
            >
              <p className="text-[9px] font-bold tracking-widest" style={{ color: "#4A90B8" }}>{galleryItems[3].sublabel.toUpperCase()}</p>
              <p className="text-white font-bold text-xs mt-0.5">{galleryItems[3].label}</p>
            </div>
          </div>

          {/* Item 5 — wide bottom */}
          <div
            className="col-span-2 lg:col-span-3 row-span-1 relative rounded-2xl overflow-hidden group card-hover"
            style={{ background: galleryItems[4].photoBg, border: "1px solid rgba(255,255,255,0.05)" }}
          >
            {/* Packaging display */}
            <div className="absolute inset-0 flex items-center px-10 gap-8">
              {/* Box simulation */}
              <div className="flex items-end gap-3">
                {["WOOD", "SUNSET", "OCEAN"].map((name, i) => (
                  <div
                    key={name}
                    className="flex flex-col items-center"
                    style={{ transform: `rotate(${i === 0 ? -3 : i === 2 ? 3 : 0}deg)` }}
                  >
                    <div
                      className="w-14 h-10 rounded flex items-center justify-center"
                      style={{
                        background: "rgba(30,20,10,0.8)",
                        border: "1px solid rgba(245,181,65,0.25)",
                        boxShadow: "2px 4px 12px rgba(0,0,0,0.6)",
                      }}
                    >
                      <svg width="20" height="18" viewBox="0 0 38 36" fill="none">
                        <path d="M19 1L37 35H1L19 1Z" fill="url(#pkg-logo)" />
                        <path d="M10.5 24H27.5" stroke="#0D0D0D" strokeWidth="3" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="pkg-logo" x1="19" y1="1" x2="19" y2="35" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F5B041" />
                            <stop offset="1" stopColor="#F57C00" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="text-white/20 text-[7px] tracking-widest mt-1">{name}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-brand font-black text-xl tracking-wide">ASTRAL</p>
                <p className="text-white/30 text-[10px] tracking-[0.3em]">SUNGLASSES</p>
                <p className="text-white/20 text-[10px] mt-2 tracking-wider">BÚZIOS · RJ · BRASIL</p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent)" }}
            >
              <p className="text-brand text-[9px] font-bold tracking-widest">{galleryItems[4].sublabel.toUpperCase()}</p>
              <p className="text-white font-bold text-xs mt-0.5">{galleryItems[4].label}</p>
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="text-center mt-14">
          <blockquote className="text-white/30 text-base italic font-light max-w-lg mx-auto leading-relaxed">
            &ldquo;Cada par de óculos conta a história de quem o usa — e a nossa começa aqui,
            no coração de Búzios.&rdquo;
          </blockquote>
          <p className="text-brand text-xs font-bold tracking-widest mt-3">— ASTRAL SUNGLASSES</p>
        </div>
      </div>
    </section>
  );
}
