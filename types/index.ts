import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type listItem = {
  id: string;
  title: string;

  url?: string;
  username?: string;
  password?: string;

  type?: string;
  isVirtual?: boolean;
  expirationDate?: string;
  cvv?: string;
  name?: string;
  number?: string;
  text?: string;
};

export type RoutesType = {
  label: string;
  href: string;
};

export type Props = {
  children: React.ReactNode;
};

export type ModalProp = {
  onClose: () => void;
};

export type inputProps = {
  value: string;
  set: (value: string) => void;
  setErr?: (error: boolean) => void;
  regex: RegExp;
};

export type postCardProps = {
  title: string;
  number: string;
  name: string;
  cvv: string;
  expirationDate: string;
  password: string;
  isVirtual: boolean;
  type: "CREDIT" | "DEBT" | "BOTH";
};

export type DeleteProps = {
  onClose: () => void;
  itemReference: string | undefined;
  requestString: string;
};

export type ItemProps = {
  item: listItem;
  id: number;
  requestString: string;
};