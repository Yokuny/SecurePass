import { title, subtitle } from "@/components/primitives";

const Title = () => {
  return (
    <div className="inline-block max-w-sm text-center justify-center">
      <h1 className={title()}>Gerencie suas senhas com </h1>
      <h1 className={title({ color: "violet" })}>segurança.</h1>
      <h2 className={subtitle({ class: "mt-4" })}>Tenha acesso à sua carteira digital</h2>
    </div>
  );
};

export default Title;
