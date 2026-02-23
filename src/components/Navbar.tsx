import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Sua Situação", href: "#stages" },
    { label: "Linhas de Defesa", href: "#defense" },
    { label: "O Escritório", href: "#about" },
    { label: "Casos", href: "#cases" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${
        scrolled
          ? "bg-black/85 border-b border-yellow-700/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
              <path d="M16 2L4 10v12l12 8 12-8V10L16 2z" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
              <path d="M10 15h12M16 9v14" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <span className="font-playfair text-white font-700 text-lg tracking-wide leading-none block">
              CASTELLO &amp; ASSOCIADOS
            </span>
            <span className="text-[10px] text-yellow-600/80 tracking-[0.2em] font-inter font-400 uppercase">
              Advocacia Criminal
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-inter text-sm text-zinc-400 hover:text-yellow-500 transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/5511999999999?text=Preciso%20de%20atendimento%20urgente"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-yellow-700 to-yellow-500 text-black text-sm font-inter font-600 px-5 py-2.5 rounded-sm hover:from-yellow-600 hover:to-yellow-400 transition-all duration-300 tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
          Plantão 24h
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-zinc-300 hover:text-yellow-500 transition-colors"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-yellow-700/20 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-inter text-sm text-zinc-300 hover:text-yellow-500 transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/5511999999999?text=Preciso%20de%20atendimento%20urgente"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-700 to-yellow-500 text-black text-sm font-inter font-600 px-5 py-3 rounded-sm w-full justify-center tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                Falar Agora – Plantão 24h
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
