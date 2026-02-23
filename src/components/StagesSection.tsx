const stages = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    tag: "Fase 01",
    title: "Investigação Criminal",
    desc: "Você recebeu intimação, está sob investigação ou suspeita que é monitorado. Agir agora pode determinar se você será indiciado ou não.",
    urgency: "Crítico — Cada dia conta",
    urgencyColor: "text-red-400",
    action: "Proteja-se agora",
    href: "https://wa.me/5511999999999?text=Estou%20sendo%20investigado%20e%20preciso%20de%20defesa",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m0 0v2m0-2h2m-2 0H10m2-11a9 9 0 110 18 9 9 0 010-18z" />
      </svg>
    ),
    tag: "Fase 02",
    title: "Prisão em Flagrante ou Preventiva",
    desc: "Você ou um familiar foi preso. Atuamos imediatamente para o pedido de liberdade, habeas corpus e revogação da prisão preventiva.",
    urgency: "Emergência — Ligue agora",
    urgencyColor: "text-red-400",
    action: "Atendimento Imediato",
    href: "https://wa.me/5511999999999?text=Fui%20preso%20e%20preciso%20de%20habeas%20corpus%20urgente",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    tag: "Fase 03",
    title: "Recurso e Instâncias Superiores",
    desc: "Condenado em primeira instância? Não é o fim. Atuamos em apelações, recursos especiais e extraordinários para reverter sentenças injustas.",
    urgency: "Alta prioridade — Prazos processuais",
    urgencyColor: "text-yellow-500",
    action: "Analisar meu caso",
    href: "https://wa.me/5511999999999?text=Fui%20condenado%20e%20quero%20entrar%20com%20recurso",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    tag: "Fase 04",
    title: "Compliance & Prevenção",
    desc: "Empresário ou executivo? Estruturamos políticas de compliance criminal para blindar sua empresa e sua pessoa física antes que o problema surja.",
    urgency: "Preventivo — Agende consultoria",
    urgencyColor: "text-green-400",
    action: "Blindar minha empresa",
    href: "https://wa.me/5511999999999?text=Quero%20consultoria%20de%20compliance%20criminal",
  },
];

export function StagesSection() {
  return (
    <section id="stages" className="py-28 bg-[#0c0c0c] relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-yellow-700/30 bg-yellow-900/10 px-4 py-2 rounded-full mb-6">
            <span className="font-inter text-xs text-yellow-600/80 tracking-[0.15em] uppercase">
              Diagnóstico Imediato
            </span>
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-700 text-white mb-5">
            Em qual estágio você está?
          </h2>
          <p className="font-inter text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada fase processual exige uma estratégia diferente. Identifique sua situação agora
            e acione o mecanismo de defesa correto — sem perder tempo.
          </p>
        </div>

        {/* Stage cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stages.map((stage) => (
            <div
              key={stage.tag}
              className="stage-card bg-[#111111] rounded-sm p-7 flex flex-col"
            >
              {/* Tag */}
              <div className="font-inter text-xs text-yellow-700 tracking-[0.2em] uppercase mb-4 font-500">
                {stage.tag}
              </div>

              {/* Icon */}
              <div className="text-yellow-600/70 mb-5">{stage.icon}</div>

              {/* Title */}
              <h3 className="font-playfair text-xl font-600 text-white mb-3 leading-snug">
                {stage.title}
              </h3>

              {/* Desc */}
              <p className="font-inter text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
                {stage.desc}
              </p>

              {/* Urgency */}
              <div className={`font-inter text-xs font-500 mb-4 ${stage.urgencyColor}`}>
                ● {stage.urgency}
              </div>

              {/* CTA */}
              <a
                href={stage.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-inter text-sm text-yellow-500 hover:text-yellow-400 font-500 group transition-colors"
              >
                {stage.action}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="font-inter text-sm text-zinc-600">
            Não sabe em qual fase está?{" "}
            <a
              href="https://wa.me/5511999999999?text=Preciso%20de%20avalia%C3%A7%C3%A3o%20do%20meu%20caso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 hover:text-yellow-500 underline underline-offset-4 transition-colors"
            >
              Solicite uma avaliação gratuita
            </a>{" "}
            e nossa equipe fará o diagnóstico.
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
      />
    </section>
  );
}
