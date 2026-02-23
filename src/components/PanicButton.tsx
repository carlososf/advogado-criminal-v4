import { useState } from "react";

export function PanicButton() {
  const [expanded, setExpanded] = useState(false);

  const options = [
    {
      label: "Fui detido agora",
      emoji: "🚨",
      msg: "SOS%3A%20Fui%20detido%20agora%20e%20preciso%20de%20defesa%20imediata",
      color: "bg-red-950 border-red-700/40 hover:bg-red-900/60",
    },
    {
      label: "Recebi intimação urgente",
      emoji: "📋",
      msg: "Recebi%20uma%20intima%C3%A7%C3%A3o%20urgente%20e%20preciso%20de%20orienta%C3%A7%C3%A3o",
      color: "bg-yellow-950 border-yellow-700/40 hover:bg-yellow-900/40",
    },
    {
      label: "Familiar foi preso",
      emoji: "👤",
      msg: "Um%20familiar%20foi%20preso%20e%20preciso%20de%20habeas%20corpus%20urgente",
      color: "bg-zinc-900 border-zinc-700/40 hover:bg-zinc-800/60",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Options panel */}
      {expanded && (
        <div
          className="flex flex-col gap-2 w-72 p-4 rounded-sm shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #1a1a1a, #141414)",
            border: "1px solid rgba(201, 168, 76, 0.25)",
          }}
        >
          <div className="font-inter text-xs text-zinc-400 mb-1 tracking-wide uppercase">
            Selecione sua situação:
          </div>
          {options.map((opt) => (
            <a
              key={opt.label}
              href={`https://wa.me/5511999999999?text=${opt.msg}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setExpanded(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-sm border transition-all duration-200 ${opt.color}`}
            >
              <span className="text-lg">{opt.emoji}</span>
              <span className="font-inter text-sm text-zinc-200 font-500">
                {opt.label}
              </span>
            </a>
          ))}
          <div
            className="mt-1 pt-3 border-t border-zinc-800 font-inter text-[10px] text-zinc-600 text-center"
          >
            Resposta média: 3 minutos · Plantão 24h
          </div>
        </div>
      )}

      {/* Main panic button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`panic-pulse flex items-center gap-3 px-5 py-4 rounded-sm shadow-2xl font-inter font-700 text-sm transition-all duration-300 ${
          expanded
            ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
            : "text-black border border-yellow-500/30"
        }`}
        style={
          !expanded
            ? {
                background: "linear-gradient(135deg, #c9a84c, #f0d080)",
              }
            : {}
        }
        aria-label="Botão de emergência"
      >
        {expanded ? (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Fechar
          </>
        ) : (
          <>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            Emergência 24h
          </>
        )}
      </button>
    </div>
  );
}
