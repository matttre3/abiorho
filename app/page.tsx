import Gallery from "@/components/Gallery";
import Image from "next/image";
export default function Home() {
  const images = [
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/8.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/9.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
  ];

  return (
    <div className="container mx-auto max-w-[500px] pl-10 pr-10 pt-10 pb-10">
      <h1 className="font-agrandirBold font-extrabold text-4xl md:text-6xl text-yellowAbio">
        DIVENTA <br /> VOLONTARIO
      </h1>

      <p className="font-agrandir text-xl md:text-2xl mt-4 text-white">
        Cherchiamo persone che vogliano mettersi in gioco e hanno il desiderio
        di portare un sorriso ai{" "}
        <span className="text-yellowAbio font-extrabold">bambini</span>{" "}
        ospedalizzati dei{" "}
        <span className="text-yellowAbio font-extrabold">
          reparti di pediatria
        </span>{" "}
        di Garbagnate Milanese e Rho
      </p>

      <h2 className="font-agrandirBold font-extrabold text-2xl text-white mt-10">
        PER DIVENTARE VOLONTARIO:
      </h2>
      <ul className="">
        <li className=" before:content-['⭐'] before:mr-2 font-agrandir text-xl font-medium text-white mt-4">
          Età compresa tra i 18 e i 69
        </li>
        <li className="before:content-['⭐'] before:mr-2 font-agrandir text-xl font-medium text-white mt-2 ">
          Frequentare il corso di formazione da 5 incontri
        </li>
      </ul>

      <hr className="mt-6 mb-6" />

      <p className="text-white text-2xl mt-4 font-extrabold text-center">
        Per maggiori informazioni: <br />
        ⬇️⬇️⬇️⬇️
      </p>

      <div className="flex items-center justify-center flex-col mt-2">
        <a
          className="flex items-center justify-center flex-col gap-2"
          href="tel:+393338257579"
        >
          <button className="bg-yellowAbio px-4 py-2 rounded mt-5 font-agrandirBold font-extrabold text-blueAbio flex items-center justify-center gap-4">
            CHIAMA ORA
            <img src="/phone.png" alt="" />
          </button>
          <p className="font-agrandir text-white opacity-40">+39 3338257579</p>
        </a>
        <a
          className="flex items-center justify-center flex-col gap-2"
          href="mailto:formazione@abiorho.org"
        >
          <button className="bg-yellowAbio px-4 py-2 rounded mt-5 font-agrandirBold font-extrabold text-blueAbio flex items-center justify-center gap-4">
            SCRIVI UNA MAIL
            <img src="/envelope.png" alt="" />
          </button>
          <p className="font-agrandir text-white opacity-40">
            formazione@abiorho.org
          </p>
        </a>
      </div>
      <div className="flex items-center justify-center gap-10 mt-10">
        <a
          href="https://www.facebook.com/ABIORHO/?locale=it_IT
        "
        >
          <Image
            width={50}
            height={50}
            src="/images/facebook-brands-solid.svg"
            alt="facebook"
          ></Image>
        </a>
        <a
          href="https://www.instagram.com/abio_rho/
        "
        >
          <Image
            width={50}
            height={50}
            src="/images/instagram-brands-solid.svg"
            alt="instagram"
          ></Image>
        </a>
      </div>

      <Gallery photoType="vertical" images={images}></Gallery>
    </div>
  );
}
