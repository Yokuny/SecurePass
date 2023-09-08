import { Divider, ModalBody, ModalHeader, Code } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Snippet } from "@nextui-org/snippet";
import { title } from "@/components/primitives";
import { listItem } from "@/types";

type ItemProps = {
  item: listItem;
};

const ItemModal = ({ item }: ItemProps) => {
  function formatExpirationDate(date: string) {
    const data = new Date(date);
    const mes = String(data.getUTCMonth() + 1).padStart(2, "0");
    const ano = data.getUTCFullYear();
    return `${mes}/${ano}`;
  }
  return (
    <>
      <ModalHeader className="flex flex-col gap-1">
        <h1 className={`${title({ color: "blue", size: "sm" })} py-1`}>{item.title}</h1>
      </ModalHeader>
      <Divider />
      <ModalBody className="py-6 flex flex-wrap">
        {item.url && (
          <>
            <h6 className={title({ color: "violet", size: "small" })}>URL</h6>
            <p>
              <Snippet hideSymbol>{item.url}</Snippet>
            </p>
          </>
        )}

        {item.username && (
          <>
            <h6 className={title({ color: "violet", size: "small" })}>USER</h6>
            <p>
              <Snippet hideSymbol>{item.username}</Snippet>
            </p>
          </>
        )}

        {item.name && (
          <div className="flex flex-col gap-2">
            <h6 className={title({ color: "violet", size: "small" })}>NOME</h6>
            <p>
              <Snippet hideSymbol>{item.name}</Snippet>
            </p>
          </div>
        )}

        {item.number && (
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-col gap-2">
              <h6 className={title({ color: "violet", size: "small" })}>NÚMERO</h6>
              <p>
                <Snippet hideSymbol>{item.number}</Snippet>
              </p>
            </div>
            {item.cvv && (
              <div className="flex flex-col gap-2">
                <h6 className={title({ color: "violet", size: "small" })}>CVV</h6>
                <p>
                  <Snippet hideSymbol hideCopyButton className="h-11">
                    {item.cvv}
                  </Snippet>
                </p>
              </div>
            )}
          </div>
        )}

        {item.expirationDate && (
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-2">
              <h6 className={title({ color: "violet", size: "small" })}>TIPO</h6>
              <p>
                <Snippet hideSymbol hideCopyButton className="h-11">
                  {item.type}
                </Snippet>
              </p>
            </div>
            {item.type && (
              <div className="flex flex-col gap-2">
                <h6 className={title({ color: "violet", size: "small" })}>EXPIRA EM</h6>
                <p>
                  <Snippet hideSymbol>{formatExpirationDate(item.expirationDate)}</Snippet>
                </p>
              </div>
            )}
          </div>
        )}

        {item.password && (
          <>
            <h6 className={title({ color: "violet", size: "small" })}>SENHA</h6>
            <p>
              <Snippet hideSymbol>{item.password}</Snippet>
            </p>
          </>
        )}

        {item.text && (
          <>
            <h6 className={title({ color: "violet", size: "small" })}>TEXTO</h6>
            <Code className="whitespace-normal p-3">
              <ScrollShadow hideScrollBar size={100} className="md:h-[380px] h-[200px]">
                {item.text}
              </ScrollShadow>
            </Code>
          </>
        )}
      </ModalBody>
      <Divider />
    </>
  );
};
export default ItemModal;
