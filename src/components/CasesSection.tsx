const cases = [
  {
    category: "Crime Financeiro",
    outcome: "Absolvição",
    outcomeColor: "text-green-400 bg-green-900/20 border-green-800/30",
    title: "Empresário absolvido em operação de lavagem de capitais",
    description:
      "Cliente investigado em operação federal com bloqueio de R$ 12M em ativos. Após 14 meses de defesa técnica, obtivemos absolvição em primeira instância com reconhecimento de atipicidade da conduta.",
    metrics: ["14 meses", "R$ 12M desbloqueados", "Absolvição integral"],
    year: "2023",
  },
  {
    category: "Habeas Corpus",
    outcome: "Liberdade Concedida",
    outcomeColor: "text-yellow-400 bg-yellow-900/20 border-yellow-800/30",
    title: "HC concedido pelo STJ — prisão preventiva revogada em 48h",
    description:
      "Executivo preso preventivamente sem fundamentação idônea. Impetrado HC no STJ com tutela de urgência. Liberdade concedida em 48 horas. Processo encerrado com rejeição da denúncia.",
    metrics: ["48h para liberdade", "STJ", "Denúncia rejeitada"],
    year: "2023",
  },
  {
    category: "Crimes Tributários",
    outcome: "Extinção da Punibilidade",
    outcomeColor: "text-blue-400 bg-blue-900/20 border-blue-800/30",
    title: "Extinção da punibilidade em crime de sonegação fiscal",
    description:
      "Sócio-administrador denunciado por sonegação de R$ 4,2M. Estratégia de parcelamento integrado com defesa criminal resultou em extinção da punibilidade antes do julgamento final.",
    metrics: ["Extinção da punibilidade", "R$ 4,2M", "Sem condenação"],
    year: "2022",
  },
  {
    category: "Tribunal do Júri",
    outcome: "Absolvição no Júri",
    outcomeColor: "text-green-400 bg-green-900/20 border-green-800/30",
    title: "Absolvição por 7×0 no Tribunal do Júri",
    description:
      "Cliente acusado de homicídio doloso. Defesa construída sobre perícia independente e desconstrução do álibi da acusação. Veredicto unânime de absolvição pelos jurados.",
    metrics: ["7×0 absolvição", "Tribunal do Júri", "Réu em liberdade"],
    year: "2022",
  },
  {
    category: "Compliance",
    outcome: "Blindagem Aprovada",
    outcomeColor: "text-purple-400 bg-purple-900/20 border-purple-800/30",
    title: "Estruturação de compliance criminal para grupo empresarial",
    description:
      "Grupo com 6 empresas e R$ 380M de faturamento sem política de integridade criminal. Implementamos programa completo, treinamentos e due diligence penal. Zero autuações nos 24 meses seguintes.",
    metrics: ["6 empresas", "R$ 380M protegidos", "Zero autuações"],
    year: "2024",
  },
  {
    category: "Recursos Superiores",
    outcome: "Pena Substituída",
    outcomeColor: "text-orange-400 bg-orange-900/20 border-orange-800/30",
    title: "Substituição de pena privativa por restritiva de direitos",
    description:
      "Condenado a 4 anos de reclusão em regime fechado. Recurso especial no STJ com tese de desproporcionalidade da pena. Substituição por prestação de serviços à comunidade.",
    metrics: ["4 anos → liberdade", "STJ", "Regime aberto"],
    year: "2023",
  },
];

export function CasesSection() {
  return (
    <section id="cases" className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 border border-yellow-700/30 bg-yellow-900/10 px-4 py-2 rounded-full mb-6">
            <span className="font-inter text-xs text-yellow-600/80 tracking-[0.15em] uppercase">
              Bastidores de Vitórias
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-700 text-white mb-4">
                Casos que{" "}
                <span className="text-gold-gradient">definem reputações</span>
              </h2>
              <p className="font-inter text-zinc-400 text-lg max-w-xl leading-relaxed">
                Preservando identidade dos clientes conforme exigências éticas da OAB,
                apresentamos resultados concretos que demonstram nossa capacidade técnica.
              </p>
            </div>
            <div className="flex gap-6 text-center">
              <div>
                <div className="font-playfair text-3xl font-700 text-gold-gradient">97%</div>
                <div className="font-inter text-xs text-zinc-500 uppercase tracking-wide mt-1">Êxito Total</div>
              </div>
              <div className="w-px bg-zinc-800" />
              <div>
                <div className="font-playfair text-3xl font-700 text-gold-gradient">2.4k+</div>
                <div className="font-inter text-xs text-zinc-500 uppercase tracking-wide mt-1">Casos</div>
              </div>
              <div className="w-px bg-zinc-800" />
              <div>
                <div className="font-playfair text-3xl font-700 text-gold-gradient">28</div>
                <div className="font-inter text-xs text-zinc-500 uppercase tracking-wide mt-1">Anos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cases grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div
              key={c.title}
              className="rounded-sm p-6 flex flex-col transition-all duration-300 hover:border-yellow-700/20 group"
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-5">
                <div className="font-inter text-xs text-zinc-500 tracking-wide uppercase">
                  {c.category}
                </div>
                <div
                  className={`font-inter text-[10px] font-600 px-2.5 py-1 rounded-full border tracking-wide uppercase ${c.outcomeColor}`}
                >
                  {c.outcome}
                </div>
              </div>

              <h3 className="font-playfair text-lg font-600 text-white mb-3 leading-snug">
                {c.title}
              </h3>

              <p className="font-inter text-xs text-zinc-400 leading-relaxed mb-5 flex-1">
                {c.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {c.metrics.map((m) => (
                  <span
                    key={m}
                    className="font-inter text-[10px] text-zinc-400 bg-zinc-800/60 border border-zinc-700/40 px-2.5 py-1 rounded-sm"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <div className="font-inter text-[10px] text-zinc-700 pt-4 border-t border-zinc-800">
                Encerrado em {c.year}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 p-5 rounded-sm border border-zinc-800/40 bg-zinc-900/20">
          <p className="font-inter text-xs text-zinc-600 text-center leading-relaxed">
            * Todos os casos são apresentados com informações anonimizadas, respeitando o sigilo profissional e as
            normas deontológicas da OAB. Resultados anteriores não garantem resultados futuros.
          </p>
        </div>
      </div>
    </section>
  );
}
