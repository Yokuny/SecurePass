import Cookie from "js-cookie";

const token = Cookie.get("auth_token");

export const bearerToken = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
