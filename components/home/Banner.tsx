import { Image } from "@nextui-org/react";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ weight: ["400", "900"], subsets: ["latin"] });

const Banner = () => {
  return (
    <div className="flex md:h-80 h-40 w-full overflow-hidden items-center relative">
      <div className="bg-black bg-opacity-30 absolute inset-0 z-10 flex items-center justify-center">
        <div className={`${urbanist.className} ${"text-white text-center"}`}>
          <h1 className="md:text-4xl text-2xl font-bold">Já esqueceu uma senha?</h1>
          <p className="md:text-lg text-base md:tracking-wide md:mt-4 ">Quantas você tem pra lembrar</p>
        </div>
      </div>
      <Image className="z-0" radius="none" height={200} alt="banner" src="/banner.jpg" />
    </div>
  );
};
export default Banner;
