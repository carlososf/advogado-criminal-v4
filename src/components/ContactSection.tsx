import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    situation: "",
    message: "",
    lgpd: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const situations = [
    "Estou sendo investigado",
    "Fui preso ou familiar foi preso",
    "Recebi intimação ou citação",
    "Fui condenado e quero recorrer",
    "Preciso de compliance criminal",
    "Outro assunto",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá, meu nome é ${form.name}.\nSituação: ${form.situation}\nE-mail: ${form.email}\nTelefone: ${form.phone}\nMensagem: ${form.message}`
    );
    window.open(`https://wa.me/5511999999999?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#0c0c0c] relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
      />

      {/* Background glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <div className="inline-flex items-center gap-2 border border-yellow-700/30 bg-yellow-900/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
              <span className="font-inter text-xs text-yellow-600/80 tracking-[0.15em] uppercase">
                Plantão Ativo 24h
              </span>
            </div>

            <h2 className="font-playfair text-4xl lg:text-5xl font-700 text-white mb-5 leading-tight">
              Falar agora com{" "}
              <span className="text-gold-gradient">um especialista</span>
            </h2>
            <p className="font-inter text-zinc-400 text-lg leading-relaxed mb-10">
              Não espere. Em direito criminal, cada hora pode ser determinante.
              Nossa equipe está de plantão e pronta para atendê-lo agora.
            </p>

            {/* Contact options */}
            <div className="space-y-4 mb-10">
              <a
                href="https://wa.me/5511999999999?text=Preciso%20de%20atendimento%20urgente"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-sm group transition-all duration-200 hover:border-yellow-700/30"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(201, 168, 76, 0.15)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #1a2e1a, #0d1f0d)" }}
                >
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="font-inter text-xs text-zinc-500 mb-0.5">WhatsApp Emergência</div>
                  <div className="font-inter text-sm font-600 text-zinc-200">
                    +55 (11) 9 9999-9999
                  </div>
                  <div className="font-inter text-xs text-green-400 mt-0.5">● Online agora</div>
                </div>
                <svg className="w-4 h-4 text-zinc-600 ml-auto group-hover:text-yellow-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="tel:+551132223344"
                className="flex items-center gap-4 p-5 rounded-sm group transition-all duration-200 hover:border-yellow-700/30"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(201, 168, 76, 0.1)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #1c1a10, #1a1608)" }}
                >
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-inter text-xs text-zinc-500 mb-0.5">Escritório</div>
                  <div className="font-inter text-sm font-600 text-zinc-200">
                    (11) 3222-3344
                  </div>
                  <div className="font-inter text-xs text-zinc-500 mt-0.5">
                    Seg–Sex, 8h–20h
                  </div>
                </div>
              </a>

              <div
                className="flex items-center gap-4 p-5 rounded-sm"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(201, 168, 76, 0.08)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #101820, #0a1220)" }}
                >
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-inter text-xs text-zinc-500 mb-0.5">Endereço</div>
                  <div className="font-inter text-sm font-600 text-zinc-200">
                    Av. Paulista, 1842 – 22° andar
                  </div>
                  <div className="font-inter text-xs text-zinc-500 mt-0.5">
                    Bela Vista, São Paulo – SP
                  </div>
                </div>
              </div>
            </div>

            {/* LGPD note */}
            <div className="flex items-start gap-3 p-4 rounded-sm bg-zinc-900/40 border border-zinc-800/40">
              <svg className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p className="font-inter text-xs text-zinc-500 leading-relaxed">
                Seus dados são protegidos por criptografia end-to-end e tratados com total sigilo
                conforme a Lei Geral de Proteção de Dados (LGPD – Lei 13.709/2018) e o sigilo
                profissional do advogado.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div
            className="rounded-sm p-8"
            style={{
              background: "linear-gradient(135deg, #141414, #111111)",
              border: "1px solid rgba(201, 168, 76, 0.15)",
            }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
                >
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-600 text-white mb-3">
                  Mensagem enviada
                </h3>
                <p className="font-inter text-zinc-400 text-sm leading-relaxed">
                  Nossa equipe recebeu seu contato e retornará em breve.
                  Em caso de urgência, chame pelo WhatsApp direto.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-inter text-sm text-yellow-600 hover:text-yellow-500 transition-colors"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-playfair text-2xl font-600 text-white mb-2">
                  Avaliação Confidencial
                </h3>
                <p className="font-inter text-sm text-zinc-500 mb-7">
                  Preencha o formulário e um especialista entrará em contato em até 1 hora.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-inter text-xs text-zinc-400 mb-1.5 block">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                        className="w-full bg-zinc-900/60 border border-zinc-700/50 rounded-sm px-4 py-3 font-inter text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-yellow-700/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-inter text-xs text-zinc-400 mb-1.5 block">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="(11) 9 9999-9999"
                        className="w-full bg-zinc-900/60 border border-zinc-700/50 rounded-sm px-4 py-3 font-inter text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-yellow-700/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-inter text-xs text-zinc-400 mb-1.5 block">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-zinc-900/60 border border-zinc-700/50 rounded-sm px-4 py-3 font-inter text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-yellow-700/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-xs text-zinc-400 mb-1.5 block">
                      Qual sua situação atual? *
                    </label>
                    <select
                      name="situation"
                      value={form.situation}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-900/60 border border-zinc-700/50 rounded-sm px-4 py-3 font-inter text-sm text-zinc-200 focus:outline-none focus:border-yellow-700/60 transition-colors"
                      style={{ appearance: "none" }}
                    >
                      <option value="" className="bg-zinc-900">
                        Selecione sua situação
                      </option>
                      {situations.map((s) => (
                        <option key={s} value={s} className="bg-zinc-900">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-inter text-xs text-zinc-400 mb-1.5 block">
                      Descreva brevemente o caso
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Descreva sua situação de forma resumida. Todas as informações são protegidas por sigilo profissional..."
                      className="w-full bg-zinc-900/60 border border-zinc-700/50 rounded-sm px-4 py-3 font-inter text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-yellow-700/60 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="lgpd"
                      id="lgpd"
                      checked={form.lgpd}
                      onChange={handleChange}
                      required
                      className="mt-0.5 w-4 h-4 accent-yellow-600 flex-shrink-0"
                    />
                    <label htmlFor="lgpd" className="font-inter text-xs text-zinc-500 leading-relaxed">
                      Autorizo o tratamento dos meus dados para fins de contato profissional,
                      conforme a LGPD. Entendo que as informações são confidenciais.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-700 to-yellow-500 text-black font-inter font-700 text-sm py-4 rounded-sm hover:from-yellow-600 hover:to-yellow-400 transition-all duration-300 tracking-wide mt-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Solicitar Avaliação Confidencial
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
