import { useState, useEffect } from 'react'

function Terminal() {

  const [texto, setTexto] = useState('')

  const frases = [
    'npm run dev',
    'git commit -m "aprendendo"',
    'node --version',
    'tsc --watch',
    'echo "tô tentando"',
  ]

  useEffect(() => {
    let pIdx = 0
    let cIdx = 0
    let digitando = true
    let timeout: ReturnType<typeof setTimeout>

    function animar() {
      const frase = frases[pIdx]

      if (digitando) {
        setTexto(frase.slice(0, cIdx++))
        if (cIdx > frase.length) {
          digitando = false
          timeout = setTimeout(animar, 1600)
          return
        }
        timeout = setTimeout(animar, 70)
      } else {
        setTexto(frase.slice(0, cIdx--))
        if (cIdx < 0) {
          digitando = true
          pIdx = (pIdx + 1) % frases.length
          timeout = setTimeout(animar, 220)
          return
        }
        timeout = setTimeout(animar, 30)
      }
    }

    animar()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="mt-16 max-w-2xl rounded-xl border border-ink-line bg-ink-soft/70 overflow-hidden reveal in">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-ink-line">
        <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
        <span className="ml-3 font-mono text-[11px] text-slate-500">~/iago — zsh</span>
      </div>
      <div className="px-5 py-4 font-mono text-[13px] leading-relaxed">
        <p className="text-slate-500"><span className="text-accent">→</span> cat sobre.txt</p>
        <p className="text-slate-300">18 anos, baseado em São Paulo.</p>
        <p className="text-slate-300">Trocando o front pelo back aos poucos.</p>
        <p className="text-slate-300">Gosto de café, terminal limpo e logs bonitos.</p>
        <p className="text-slate-500">
          <span className="text-accent">→ </span>
          <span id="cmdLine">{texto}</span>
          <span className="inline-block w-2 h-4 align-middle bg-accent animate-caret ml-0.5"></span>
        </p>
      </div>
    </div>
  )
}

export default Terminal