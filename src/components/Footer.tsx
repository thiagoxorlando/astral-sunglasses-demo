const footerLinks = {
  colecoes: [
    { label: "Masculino", href: "#colecao" },
    { label: "Feminino", href: "#colecao" },
    { label: "Polarizados", href: "#colecao" },
    { label: "Óculos com Grau", href: "#grau" },
    { label: "Lançamentos", href: "#colecao" },
  ],
  atendimento: [
    { label: "WhatsApp", href: "https://wa.me/5522998571234" },
    { label: "Agendar Exame", href: "#grau" },
    { label: "Trocas e Devoluções", href: "#" },
    { label: "Rastrear Pedido", href: "#" },
    { label: "Política de Privacidade", href: "#" },
  ],
  sobre: [
    { label: "Nossa História", href: "#sobre" },
    { label: "Sustentabilidade", href: "#" },
    { label: "Trabalhe Conosco", href: "#" },
    { label: "Blog", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-void-card border-t border-void-border">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <svg width="34" height="32" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 1L37 35H1L19 1Z" fill="url(#footer-logo-g)" />
                <path d="M10.5 24H27.5" stroke="#0D0D0D" strokeWidth="3.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="footer-logo-g" x1="19" y1="1" x2="19" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5B041" />
                    <stop offset="1" stopColor="#F57C00" />
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <p className="text-white font-black text-lg tracking-[0.22em]">ASTRAL</p>
                <p className="text-white/30 text-[9px] tracking-[0.38em]">SUNGLASSES</p>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-[220px]">
              A beleza do seu mundo nas nossas lentes. 100% Buziana.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                {
                  label: "Instagram",
                  href: "https://instagram.com/astralsunglasses",
                  icon: (
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/5522998571234",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/40 hover:text-brand transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Coleções */}
          <div>
            <p className="text-white font-semibold text-sm tracking-wider mb-5">COLEÇÕES</p>
            <ul className="space-y-3">
              {footerLinks.colecoes.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-brand text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <p className="text-white font-semibold text-sm tracking-wider mb-5">ATENDIMENTO</p>
            <ul className="space-y-3">
              {footerLinks.atendimento.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white/40 hover:text-brand text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sobre + Contato */}
          <div>
            <p className="text-white font-semibold text-sm tracking-wider mb-5">SOBRE</p>
            <ul className="space-y-3 mb-8">
              {footerLinks.sobre.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-brand text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-white font-semibold text-sm tracking-wider mb-4">CONTATO</p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <svg width="14" height="14" fill="none" stroke="rgba(245,124,0,0.7)" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24" className="mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-white/40 text-xs leading-relaxed">
                  Rua das Pedras, s/n<br />Búzios — RJ
                </p>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(245,124,0,0.7)" className="flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <p className="text-white/40 text-xs">(22) 99857-1234</p>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" fill="none" stroke="rgba(245,124,0,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="flex-shrink-0">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <p className="text-white/40 text-xs">@astralsunglasses</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-void-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-xs text-center sm:text-left">
              © 2024 Astral Sunglasses. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-white/25 text-xs">
              <svg width="14" height="14" fill="none" stroke="rgba(245,124,0,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <span>Enviamos para todo o Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
