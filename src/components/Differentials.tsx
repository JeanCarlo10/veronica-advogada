import { Heart, Target, MessageSquare, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp } from "@/animations";

const items = [
  {
    icon: Heart,
    title: "Atendimento personalizado",
    description:
      "Escuta atenta e dedicação genuína a cada cliente e a cada situação.",
  },
  {
    icon: Target,
    title: "Estratégia individualizada",
    description:
      "Cada caso recebe uma análise técnica e uma estratégia exclusiva.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação clara",
    description:
      "Linguagem acessível em todas as etapas, sem juridiquês desnecessário.",
  },
  {
    icon: ShieldCheck,
    title: "Ética e sigilo",
    description:
      "Compromisso absoluto com a confidencialidade e a conduta profissional.",
  },
];

const Differentials = () => {
  return (
    <section className="py-20 bg-(--gold-soft)/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-(--gold-deep)"
          >
            Diferenciais
          </motion.span>

          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-4 mb-4 font-display text-3xl md:text-4xl lg:text-5xl text-(--foreground)"
          >
            Atendimento previdenciário estratégico, claro e humanizado
          </motion.h2>

          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="hairline mt-8 mx-auto w-32"
          ></motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 36,
                scale: 0.96,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.015,
                transition: {
                  duration: 0.35,
                  ease: "easeOut",
                },
              }}
              className="group relative overflow-hidden bg-(--card) rounded-2xl p-8 shadow-card border border-(--border)/50 transition-colors duration-500 hover:border-(--gold)/70 hover:shadow-[0_24px_70px_rgba(156,125,61,0.18)]"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,rgba(204,178,129,0.18),transparent_42%)]"
              />

              <div
                aria-hidden
                className="absolute -left-24 top-0 h-full w-20 rotate-12 bg-white/20 opacity-0 blur-xl transition-all duration-1000 group-hover:left-[120%] group-hover:opacity-100"
              />

              <motion.div
                whileHover={{
                  rotate: 4,
                  scale: 1.08,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="relative z-10 w-12 h-12 rounded-xl bg-(--gold-soft)/40 flex items-center justify-center text-(--gold-deep) group-hover:bg-(--gold-deep) group-hover:text-(--primary-foreground) transition-colors duration-500"
              >
                <item.icon size={22} strokeWidth={1.5} />
              </motion.div>

              <h3 className="relative z-10 mt-6 font-display text-xl text-(--foreground)">
                {item.title}
              </h3>

              <p className="relative z-10 mt-4 text-sm text-(--muted-foreground) leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
