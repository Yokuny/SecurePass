export const titleRegex = /^[a-zA-Z0-9\sÀ-ú]{3,}$/;

export const passwordRegex = /^[a-zA-Z0-9]{3,}$/;

export const urlRegex =
  /^(https?:\/\/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)?)$/;

export const creditCardRegex =
  /^(?:\s*4[0-9]{12}(?:[0-9]{3})?|\s*5[1-5][0-9]{14}|\s*6(?:011|5[0-9][0-9])\s*[0-9]{12}|\s*3[47][0-9]{13}|\s*3(?:0[0-5]|[68][0-9])\s*[0-9]{11}|\s*(?:2131|1800|35\d{3})\s*[0-9]{11})$/;

export const cvvRegex = /^[0-9]{3}$/;

export const dateRegex = /^(202[3-9]|20[3-9]\d)-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
