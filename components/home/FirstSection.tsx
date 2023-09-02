import { title, subtitle } from "@/components/primitives";
import { Image } from "@nextui-org/react";

const FirstSection = () => {
  return (
    <h1 className={title()}>
      <section className="flex md:flex-row flex-col items-center justify-center md:gap-4 py-0 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ size: "md" })}>
            Simplifique o <span className={title({ color: "violet" })}>Gerenciamento de Senhas</span> com
            segurança total
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Esqueça suas múltiplas senhas, proteja todas elas com apenas um acesso!
          </h2>
        </div>
        <div>
          <Image
            className="z-0 md:max-w-lg sm:max-w-sm rotate-[-8deg] hover:rotate-[-7deg]"
            height={200}
            alt="banner"
            src="/mockup-white.png"
          />
        </div>
      </section>
    </h1>
  );
};
export default FirstSection;
