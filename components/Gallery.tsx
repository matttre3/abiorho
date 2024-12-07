"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import classNames from "classnames";

type GalleryProps = {
  images: string[];
  photoType: string;
};

export default function Gallery({ images, photoType }: GalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  // Funzione per aggiornare lo stato delle frecce
  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollNext(emblaApi.canScrollNext());
    setCanScrollPrev(emblaApi.canScrollPrev());
  }, [emblaApi]);

  // Inizializza e aggiorna lo stato delle frecce
  useEffect(() => {
    if (!emblaApi) return;
    updateScrollButtons();
    emblaApi.on("select", updateScrollButtons);
    emblaApi.on("reInit", updateScrollButtons);
  }, [emblaApi, updateScrollButtons]);

  const gallerySizes = classNames({
    "flex-[0_0_50%] md:flex-[0_0_32.6%] h-fit": photoType === "horizontal",
    "flex-[0_0_100%] md:flex-[0_0_25%] h-fit": photoType === "vertical",
  });

  return (
    <div className="container mt-10 relative h-fit">
      {/* Carousel */}
      <div className="overflow-hidden h-fit" ref={emblaRef}>
        <div className="flex gap-5 md:gap-10 h-fit">
          {images.map((image, index) => (
            <div key={index} className={gallerySizes}>
              <Image
                src={image}
                alt="prova"
                width={600}
                height={200}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pulsanti per le frecce */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canScrollPrev}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full ${
          !canScrollPrev ? "hidden" : "opacity-50"
        }`}
      >
        &lt;
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canScrollNext}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full ${
          !canScrollNext ? "hidden" : "opacity-50"
        }`}
      >
        &gt;
      </button>
    </div>
  );
}
