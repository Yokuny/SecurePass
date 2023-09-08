import { inputProps } from "@/types";

export const inputValidation = ({ value, set, setErr, regex }: inputProps) => {
  const isValid = regex.test(value);
  setErr && setErr(!isValid);
  if (isValid) {
    set(value);
  } else {
    set("");
  }
  return isValid;
};
