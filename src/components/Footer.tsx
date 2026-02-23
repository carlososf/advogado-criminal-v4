export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                <path d="M16 2L4 10v12l12 8 12-8V10L16 2z" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
                <path d="M10 15h12M16 9v14" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div>
                <span className="font-playfair text-white font-700 text-lg tracking-wide leading-none block">
                  CASTELLO &amp; ASSOCIADOS
                </span>
                <span className="text-[10px] text-yellow-600/70 tracking-[0.2em] font-inter font-400 uppercase">
                  Advocacia Criminal de Elite
                </span>
              </div>
            </div>
            <p className="font-inter text-sm text-zinc-500 leading-relaxed max-w-sm mb-6">
              28 anos de atuação em direito penal de alta complexidade. Defesa estratégica
              e implacável para quem não pode se dar ao luxo de perder.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-inter text-xs text-zinc-500">
                Inscrito na OAB/SP · Subseção São Paulo
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-inter text-xs text-zinc-500">
                Comunicações criptografadas · LGPD compliant
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter text-xs text-zinc-400 uppercase tracking-[0.15em] mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#hero" },
                { label: "Sua Situação", href: "#stages" },
                { label: "Linhas de Defesa", href: "#defense" },
                { label: "O Escritório", href: "#about" },
                { label: "Casos & Resultados", href: "#cases" },
                { label: "Contato", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-zinc-500 hover:text-yellow-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="font-inter text-xs text-zinc-400 uppercase tracking-[0.15em] mb-5">
              Emergência
            </h4>
            <div
              className="rounded-sm p-5"
              style={{
                background: "linear-gradient(135deg, #141414, #111111)",
                border: "1px solid rgba(201, 168, 76, 0.15)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                <span className="font-inter text-xs text-yellow-500 font-500">Plantão 24/7 Ativo</span>
              </div>
              <a
                href="https://wa.me/5511999999999?text=Preciso%20de%20atendimento%20urgente"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-yellow-700 to-yellow-500 text-black font-inter text-xs font-700 py-3 rounded-sm hover:from-yellow-600 hover:to-yellow-400 transition-all mb-3 tracking-wide"
              >
                WhatsApp Urgente
              </a>
              <div className="font-inter text-xs text-zinc-500 text-center">
                Resposta em até 5 minutos
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <div className="font-inter text-xs text-zinc-600">
                📍 Av. Paulista, 1842 – 22° and. SP
              </div>
              <div className="font-inter text-xs text-zinc-600">
                📞 (11) 3222-3344
              </div>
              <div className="font-inter text-xs text-zinc-600">
                ✉️ contato@castello.adv.br
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-inter text-xs text-zinc-700 text-center md:text-left">
              © 2024 Castello & Associados Advocacia. Todos os direitos reservados.
              OAB/SP 123.456 · CNPJ 00.000.000/0001-00
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-inter text-xs text-zinc-700 hover:text-zinc-500 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="font-inter text-xs text-zinc-700 hover:text-zinc-500 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="font-inter text-xs text-zinc-700 hover:text-zinc-500 transition-colors">
                LGPD
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end pt-6">
            <a
              href="https://www.uebistudio.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity group"
            >
              <span className="font-inter text-xs text-zinc-500 tracking-[0.25em] uppercase">Desenvolvido por</span>
              <img src="/uebi.png" alt="UEBI Studio" className="h-7 md:h-8 object-contain brightness-90 group-hover:brightness-100 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
