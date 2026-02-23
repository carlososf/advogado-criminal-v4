const defenseLines = [
  {
    number: "01",
    title: "Crimes Econômicos e de Colarinho Branco",
    desc: "Fraudes, desvio de recursos públicos, lavagem de capitais, crimes contra o sistema financeiro e mercado de capitais. Estratégia construída para proteger executivos, empresários e políticos.",
    tags: ["Lavagem de Capitais", "Fraude Bancária", "Estelionato", "Corrupção"],
  },
  {
    number: "02",
    title: "Crimes Tributários e Fiscais",
    desc: "Sonegação fiscal, crimes previdenciários e violações de normas tributárias. Atuação integrada com especialistas contábeis para desmontagem técnica da acusação.",
    tags: ["Sonegação Fiscal", "CARF", "Parcelamento", "Exclusão Criminal"],
  },
  {
    number: "03",
    title: "Crimes Cibernéticos e Digitais",
    desc: "Invasão de sistemas, fraudes digitais, crimes contra a honra em ambiente virtual e violação de dados. Perícia forense digital integrada ao processo de defesa.",
    tags: ["Hackers", "Fraude Digital", "LGPD", "Cybersecurity Law"],
  },
  {
    number: "04",
    title: "Crimes Contra a Administração Pública",
    desc: "Peculato, concussão, prevaricação e improbidade administrativa com repercussão criminal. Defesa de agentes públicos, servidores e contratantes em operações policiais.",
    tags: ["Peculato", "Improbidade", "Concurso de Agentes", "Operações"],
  },
  {
    number: "05",
    title: "Habeas Corpus e Liberdade",
    desc: "Medida mais urgente do direito criminal. Atuamos em regime de emergência para liberação imediata, substituição de prisão preventiva e concessão de liberdade provisória.",
    tags: ["Prisão Preventiva", "Flagrante", "Liberdade Provisória", "HC STJ/STF"],
  },
  {
    number: "06",
    title: "Crimes Dolosos Contra a Vida",
    desc: "Homicídio doloso e culposo, lesão corporal grave e feminicídio. Tribunal do Júri é arena própria — exige retórica, estratégia e domínio do jogo probatório.",
    tags: ["Júri", "Homicídio", "Legítima Defesa", "Revisão Criminal"],
  },
];

export function DefenseLines() {
  return (
    <section id="defense" className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
      />

      {/* Background number */}
      <div className="absolute right-0 top-20 font-playfair text-[220px] font-800 text-zinc-900/30 leading-none select-none pointer-events-none">
        Lex
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 border border-yellow-700/30 bg-yellow-900/10 px-4 py-2 rounded-full mb-6">
            <span className="font-inter text-xs text-yellow-600/80 tracking-[0.15em] uppercase">
              Especialização Técnica
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-700 text-white mb-4 leading-tight">
                Nossas Linhas de{" "}
                <span className="text-gold-gradient">Defesa</span>
              </h2>
              <p className="font-inter text-zinc-400 text-lg max-w-xl leading-relaxed">
                Não atuamos em tudo — dominamos o que importa. Cada linha de
                defesa é conduzida por especialistas com expertise cirúrgica.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 flex items-center gap-2 border border-yellow-700/40 text-yellow-600 font-inter text-sm font-500 px-6 py-3 rounded-sm hover:bg-yellow-900/10 transition-all duration-200 tracking-wide self-start lg:self-auto"
            >
              Ver todas as especialidades
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Defense cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {defenseLines.map((line) => (
            <div
              key={line.number}
              className="defense-card bg-[#111111] border border-zinc-800/60 rounded-sm p-7 cursor-default"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="font-playfair text-5xl font-700 text-zinc-800 leading-none">
                  {line.number}
                </span>
                <div
                  className="w-8 h-8 flex items-center justify-center opacity-60"
                  style={{ color: "#c9a84c" }}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>

              <h3 className="font-playfair text-xl font-600 text-white mb-3 leading-snug">
                {line.title}
              </h3>

              <p className="font-inter text-sm text-zinc-400 leading-relaxed mb-6">
                {line.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {line.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-inter text-[10px] text-yellow-700/80 bg-yellow-900/15 border border-yellow-900/30 px-2.5 py-1 rounded-full tracking-wide uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
