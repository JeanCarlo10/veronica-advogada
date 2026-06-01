import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import HeroImage from "@/assets/Hero02.png";

type Slide = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  positionMobile?: string;
  positionDesktop?: string;
};

const slides: Slide[] = [
  {
    src: HeroImage,
    alt: "Hero 02",
    title: "Advocacia previdenciária com estratégia, clareza e segurança",
    subtitle:
      "Experiência, confiança e tecnologia para cuidar do seu veículo com a qualidade que você merece.",
    positionMobile: "64% 50%",
    positionDesktop: "50% 50%",
  },
];

const HeroCarousel = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-screen">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
          slidesPerView={1}
          effect="fade"
          loop
          navigation
          observer={false}
          observeParents={false}
          watchSlidesProgress={false}
          resizeObserver
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {slides.map((item, i) => {
            return (
              <SwiperSlide key={i} className="w-full h-full">
                <div className="relative w-full h-full">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-[var(--position-mobile)] sm:object-[var(--position-desktop)]"
                    style={
                      {
                        ["--position-mobile" as any]:
                          item.positionMobile ?? "50% 50%",
                        ["--position-desktop" as any]:
                          item.positionDesktop ?? "50% 50%",
                      } as React.CSSProperties
                    }
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority="high"
                  />

                  {/* <div className="absolute inset-0 bg-black/10" /> */}

                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-8">
                      <div className="max-w-xl text-center md:text-left">
                        {/* TITLE */}
                        <h1 className="text-(--primary) font-extrabold text-3xl sm:text-4xl lg:text-6xl whitespace-pre-line">
                          {item.title}
                        </h1>

                        {/* SUBTITLE */}
                        <p className="mt-8 text-(--muted-foreground) text-sm sm:text-base lg:text-l font-semibold">
                          {item.subtitle}
                        </p>

                        <button
                          onClick={() => {
                            document
                              .getElementById("contact")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="mt-8 inline-flex items-center border-(--primary) cursor-pointer rounded-lg transition px-6 py-3 font-semibold hover:scale-105"
                        >
                          Agendar Atendimento
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroCarousel;
