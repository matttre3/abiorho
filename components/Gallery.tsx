"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import classNames from "classnames";

type GalleryProps = { images: string[]; photoType: string };

export default function Gallery({ images, photoType }: GalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 4200 })]);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollNext(emblaApi.canScrollNext());
    setCanScrollPrev(emblaApi.canScrollPrev());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateScrollButtons();
    emblaApi.on("select", updateScrollButtons);
    emblaApi.on("reInit", updateScrollButtons);
    return () => {
      emblaApi.off("select", updateScrollButtons);
      emblaApi.off("reInit", updateScrollButtons);
    };
  }, [emblaApi, updateScrollButtons]);

  const gallerySizes = classNames({
    "flex-[0_0_50%] md:flex-[0_0_32.6%]": photoType === "horizontal",
    "flex-[0_0_78%] sm:flex-[0_0_46%] md:flex-[0_0_25%]": photoType === "vertical",
  });

  return (
    <div className="gallery-wrap">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 md:gap-5">
          {images.map((image, index) => (
            <div key={image} className={`${gallerySizes} overflow-hidden aspect-[3/4] bg-slate-100`}>
              <Image src={image} alt={`Momento ABIO Rho ${index + 1}`} width={600} height={800} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-7 top-1/2 flex -translate-y-1/2 gap-2 md:right-12">
        <button onClick={() => emblaApi?.scrollPrev()} disabled={!canScrollPrev} aria-label="Foto precedente" className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-xl text-[#1559c7] shadow-lg disabled:hidden">←</button>
        <button onClick={() => emblaApi?.scrollNext()} disabled={!canScrollNext} aria-label="Foto successiva" className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-xl text-[#1559c7] shadow-lg disabled:hidden">→</button>
      </div>
    </div>
  );
}
