import HeroImage from "@/assets/Hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-(--primary-foreground)"
    >
      {/* Elementos decorativos de fundo */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-(--gold-soft)/30 blur-3xl"
      />

      <div
        aria-hidden
        className="absolute bottom-0 -left-32 w-[320px] h-[320px] rounded-full bg-(--gold)/15 blur-3xl"
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center w-full py-24 lg:py-20">
          {/* Conteúdo da esquerda */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="font-bold text-(--gold-deep) text-5xl sm:text-6xl lg:text-7xl xl:text-7xl leading-[1.02] max-w-4xl">
              Advocacia previdenciária com estratégia, clareza e segurança
            </h1>

            <p className="mt-8 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-(--muted-foreground)">
              Atuação especializada em aposentadorias, auxílios e benefícios
              para orientar você em cada etapa do processo.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 bg-(--gold-deep) text-(--primary-foreground) px-8 py-4 rounded-full text-sm font-semibold hover:shadow-elevated hover:-translate-y-0.5 transition-all min-w-[210px]"
              >
                Agendar consulta
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium border border-(--gold) text-(--foreground) hover:bg-(--gold-soft)/30 transition-all min-w-[230px]"
              >
                Conhecer áreas de atuação
              </a>
            </div>
          </div>

          {/* Imagem da direita */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] border border-(--gold)/40"
              />

              <div
                aria-hidden
                className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl bg-(--gold-soft) -z-10"
              />

              <div
                aria-hidden
                className="absolute -top-8 -left-8 w-24 h-24 rounded-full border border-(--gold-deep)/40"
              />

              <div className="relative rounded-[1.75rem] overflow-hidden shadow-elevated bg-(--muted)">
                <img
                  src={HeroImage}
                  alt="Foto - Dra. Verônica Fernandes"
                  width={896}
                  height={1152}
                  className="w-full h-full object-cover aspect-[4/5]"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />

                <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-[1.75rem] pointer-events-none" />
              </div>

              <div className="absolute -bottom-4 left-6 right-6 bg-(--card) rounded-xl shadow-card px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-(--gold-deep) flex items-center justify-center text-(--primary-foreground) font-display text-lg">
                  VF
                </div>

                <div>
                  <div className="text-sm font-semibold text-(--foreground)">
                    Dra. Verônica Fernandes
                  </div>
                  <div className="text-xs text-(--muted-foreground)">
                    OAB/PR · 12.345
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
