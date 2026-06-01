import { MapPin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideUp } from "@/animations";

const WHATSAPP_NUMBER = "45991010233";
const WHATSAPP_TEXT = "Olá! Gostaria de agendar um atendimento.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT,
)}`;

const Contact = () => {
  return (
    <section id="contact" className="pt-10 pb-20 bg-(--background)">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-4xl text-(--primary) md:text-5xl font-bold mb-4"
          >
            Agende seu atendimento
          </motion.h2>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-lg text-(--muted-foreground) max-w-2xl mx-auto"
          >
            Estamos prontos para oferecer cuidado premium, proteção e acabamento
            impecável ao seu veículo.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl p-6 bg-(--card) border border-white/10 flex flex-col gap-8">
                <div className="flex flex-col md:flex-row">
                  <div className="min-w-12 min-h-12 w-12 h-12 bg-(--sub-card) rounded-full flex items-center justify-center mr-4 mb-1">
                    <FaWhatsapp className="w-6 h-6 text-(--primary)" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-white text-lg font-semibold">
                      WhatsApp
                    </span>

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 text-base font-medium hover:underline"
                      aria-label="Abrir conversa no WhatsApp"
                    >
                      (45) 99805-4299
                    </a>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="min-w-12 min-h-12 w-12 h-12 bg-(--sub-card) rounded-full flex items-center justify-center mr-4 mb-1">
                    <Mail className="w-6 h-6 text-(--primary)" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-lg font-semibold">
                      E-mail
                    </span>
                    <a
                      className="text-white/70 sm:text-base md:text-sm lg:text-base"
                      href="mailto:detailer@gmail.com"
                    >
                      detailer@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="min-w-12 min-h-12 w-12 h-12 bg-(--sub-card) rounded-full flex items-center justify-center mr-4 mb-1">
                    <MapPin className="w-6 h-6 text-(--primary)" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-lg font-semibold">
                      Endereço
                    </span>
                    <span className="text-white/70 text-base flex-wrap">
                      Av. Silvio Américo Sasdelli, 3176 - Lancaster, Foz do
                      Iguaçu - PR
                    </span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl p-4 overflow-hidden bg-(--card) border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.330047496725!2d-54.55200329999999!3d-25.494037000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6914065d647b1%3A0xfdd5740410ffacef!2sDetailer%20Est%C3%A9tica%20Automotiva!5e0!3m2!1spt-BR!2sbr!4v1774673238222!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="350"
                  style={{ borderRadius: 4 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de localização da empresa"
                  aria-label="Mapa mostrando a localização da empresa"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
