function About() {
  return (
    <section className="py-24 px-6 border-t border-ink-line">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[200px_1fr] gap-10">

        <div className="reveal in">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500">.01</p>
          <h2 className="font-sans font-semibold text-3xl mt-1">Sobre</h2>
        </div>

        <div>
          <p className="text-xl leading-relaxed text-slate-300">
            Sou estudante, e isso é a parte mais honesta deste site. Estou no começo — gosto da sensação de descobrir como uma API funciona por dentro, de quebrar as coisas e ler stack traces até entender por que quebrou.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Por enquanto, meu objetivo é construir uma base sólida em TypeScript, Node e React. Comecei pelo front porque era visual, mas tô percebendo que o que me prende mais é o back-end: bancos, queries, arquitetura, a camada que ninguém vê. Vou levar isso a sério — sem pressa de me declarar sênior em nada.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Esse portfólio vai mudar bastante. Cada projeto novo entra aqui assim que ficar pronto o suficiente pra mostrar.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-2 font-mono text-sm">
            <li className="flex justify-between border-b border-ink-line py-1.5">
              <span className="text-slate-500">base</span>
              <span className="text-slate-300">Ribeirão Preto, SP</span>
            </li>
            <li className="flex justify-between border-b border-ink-line py-1.5">
              <span className="text-slate-500">foco</span>
              <span className="text-slate-300">Desenvolvimento Web</span>
            </li>
            <li className="flex justify-between border-b border-ink-line py-1.5">
              <span className="text-slate-500">formação</span>
              <span className="text-slate-300">Desenvolvimento de Sistemas</span>
            </li>
            <li className="flex justify-between border-b border-ink-line py-1.5">
              <span className="text-slate-500">estudando</span>
              <span className="text-slate-300">full-stack</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default About