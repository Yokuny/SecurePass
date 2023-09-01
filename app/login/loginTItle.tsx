import { title, subtitle } from "@/components/primitives";

const Title = () => {
  return (
    <div className="inline-block md:max-w-sm max-w-xs text-center justify-center">
      <h1 className={title()}>
        Gerencie suas senhas com <span className={title({ color: "violet" })}>segurança.</span>
      </h1>
      <h2 className={subtitle({ class: "mt-4" })}>Tenha acesso à sua carteira digital</h2>
    </div>
  );
};

export default Title;
