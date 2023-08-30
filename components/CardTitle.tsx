"use client";
import { CardHeader, Divider, Image, Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CardTitle = () => {
  const [title, setTitle] = useState("Minhas senhas");
  const [tooltip, setTooltip] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (path === "/") {
      setTitle("Minhas senhas");
    } else if (path === "/credentials") {
      setTitle("Credenciais");
    } else if (path === "/notes") {
      setTitle("Notas");
    } else if (path === "/cards") {
      setTitle("Cartões");
    } else if (path === "/wifi") {
      setTitle("Senhas de Wi-Fi");
    } else {
      setTitle("Minhas senhas");
    }
  }, [path]);

  return (
    <>
      <CardHeader className="flex gap-3">
        <Tooltip
          isOpen={tooltip}
          onOpenChange={(open) => setTooltip(open)}
          content={
            <div className="px-1 py-2">
              <div className="text-small font-bold">Área segura</div>
              <div className="text-tiny">Só você tem acesso a esse campo.</div>
            </div>
          }>
          <Image
            height={40}
            width={40}
            src="/safe.png"
            alt="shield icon"
            radius="sm"
            className="bg-white radi"
          />
        </Tooltip>
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">Senhas seguras</p>
        </div>
      </CardHeader>
      <Divider />
    </>
  );
};
export default CardTitle;
