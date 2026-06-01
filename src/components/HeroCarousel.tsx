import HeroImage from "@/assets/Hero.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-(--primary-foreground)">
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
            <h1 className="font-display text-(--foreground) text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.92] tracking-[-0.04em] max-w-4xl">
              Advocacia estratégica,{" "}
              <span className="italic text-(--gold-deep) font-light">
                humana
              </span>{" "}
              e personalizada para proteger seus direitos
            </h1>

            <p className="mt-8 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-(--muted-foreground)">
              Atendimento jurídico com clareza, ética e excelência para orientar
              você em decisões importantes com segurança.
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
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-(--gold-deep)/40"
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

      {/* Detalhes finos decorativos */}
      <div
        aria-hidden
        className="absolute top-16 right-[38%] w-24 h-24 rounded-full border border-(--gold)/30"
      />

      <div
        aria-hidden
        className="absolute top-20 right-[35%] w-32 h-32 rounded-full border border-(--gold)/20"
      />
    </section>
  );
};

export default Hero;

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// import HeroImage from "@/assets/Hero.png";

// type Slide = {
//   src: string;
//   alt: string;
//   title: string;
//   subtitle: string;
//   positionMobile?: string;
//   positionDesktop?: string;
// };

// const slides: Slide[] = [
//   {
//     src: HeroImage,
//     alt: "Hero 02",
//     title: "Advocacia previdenciária com estratégia, clareza e segurança",
//     subtitle:
//       "Atuação especializada em aposentadorias, auxílios e benefícios para orientar você em cada etapa do processo.",
//     positionMobile: "65% 50%",
//     positionDesktop: "50% 50%",
//   },
// ];

// const HeroCarousel = () => {
//   return (
//     <section className="w-full">
//       {/* Decorative shapes */}
//       <div
//         aria-hidden
//         className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-gold-soft/30 blur-3xl"
//       />
//       <div
//         aria-hidden
//         className="absolute bottom-0 -left-32 w-[320px] h-[320px] rounded-full bg-gold/20 blur-3xl"
//       />

//       <div className="relative w-full h-screen">
//         <Swiper
//           modules={[Autoplay, Pagination, EffectFade, Navigation]}
//           slidesPerView={1}
//           effect="fade"
//           loop
//           navigation
//           observer={false}
//           observeParents={false}
//           watchSlidesProgress={false}
//           resizeObserver
//           autoplay={{ delay: 3500, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           className="w-full h-full"
//         >
//           {slides.map((item, i) => {
//             return (
//               <SwiperSlide key={i} className="w-full h-full">
//                 <div className="relative w-full h-full">
//                   <img
//                     src={item.src}
//                     alt={item.alt}
//                     className="w-full h-full object-cover object-[var(--position-mobile)] sm:object-[var(--position-desktop)]"
//                     style={
//                       {
//                         ["--position-mobile" as any]:
//                           item.positionMobile ?? "50% 50%",
//                         ["--position-desktop" as any]:
//                           item.positionDesktop ?? "50% 50%",
//                       } as React.CSSProperties
//                     }
//                     loading={i === 0 ? "eager" : "lazy"}
//                     decoding="async"
//                     fetchPriority="high"
//                   />

//                   <div className="absolute inset-0 flex items-center">
//                     <div className="container mx-auto px-8">
//                       <div className="max-w-xl text-center md:text-left">
//                         {/* TITLE */}
//                         <h1 className="text-(--primary) font-extrabold text-3xl sm:text-4xl lg:text-6xl whitespace-pre-line">
//                           {item.title}
//                         </h1>

//                         {/* SUBTITLE */}
//                         <p className="mt-8 text-(--muted-foreground) text-sm sm:text-base lg:text-l font-semibold">
//                           {item.subtitle}
//                         </p>

//                         <div className="mt-10 flex flex-wrap gap-4">
//                           <a
//                             href="#contato"
//                             className="group inline-flex items-center gap-2 bg-(--gold-deep) text-(--primary-foreground) px-8 py-4 rounded-full text-sm tracking-wide hover:shadow-elevated hover:-translate-y-0.5 transition-all"
//                           >
//                             Agendar consulta
//                           </a>
//                           <a
//                             href="#areas"
//                             className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm tracking-wide border border-(--gold) text-(--foreground) hover:bg-(--gold-soft)/30 transition-all"
//                           >
//                             Conhecer áreas de atuação
//                           </a>
//                         </div>

//                         <div className="lg:col-span-5 reveal reveal-delay-2">
//                           <div className="relative mx-auto max-w-md">
//                             <div
//                               aria-hidden
//                               className="absolute -inset-4 rounded-[2rem] border border-gold/50"
//                             />
//                             <div
//                               aria-hidden
//                               className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl bg-gold-soft -z-10"
//                             />
//                             <div
//                               aria-hidden
//                               className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-gold-deep/40"
//                             />
//                             <div className="relative rounded-[1.75rem] overflow-hidden shadow-elevated bg-muted">
//                               <img
//                                 src={HeroImage}
//                                 alt="Veronica Fernandes, advogada"
//                                 width={896}
//                                 height={1152}
//                                 className="w-full h-full object-cover aspect-[4/5]"
//                               />
//                               <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-[1.75rem] pointer-events-none" />
//                             </div>
//                             <div className="absolute -bottom-4 left-6 right-6 bg-card rounded-xl shadow-card px-5 py-3 flex items-center gap-3">
//                               <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-white font-display text-lg">
//                                 V
//                               </div>
//                               <div>
//                                 <div className="text-sm font-medium">
//                                   Dra. Veronica Fernandes
//                                 </div>
//                                 <div className="text-xs text-muted-foreground">
//                                   OAB · Advocacia Premium
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         {/* <button
//                           onClick={() => {
//                             document
//                               .getElementById("contact")
//                               ?.scrollIntoView({ behavior: "smooth" });
//                           }}
//                           className="mt-8 inline-flex items-center border-(--primary) cursor-pointer rounded-lg transition px-6 py-3 font-semibold hover:scale-105"
//                         >
//                           Agendar Atendimento
//                         </button> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default HeroCarousel;
