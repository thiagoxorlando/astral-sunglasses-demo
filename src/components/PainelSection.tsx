/* Painel da Loja — dashboard showcase for the store owner */

const mockOrders = [
  { id: "0047", product: "Astral Wood · Âmbar", value: "R$ 349,90", city: "Rio de Janeiro, RJ", status: "Enviado", statusColor: "#25D366" },
  { id: "0046", product: "Astral Gold · Premium", value: "R$ 419,90", city: "São Paulo, SP", status: "Entregue", statusColor: "#F5B041" },
  { id: "0045", product: "Astral Ocean · Azul", value: "R$ 369,90", city: "Florianópolis, SC", status: "Enviado", statusColor: "#25D366" },
  { id: "0044", product: "Astral Sunset · Coral", value: "R$ 329,90", city: "Salvador, BA", status: "Em preparo", statusColor: "#F57C00" },
  { id: "0043", product: "Astral Shadow · Black", value: "R$ 299,90", city: "Brasília, DF", status: "Entregue", statusColor: "#F5B041" },
];

const topProducts = [
  { name: "Astral Sunset", pct: 48, color: "#F57C00" },
  { name: "Astral Wood", pct: 28, color: "#C8853A" },
  { name: "Astral Ocean", pct: 14, color: "#2E6B8A" },
  { name: "Astral Gold", pct: 10, color: "#B8860B" },
];

const states = ["RJ", "SP", "SC", "BA", "DF", "RS", "MG", "CE", "PE", "AM"];

