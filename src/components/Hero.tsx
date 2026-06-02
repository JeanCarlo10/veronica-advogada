import { motion } from "framer-motion";
import HeroImage from "@/assets/Hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-(--primary-foreground)"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-(--gold-soft)/30 blur-3xl"
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
        className="absolute bottom-0 -left-32 w-[320px] h-[320px] rounded-full bg-(--gold)/20 blur-3xl"
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center w-full py-24 lg:py-20">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 34, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.22, ease: "easeOut" }}
              className="font-bold text-(--gold-deep) text-5xl sm:text-6xl lg:text-7xl xl:text-7xl leading-[1.02] max-w-4xl"
            >
              Advocacia previdenciária com estratégia, clareza e segurança
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38, ease: "easeOut" }}
              className="mt-8 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-(--muted-foreground)"
            >
              Atuação especializada em aposentadorias, auxílios e benefícios
              para orientar você em cada etapa do processo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.52, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#contato"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-(--gold-deep) text-(--primary-foreground) px-8 py-4 rounded-full text-sm font-semibold hover:shadow-elevated hover:-translate-y-0.5 transition-all min-w-[210px]"
              >
                <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
                <span className="relative z-10">Agendar consulta</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium border border-(--gold) text-(--foreground) hover:bg-(--gold-soft)/30 hover:-translate-y-0.5 transition-all min-w-[230px]"
              >
                Conhecer áreas de atuação
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 46, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.35, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
                className="absolute -inset-4 rounded-[2rem] border border-(--gold)/40"
              />

              <motion.div
                aria-hidden
                initial={{ opacity: 0, x: 22, y: 22 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
                className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl bg-(--gold-soft) -z-10"
              />

              <motion.div
                aria-hidden
                initial={{ opacity: 0, x: -18, y: -18 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85, ease: "easeOut" }}
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

              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.95, ease: "easeOut" }}
                className="absolute -bottom-4 left-6 right-6 bg-(--card) rounded-xl shadow-card px-5 py-3 flex items-center gap-3"
              >
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
