"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion"; // Importa Framer Motion

type GalleryProps = {
  images: string[];
  photoType: string;
};

export default function Gallery({ images, photoType }: GalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = useCallback((image: string) => {
    setSelectedImage(image);
  }, []);

  const closeModal = () => {
    setSelectedImage(null);
  };

  const gallerySizes = classNames({
    "flex-[0_0_50%] md:flex-[0_0_32.6%]": photoType === "horizontal",
    "flex-[0_0_50%] md:flex-[0_0_25%]": photoType === "vertical",
  });

  return (
    <>
      <div className="container mt-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 md:gap-10">
            {images.map((image, index) => (
              <div key={index} className={gallerySizes}>
                <Image
                  src={image}
                  alt="prova"
                  width={600}
                  height={200}
                  onClick={() => openModal(image)} // Apre il modal al cliccare sull'immagine
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal per visualizzare l'immagine ingrandita */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={selectedImage}
                alt="Ingrandita"
                className="max-h-screen w-full"
                width={photoType == "horizontal" ? 500 : 400}
                height={photoType == "horizontal" ? 600 : 200}
              />
              <button
                className="absolute right-2 top-2 text-2xl text-white"
                onClick={closeModal}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