export default function PainelSection() {
  return (
    <section className="py-24 bg-void overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Para o Empreendedor</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            PAINEL DA LOJA ASTRAL
          </h2>
          <p className="text-white/40 text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Tudo o que você precisa para gerenciar seu negócio — pedidos, estoque,
            faturamento e fretes — em um painel exclusivo Astral.
          </p>
          <div
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-xs font-semibold tracking-wider"
            style={{
              background: "rgba(245,124,0,0.08)",
              border: "1px solid rgba(245,124,0,0.2)",
              color: "#F5B041",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
            VISUALIZAÇÃO DE DEMONSTRAÇÃO · DADOS FICTÍCIOS
          </div>
        </div>

        {/* Dashboard frame */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#0f0f0f",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,124,0,0.06)",
          }}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#0c0c0c" }}
          >
            <div className="flex items-center gap-3">
              {/* Traffic lights */}
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
              </div>
              <span className="text-white/20 text-xs font-medium hidden sm:block">painel.astralsunglasses.com.br</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-white/30 text-xs">Online agora</span>
            </div>
          </div>

          {/* Sidebar + content */}
          <div className="flex">
            {/* Sidebar */}
            <div
              className="hidden md:flex flex-col w-16 lg:w-52 py-6 gap-1 flex-shrink-0"
              style={{ borderRight: "1px solid rgba(255,255,255,0.05)", background: "#0c0c0c" }}
            >
              {/* Logo */}
              <div className="flex items-center gap-2.5 px-4 mb-6">
                <svg width="22" height="20" viewBox="0 0 38 36" fill="none">
                  <path d="M19 1L37 35H1L19 1Z" fill="url(#painel-logo)" />
                  <path d="M10.5 24H27.5" stroke="#0D0D0D" strokeWidth="3.5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="painel-logo" x1="19" y1="1" x2="19" y2="35" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F5B041" />
                      <stop offset="1" stopColor="#F57C00" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-white font-black text-sm tracking-wider hidden lg:block">ASTRAL</span>
              </div>

              {[
                { label: "Dashboard", active: true, icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                { label: "Pedidos", active: false, icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                { label: "Produtos", active: false, icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
                { label: "Fretes", active: false, icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" },
                { label: "Relatórios", active: false, icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-3 py-2.5 mx-2 rounded-lg cursor-pointer transition-colors duration-200"
                  style={{
                    background: item.active ? "rgba(245,124,0,0.12)" : "transparent",
                    color: item.active ? "#F57C00" : "rgba(255,255,255,0.3)",
                  }}
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="flex-shrink-0">
                    <path d={item.icon} />
                  </svg>
                  <span className="text-xs font-semibold hidden lg:block">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-5 lg:p-6 min-w-0">

              {/* Date + greeting */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-white font-bold text-base">Bom dia, Astral! 👋</p>
                  <p className="text-white/30 text-xs mt-0.5">Quinta-feira, 05 de Junho de 2025</p>
                </div>
                <div
                  className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold"
                  style={{ background: "rgba(245,124,0,0.1)", color: "#F5B041", border: "1px solid rgba(245,124,0,0.2)" }}
                >
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                  +24% este mês
                </div>
              </div>

              {/* KPI cards */}
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 mb-6">
                {[
                  {
                    label: "Pedidos",
                    value: "47",
                    sub: "+8 hoje",
                    subColor: "#25D366",
                    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                    iconColor: "#F57C00",
                    bg: "rgba(245,124,0,0.08)",
                  },
                  {
                    label: "Produtos",
                    value: "28",
                    sub: "modelos ativos",
                    subColor: "rgba(255,255,255,0.3)",
                    icon: "M4 6h16M4 10h16M4 14h16M4 18h16",
                    iconColor: "#F5B041",
                    bg: "rgba(245,181,65,0.07)",
                  },
                  {
                    label: "Faturamento",
                    value: "R$ 12.840",
                    sub: "este mês",
                    subColor: "rgba(255,255,255,0.3)",
                    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
                    iconColor: "#25D366",
                    bg: "rgba(37,211,102,0.07)",
                  },
                  {
                    label: "Fretes",
                    value: "234",
                    sub: "enviados no mês",
                    subColor: "rgba(255,255,255,0.3)",
                    icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
                    iconColor: "#2E6B8A",
                    bg: "rgba(46,107,138,0.1)",
                  },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-xl p-4"
                    style={{
                      background: "#141414",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">{kpi.label}</p>
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: kpi.bg }}
                      >
                        <svg width="13" height="13" fill="none" stroke={kpi.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d={kpi.icon} />
                        </svg>
                      </div>
                    </div>
                    <p className="text-white font-black text-lg leading-tight tabular-nums">{kpi.value}</p>
                    <p className="text-[11px] mt-0.5 font-medium" style={{ color: kpi.subColor }}>{kpi.sub}</p>
                  </div>
                ))}
              </div>

              {/* Two columns: orders + chart */}
              <div className="grid lg:grid-cols-[1fr_280px] gap-4">

                {/* Recent orders */}
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="flex items-center justify-between px-4 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <p className="text-white font-bold text-xs tracking-wider">PEDIDOS RECENTES</p>
                    <span className="text-brand text-[10px] font-bold tracking-wider cursor-pointer">VER TODOS →</span>
                  </div>
                  <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                    {mockOrders.map((order) => (
                      <div key={order.id} className="flex items-center gap-3 px-4 py-3">
                        <span className="text-white/20 text-[10px] font-mono w-8 flex-shrink-0">#{order.id}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-white/80 text-xs font-semibold truncate">{order.product}</p>
                          <p className="text-white/30 text-[10px] mt-0.5 truncate">{order.city}</p>
                        </div>
                        <p className="text-white font-bold text-xs flex-shrink-0">{order.value}</p>
                        <div
                          className="text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{ background: `${order.statusColor}18`, color: order.statusColor }}
                        >
                          {order.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-4">
                  {/* Top products chart */}
                  <div
                    className="rounded-xl p-4 flex-1"
                    style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <p className="text-white font-bold text-xs tracking-wider mb-4">MAIS VENDIDOS</p>
                    <div className="space-y-3">
                      {topProducts.map((p) => (
                        <div key={p.name}>
                          <div className="flex items-center justify-between mb-1.5">
                            <p className="text-white/60 text-[10px] font-medium">{p.name}</p>
                            <p className="text-white/50 text-[10px] font-bold">{p.pct}%</p>
                          </div>
                          <div className="h-1.5 rounded-full w-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                            <div
                              className="h-1.5 rounded-full transition-all duration-500"
                              style={{ width: `${p.pct}%`, background: p.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* States coverage */}
                  <div
                    className="rounded-xl p-4"
                    style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <p className="text-white font-bold text-xs tracking-wider mb-3">ESTADOS ATENDIDOS</p>
                    <div className="flex flex-wrap gap-1.5">
                      {states.map((state) => (
                        <span
                          key={state}
                          className="text-[9px] font-bold px-2 py-0.5 rounded"
                          style={{
                            background: "rgba(245,124,0,0.1)",
                            color: "rgba(245,181,65,0.8)",
                            border: "1px solid rgba(245,124,0,0.15)",
                          }}
                        >
                          {state}
                        </span>
                      ))}
                      <span
                        className="text-[9px] font-bold px-2 py-0.5 rounded"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          color: "rgba(255,255,255,0.3)",
                        }}
                      >
                        +17
                      </span>
                    </div>
                    <p className="text-white/25 text-[10px] mt-3">Todo o Brasil coberto ✓</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA below dashboard */}
        <div className="text-center mt-12">
          <p className="text-white/30 text-sm mb-6">
            Quer um painel desse para a sua loja? Este é apenas um preview do que podemos construir.
          </p>
          <a
            href="https://wa.me/5522998571234?text=Olá! Vi o Painel da Loja no site e quero saber mais."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-wider px-8 py-4 rounded-lg transition-all duration-300"
            style={{
              background: "#F57C00",
              boxShadow: "0 4px 24px rgba(245,124,0,0.3)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            QUERO MEU PAINEL EXCLUSIVO
          </a>
        </div>
      </div>
    </section>
  );
}
