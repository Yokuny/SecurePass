import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type listItem = {
  title: string;
  url: string;
  user: string;
  password: string;
};