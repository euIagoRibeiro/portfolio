import Terminal from "../Terminal"

function Hero() {
  return (
    <section id="top" className="grid-bg pt-18 pb-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">

        <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
          <span className="text-accent">$</span> whoami
        </p>

        <h1 className="font-sans font-semibold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
          Olá, eu sou o <span className="text-accent">Iago</span>.{" "}
          Aprendendo a construir{" "}
          <span className="relative">
            coisas na web
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent/40" />
          </span>.
        </h1>

        <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400">
          Estudante de <span className="text-slate-200">Desenvolvimento de Sistemas</span>, com foco em{" "}
          <span className="text-slate-200">full-stack</span> — me encontrando
          aos poucos no <span className="text-slate-200">back-end</span>. Hoje
          estou estudando <span className="text-accent">TypeScript</span>,{" "}
          <span className="text-accent">Node.js</span>,{" "}
          <span className="text-accent">React</span> e{" "}
          <span className="text-accent">Tailwind</span>, e este portfólio é um
          dos primeiros lugares onde tô aplicando tudo isso.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-ink font-medium text-sm hover:bg-accent-soft transition"
          >
            Ver projetos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-line hover:border-accent text-sm font-medium transition"
          >
            Conversar
          </a>
          <span className="flex items-center gap-2 font-mono text-xs text-slate-500 ml-2">
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-blink" />
            aberto a estudar junto / freelas pequenas
          </span>
        </div>

        <Terminal />

      </div>
    </section>
  )
}

export default Hero