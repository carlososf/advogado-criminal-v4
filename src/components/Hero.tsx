export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)",
      }}
    >
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large faint circle */}
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
          }}
        />
        {/* Bottom left accent */}
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
          }}
        />
        {/* Vertical gold line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 opacity-20"
          style={{
            background: "linear-gradient(to bottom, transparent, #c9a84c)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <div className="animate-fade-in-up animate-delay-100 inline-flex items-center gap-2 border border-yellow-700/40 bg-yellow-900/10 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
              <span className="font-inter text-xs text-yellow-500/90 tracking-[0.15em] uppercase">
                Plantão Ativo · Atendimento Imediato
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up animate-delay-200 font-playfair text-5xl lg:text-6xl xl:text-7xl font-700 text-white leading-[1.1] mb-6">
              Quando a sua{" "}
              <span className="text-gold-gradient">liberdade</span>{" "}
              está em jogo,
              <br />
              <span className="text-zinc-300">a técnica supera</span>
              <br />a tradição.
            </h1>

            {/* Sub */}
            <p className="animate-fade-in-up animate-delay-300 font-inter text-zinc-400 text-lg leading-relaxed mb-4 max-w-xl">
              Não responda a nenhuma pergunta sem sua defesa presente.{" "}
              <strong className="text-zinc-200 font-500">
                Atuamos desde a fase investigativa
              </strong>{" "}
              para evitar o pior cenário.
            </p>
            <p className="animate-fade-in-up animate-delay-300 font-inter text-zinc-500 text-base leading-relaxed mb-10 max-w-xl">
              Especialistas em crimes de colarinho branco e alta complexidade.
              Protegemos não apenas seu CPF, mas seu{" "}
              <strong className="text-zinc-300 font-500">legado e sua família</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up animate-delay-400 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511999999999?text=Preciso%20de%20atendimento%20urgente"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-700 to-yellow-500 text-black font-inter font-700 text-sm px-8 py-4 rounded-sm hover:from-yellow-600 hover:to-yellow-400 transition-all duration-300 tracking-wide shadow-lg shadow-yellow-900/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar Agora com Especialista
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#stages"
                className="flex items-center justify-center gap-2 border border-zinc-600 text-zinc-300 font-inter font-500 text-sm px-8 py-4 rounded-sm hover:border-yellow-700/60 hover:text-yellow-500 transition-all duration-300 tracking-wide"
              >
                Identificar minha situação
              </a>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-in-up animate-delay-500 flex flex-wrap gap-8 mt-12 pt-10 border-t border-zinc-800">
              {[
                { num: "28+", label: "Anos de Atuação" },
                { num: "2.400+", label: "Casos Encerrados" },
                { num: "97%", label: "Taxa de Êxito" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-playfair text-2xl font-700 text-gold-gradient">
                    {stat.num}
                  </div>
                  <div className="font-inter text-xs text-zinc-500 mt-1 tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column – visual card */}
          <div className="animate-fade-in-up animate-delay-400 hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div
                className="rounded-sm p-8 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #141414 0%, #1a1a1a 100%)",
                  border: "1px solid rgba(201, 168, 76, 0.2)",
                }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24"
                  style={{
                    background:
                      "linear-gradient(225deg, rgba(201,168,76,0.12) 0%, transparent 60%)",
                  }}
                />

                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #c9a84c, #f0d080)",
                    }}
                  >
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-inter text-sm font-600 text-zinc-200">
                      Portal de Acompanhamento
                    </div>
                    <div className="font-inter text-xs text-zinc-500">
                      Processo Nº 0012345-67.2024
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-inter text-xs text-zinc-400 uppercase tracking-wide">
                      Fase do Processo
                    </span>
                    <span className="font-inter text-xs text-yellow-500 font-600">
                      Instrução Criminal
                    </span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full"
                      style={{
                        width: "65%",
                        background:
                          "linear-gradient(90deg, #c9a84c, #f0d080)",
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="font-inter text-[10px] text-zinc-600">Investigação</span>
                    <span className="font-inter text-[10px] text-zinc-600">Sentença</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Habeas corpus impetrado", done: true, date: "12 Jan" },
                    { label: "Audiência de instrução", done: true, date: "28 Jan" },
                    { label: "Alegações finais", done: false, date: "15 Mar" },
                    { label: "Sentença", done: false, date: "Pendente" },
                  ].map((step) => (
                    <div
                      key={step.label}
                      className="flex items-center justify-between py-2 border-b border-zinc-800/60"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                            step.done
                              ? "bg-yellow-600"
                              : "border border-zinc-600 bg-transparent"
                          }`}
                        >
                          {step.done && (
                            <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span
                          className={`font-inter text-xs ${
                            step.done ? "text-zinc-400" : "text-zinc-300"
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                      <span className="font-inter text-[10px] text-zinc-600">
                        {step.date}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-3 rounded-sm bg-yellow-900/10 border border-yellow-700/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                    <span className="font-inter text-xs text-yellow-500/90">
                      Dr. Castello monitora seu processo em tempo real
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -left-5 px-5 py-3 rounded-sm shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #1c1c1c, #141414)",
                  border: "1px solid rgba(201, 168, 76, 0.3)",
                }}
              >
                <div className="font-inter text-xs text-zinc-400">
                  Documentos criptografados
                </div>
                <div className="font-inter text-sm font-600 text-zinc-200 flex items-center gap-2 mt-0.5">
                  <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Envio seguro LGPD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="font-inter text-[10px] text-zinc-500 tracking-widest uppercase">Role para baixo</span>
        <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
