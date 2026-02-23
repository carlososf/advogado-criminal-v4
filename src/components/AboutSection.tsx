const team = [
  {
    name: "Dr. Henrique Castello",
    role: "Sócio Fundador · Criminalista",
    spec: "Crimes Econômicos · Habeas Corpus · STF/STJ",
    experience: "28 anos",
    oab: "OAB/SP 123.456",
    bio: "Mestre em Direito Penal pela USP. Atuou em mais de 800 casos de alta complexidade. Ex-consultor do Tribunal de Justiça de SP.",
  },
  {
    name: "Dra. Rafaela Monteiro",
    role: "Sócia · Crimes Tributários",
    spec: "Sonegação Fiscal · CARF · Compliance",
    experience: "16 anos",
    oab: "OAB/SP 234.567",
    bio: "Especialista em direito tributário-penal. LLM pela FGV. Palestrante em congressos nacionais de direito criminal.",
  },
  {
    name: "Dr. Marcos Vilela",
    role: "Associado · Tribunal do Júri",
    spec: "Crimes Dolosos · Júri · Revisão Criminal",
    experience: "11 anos",
    oab: "OAB/SP 345.678",
    bio: "Reconhecido pela atuação no Tribunal do Júri. Índice de absolvição acima da média nacional. Membro da ABRACRIM.",
  },
];

const milestones = [
  { year: "1996", event: "Fundação do escritório em São Paulo" },
  { year: "2003", event: "Abertura da área de crimes econômicos" },
  { year: "2009", event: "Primeiro caso no STF — habeas corpus concedido" },
  { year: "2015", event: "Equipe especializada em compliance criminal" },
  { year: "2020", event: "Implementação do portal digital do cliente" },
  { year: "2024", event: "+2.400 casos encerrados com êxito" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-28 bg-[#0d0d0d] relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 border border-yellow-700/30 bg-yellow-900/10 px-4 py-2 rounded-full mb-6">
            <span className="font-inter text-xs text-yellow-600/80 tracking-[0.15em] uppercase">
              O Escritório
            </span>
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-700 text-white mb-5">
            28 anos de combate.{" "}
            <span className="text-gold-gradient">Resultados que falam.</span>
          </h2>
          <p className="font-inter text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Não somos um escritório de advocacia comum. Somos uma célula de gestão de crise
            jurídica, construída para atuar sob pressão máxima quando o que está em jogo é
            a sua liberdade e a sua reputação.
          </p>
        </div>

        {/* Timeline + Team */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Timeline */}
          <div>
            <h3 className="font-playfair text-2xl font-600 text-white mb-8">
              Nossa Trajetória
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-3 top-0 bottom-0 w-px"
                style={{
                  background: "linear-gradient(to bottom, #c9a84c, transparent)",
                }}
              />
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-6 pl-10 relative">
                    {/* Dot */}
                    <div
                      className="absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
                    >
                      <div className="w-2 h-2 rounded-full bg-black" />
                    </div>
                    <div>
                      <div className="font-inter text-xs text-yellow-600 font-600 tracking-wide mb-1">
                        {m.year}
                      </div>
                      <div className="font-inter text-sm text-zinc-300 leading-relaxed">
                        {m.event}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="font-playfair text-2xl font-600 text-white mb-8">
              Nossa Filosofia de Combate
            </h3>
            <div className="space-y-5">
              {[
                {
                  icon: "⚔️",
                  title: "Estratégia antes de reação",
                  desc: "Cada passo da acusação é antecipado. Agimos proativamente, nunca reativamente.",
                },
                {
                  icon: "🔒",
                  title: "Sigilo absoluto",
                  desc: "Tudo que entra no escritório fica no escritório. Criptografia em todos os documentos.",
                },
                {
                  icon: "📊",
                  title: "Transparência radical",
                  desc: "Você sabe o que acontece no seu processo em tempo real, sem precisar ligar.",
                },
                {
                  icon: "🎯",
                  title: "Foco no resultado",
                  desc: "Não vendemos esperança. Vendemos estratégia com chances reais e planejamento de risco.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="flex gap-4 p-5 rounded-sm"
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(201, 168, 76, 0.1)",
                  }}
                >
                  <div className="text-2xl flex-shrink-0">{v.icon}</div>
                  <div>
                    <h4 className="font-inter text-sm font-600 text-zinc-200 mb-1">
                      {v.title}
                    </h4>
                    <p className="font-inter text-xs text-zinc-500 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="font-playfair text-3xl font-600 text-white text-center mb-12">
            Os Especialistas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-sm p-7 relative overflow-hidden group transition-all duration-300 hover:border-yellow-700/30"
                style={{
                  background: "linear-gradient(135deg, #141414, #111111)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Avatar placeholder */}
                <div
                  className="w-16 h-16 rounded-full mb-5 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #1c1c1c, #242424)",
                    border: "2px solid rgba(201, 168, 76, 0.3)",
                  }}
                >
                  <svg className="w-8 h-8 text-yellow-700/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                <h4 className="font-playfair text-xl font-600 text-white mb-1">
                  {member.name}
                </h4>
                <div className="font-inter text-xs text-yellow-600/80 mb-1 tracking-wide">
                  {member.role}
                </div>
                <div className="font-inter text-xs text-zinc-600 mb-4">
                  {member.oab} · {member.experience} de experiência
                </div>
                <p className="font-inter text-xs text-zinc-400 leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {member.spec.split(" · ").map((s) => (
                    <span
                      key={s}
                      className="font-inter text-[9px] text-yellow-700/70 bg-yellow-900/15 border border-yellow-900/25 px-2 py-0.5 rounded-full uppercase tracking-wide"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
