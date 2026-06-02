// import { MapPin, Mail } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { SlideUp } from "@/animations";

// const WHATSAPP_NUMBER = "45991010233";
// const WHATSAPP_TEXT = "Olá! Gostaria de agendar um atendimento.";
// const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//   WHATSAPP_TEXT,
// )}`;

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-(--background)">
//       <div className="container mx-auto px-6 md:px-8">
//         <div className="text-center mb-16">
//           <motion.span
//             variants={SlideUp(0.1)}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="text-xs tracking-[0.3em] uppercase text-(--gold-deep)"
//           >
//             Vamos Conversar?
//           </motion.span>

//           <motion.h2
//             variants={SlideUp(0.2)}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="mt-4 mb-4 font-display text-3xl md:text-4xl lg:text-5xl text-(--foreground)"
//           >
//             Entre em contato e receba orientação
//             <br className="hidden md:block" />
//             <span className="md:inline"> jurídica para o seu caso</span>
//           </motion.h2>

//           <motion.div
//             variants={SlideUp(0.4)}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="hairline mt-8 mx-auto w-32"
//           ></motion.div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Contact Info Cards */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex flex-col gap-8">
//               <div className="rounded-2xl p-6 bg-(--card) border border-white/10 flex flex-col gap-8">
//                 <div className="flex flex-col md:flex-row">
//                   <div className="min-w-12 min-h-12 w-12 h-12 bg-(--primary) rounded-full flex items-center justify-center mr-4 mb-1">
//                     <FaWhatsapp className="w-6 h-6 text-(--gold-soft)" />
//                   </div>

//                   <div className="flex flex-col">
//                     <span className="text-(--primary) text-lg font-semibold">
//                       WhatsApp
//                     </span>

//                     <a
//                       href={WHATSAPP_LINK}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-(--primary)/70 text-base font-medium hover:underline"
//                       aria-label="Abrir conversa no WhatsApp"
//                     >
//                       (45) 99101-0233
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex flex-col md:flex-row">
//                   <div className="min-w-12 min-h-12 w-12 h-12 bg-(--primary) rounded-full flex items-center justify-center mr-4 mb-1">
//                     <Mail className="w-6 h-6 text-(--gold-soft)" />
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-(--primary) text-lg font-semibold">
//                       E-mail
//                     </span>
//                     <a
//                       className="text-(--primary)/70 sm:text-base md:text-sm lg:text-base"
//                       href="mailto:veronicafernandes.adv@gmail.com"
//                     >
//                       veronicafernandes.adv@gmail.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex flex-col md:flex-row">
//                   <div className="min-w-12 min-h-12 w-12 h-12 bg-(--primary) rounded-full flex items-center justify-center mr-4 mb-1">
//                     <MapPin className="w-6 h-6 text-(--gold-soft)" />
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-(--primary) text-lg font-semibold">
//                       Endereço
//                     </span>
//                     <span className="text-(--primary)/70 text-base flex-wrap">
//                       Av. Valdomiro Faremberger, 237 - Três Lagoas, Foz do
//                       Iguaçu - PR
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Map */}
//               <div className="rounded-2xl p-4 overflow-hidden bg-(--card) border border-white/10">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.330047496725!2d-54.55200329999999!3d-25.494037000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6914065d647b1%3A0xfdd5740410ffacef!2sDetailer%20Est%C3%A9tica%20Automotiva!5e0!3m2!1spt-BR!2sbr!4v1774673238222!5m2!1spt-BR!2sbr"
//                   width="100%"
//                   height="350"
//                   style={{ borderRadius: 4 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Mapa de localização da empresa"
//                   aria-label="Mapa mostrando a localização da empresa"
//                 ></iframe>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { motion } from "framer-motion";
import { SlideUp } from "@/animations";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";

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
      className="py-28 bg-gradient-to-b from-white to-(--gold-soft)/10"
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className="
              rounded-[40px]
              border
              border-(--gold-deep)/20
              bg-white
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              overflow-hidden
            "
          >
            <div className="grid lg:grid-cols-2 items-center">
              {/* FOTO */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-full
                    bg-gradient-to-r
                    from-(--gold-soft)/20
                    to-transparent
                  "
                />

                <img
                  src={VeronicaImage}
                  alt="Verônica Fernandes"
                  className="
                    w-full
                    h-full
                    object-cover
                    min-h-[650px]
                  "
                />
              </motion.div>

              <div className="p-10 md:p-16">
                <motion.span
                  variants={SlideUp(0.1)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="
                    text-xs
                    uppercase
                    tracking-[0.35em]
                    text-(--gold-deep)
                  "
                >
                  Vamos Conversar?
                </motion.span>

                <motion.h2
                  variants={SlideUp(0.2)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="
                    mt-6
                    font-display
                    text-4xl
                    md:text-5xl
                    text-(--foreground)
                    leading-tight
                  "
                >
                  Estamos prontos para ouvir você
                </motion.h2>

                <motion.p
                  variants={SlideUp(0.3)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="
                    mt-6
                    text-lg
                    leading-relaxed
                    text-(--muted-foreground)
                  "
                >
                  Cada caso possui suas particularidades. Receba orientação
                  jurídica especializada para aposentadorias, benefícios
                  previdenciários, revisões e planejamento previdenciário.
                </motion.p>

                {/* CTA */}
                <motion.a
                  variants={SlideUp(0.4)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    mt-10
                    px-8
                    py-4
                    rounded-full
                    bg-(--primary)
                    text-white
                    font-medium
                    transition-all
                    hover:scale-105
                  "
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Falar no WhatsApp
                </motion.a>

                {/* INFO */}
                <motion.div
                  variants={SlideUp(0.5)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="
                    mt-12
                    pt-8
                    border-t
                    border-(--gold-deep)/20
                    space-y-6
                  "
                >
                  <div className="flex items-center gap-4">
                    <FaWhatsapp className="w-5 h-5 text-(--gold-deep)" />

                    <div>
                      <p className="font-medium text-(--foreground)">
                        WhatsApp
                      </p>

                      <p className="text-(--muted-foreground)">
                        (45) 99101-0233
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-(--gold-deep)" />

                    <div>
                      <p className="font-medium text-(--foreground)">E-mail</p>

                      <p className="text-(--muted-foreground)">
                        veronicafernandes.adv@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-(--gold-deep)" />

                    <div>
                      <p className="font-medium text-(--foreground)">
                        Atendimento Presencial
                      </p>

                      <p className="text-(--muted-foreground)">
                        Av. Valdomiro Faremberger, 237 - Três Lagoas, Foz do
                        Iguaçu - PR
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
