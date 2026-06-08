import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import logoImage from "@/assets/Logo_Horizontal.png";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Início", id: "home" },
  { label: "Áreas de atuação", id: "areas" },
  { label: "Sobre", id: "about" },
  { label: "Contato", id: "contact" },
];

const WHATSAPP_LINK =
  "https://wa.me/45991010233?text=Olá!%20Gostaria%20de%20receber%20orientação%20sobre%20meu%20caso%20previdenciário";

export default function Header() {
  const isMobile = useIsMobile();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 40);
        ticking = false;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback(
    (id: string) => {
      const element = document.getElementById(id);

      if (!element) return;

      const headerOffset = isMobile ? 95 : 90;

      const y =
        element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
    },
    [isMobile],
  );

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 140) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleActiveSection();

    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        h-20
        transition-all
        duration-500
        ease-out
        ${
          isScrolled
            ? `
                bg-[rgba(248,246,242,0.92)]
                backdrop-blur-xl
                border-b
                border-[#e8dcc5]
                shadow-[0_10px_40px_rgba(155,117,56,0.08)]
              `
            : "bg-transparent"
        }
      `}
    >
      <div className="container mx-auto h-full px-6 md:px-8">
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex h-full items-center justify-between"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <img
              src={logoImage}
              alt="Verônica Fernandes"
              loading="eager"
              decoding="async"
              className="h-auto w-[220px] md:w-[280px] lg:w-[250px]"
            />
          </a>

          {!isMobile && (
            <nav className="flex items-center gap-12">
              {navItems.map((item) => {
                const active = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`
                      group
                      relative
                      text-sm
                      font-medium
                      tracking-[0.20em]
                      uppercase
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      ${
                        active
                          ? "text-(--gold-deep)"
                          : "text-(--secondary-foreground)"
                      }
                    `}
                  >
                    {item.label}

                    <span
                      className={`
                        absolute
                        -bottom-2
                        left-1/2
                        h-px
                        -translate-x-1/2
                        bg-(--gold-deep)
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${active ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  </a>
                );
              })}
            </nav>
          )}

          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Abrir menu"
            >
              <div className="flex h-12 w-12 items-center justify-end">
                <div className="flex flex-col gap-2 cursor-pointer">
                  <motion.div className="h-[1.5px] w-8 bg-(--gold-deep)" />
                  <motion.div className="h-[1.5px] w-6 bg-(--gold-deep)" />
                  <motion.div className="h-[1.5px] w-8 bg-(--gold-deep)" />
                </div>
              </div>
            </button>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[999] bg-white/10 backdrop-blur-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.nav
              aria-label="Menu móvel"
              className="fixed right-0 top-0 z-[1000] flex h-dvh w-[85%] max-w-[380px] flex-col bg-white px-8 pt-24 pb-8 shadow-[0_20px_80px_rgba(0,0,0,0.12)]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <button
                aria-label="Fechar menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute right-5 cursor-pointer top-5 text-(--gold-deep) transition-transform duration-300 hover:rotate-90"
              >
                <X size={26} />
              </button>

              <div className="flex flex-1 flex-col">
                <div>
                  {navItems.map((item) => {
                    const active = activeSection === item.id;

                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                        className={`group flex items-center justify-between border-b border-[#E8DDC9] py-6 text-[2rem] font-light transition-all duration-300 ${active ? "text-(--gold-deep)" : "text-(--foreground) hover:text-(--gold-deep)"}`}
                      >
                        <span className="transition-transform duration-300 group-hover:translate-x-3">
                          {item.label}
                        </span>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-auto pt-10">
                  <Button
                    asChild
                    className="h-14 w-full rounded-lg cursor-pointer bg-(--gold-deep) text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_12px_30px_rgba(155,117,56,0.25)]"
                  >
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agendar consulta
                    </a>
                  </Button>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
