import axios from "axios";

export const GETClientIP = async () => {
  const result = await axios.get<{ ip: string }>(
    "https://api.ipify.org/?format=json"
  );
  return result.data;
};
export const GETUserIpLocation = async (ip: string) => {
  const result = await axios.get<{ countryCode: string }>(
    `https://freeipapi.com/api/json/${ip}`
  );
  return result?.data;
};
