import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";
import { SlideUp } from "@/animations";

import VeronicaImage from "@/assets/About.png";

const WHATSAPP_NUMBER = "45991010233";

const WHATSAPP_TEXT =
  "Olá! Gostaria de receber orientação sobre meu caso previdenciário.";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT,
)}`;

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-(--background)"
    >
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-(--gold-deep)"
          >
            Vamos Conversar?
          </motion.span>

          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-4 mb-4 font-display text-3xl md:text-4xl lg:text-5xl text-(--foreground)"
          >
            Vamos analisar
            <br className="hidden md:block" />
            <span className="md:inline"> o seu caso?</span>
          </motion.h2>

          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="hairline mt-8 mx-auto w-32"
          ></motion.div>

          <motion.p
            variants={SlideUp(0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="
              mt-8
              text-lg
              md:text-xl
              text-(--muted-foreground)
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Uma orientação previdenciária adequada pode fazer toda a diferença
            na conquista dos seus direitos e na segurança do seu futuro.
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 px-10 py-5 rounded-full bg-(--primary) text-white text-lg font-medium transition-all hover:scale-105 hover:shadow-xl"
          >
            <FaWhatsapp className="w-6 h-6" />
            Falar no WhatsApp
          </motion.a>
        </div>

        {/* CARD ADVOGADA */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 max-w-4xl mx-auto rounded-[40px] border border-(--gold-deep)/15 bg-white p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* FOTO */}
            <div className="shrink-0">
              <img
                src={VeronicaImage}
                alt="Verônica Fernandes"
                className="
                  w-52
                  h-52
                  object-cover
                  rounded-full
                  border-4
                  border-(--gold-soft)
                "
              />
            </div>

            {/* TEXTO */}
            <div className="flex-1 text-center md:text-left">
              <h3
                className="
                  font-display
                  text-3xl
                  text-(--foreground)
                "
              >
                Verônica Scheffer Weiss Fernandes
              </h3>

              <p
                className="
                  mt-2
                  text-(--gold-deep)
                  tracking-wide
                  uppercase
                  text-sm
                "
              >
                Advogada Previdenciária
              </p>

              <p
                className="
                  mt-6
                  text-(--muted-foreground)
                  leading-relaxed
                "
              >
                Atendimento jurídico voltado à proteção dos direitos
                previdenciários, com acompanhamento personalizado, clareza nas
                orientações e comprometimento em cada etapa do processo.
              </p>

              {/* CONTATOS */}
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                {/* WhatsApp */}
                <div>
                  <FaWhatsapp className="mx-auto md:mx-0 w-5 h-5 text-(--gold-deep)" />
                  <p className="mt-2 text-sm ">(45) 99101-0233</p>
                </div>

                {/* Email */}
                <div>
                  <Mail className="mx-auto md:mx-0 w-5 h-5 text-(--gold-deep)" />
                  <p className="mt-2 text-sm">
                    veronicafernandes.adv@gmail.com
                  </p>
                </div>

                {/* Endereço */}
                <div className="md:col-span-2">
                  <MapPin className="mx-auto md:mx-0 w-5 h-5 text-(--gold-deep)" />
                  <p className="mt-2 text-sm">
                    Av. Valdomiro Faremberger, 237 - Três Lagoas - Foz do Iguaçu
                    - PR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
