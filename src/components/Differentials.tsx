import { Heart, Target, MessageSquare, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Heart,
    title: "Atendimento personalizado",
    description: "Escuta atenta e dedicação genuína a cada cliente e a cada situação.",
  },
  {
    icon: Target,
    title: "Estratégia individualizada",
    description: "Cada caso recebe uma análise técnica e uma estratégia exclusiva.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação clara",
    description: "Linguagem acessível em todas as etapas, sem juridiquês desnecessário.",
  },
  {
    icon: ShieldCheck,
    title: "Ética e sigilo",
    description: "Compromisso absoluto com a confidencialidade e a conduta profissional.",
  },
];

const Differentials = () => {
  return (
    <section className="py-20 bg-(--gold-soft)/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-(--gold-deep)">
            Diferenciais
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 text-(--foreground)">
            Atendimento previdenciário estratégico, claro e humanizado
          </h2>
          <div className="hairline mt-8 mx-auto w-32" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group bg-(--card) rounded-2xl p-8 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 border border-(--border)/50"
            >
              <div className="w-12 h-12 rounded-xl bg-(--gold-soft)/40 flex items-center justify-center text-(--gold-deep) group-hover:bg-(--gold-deep) group-hover:text-(--primary-foreground) transition-colors">
                <item.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-xl text-(--foreground)">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-(--muted-foreground) leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
