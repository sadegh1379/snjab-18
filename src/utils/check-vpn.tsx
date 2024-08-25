import { GETClientIP, GETUserIpLocation } from "api/vpn";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const CheckVpn = () => {
  useEffect(() => {
    GETClientIP().then((res) => {
      GETUserIpLocation(res.ip).then((res) => {
        if (res.countryCode !== "IR") {
          toast.warning("از خاموش بودن فیلتر شکن مطمعن شوید!");
        }
      });
    });
  }, []);

  return null;
};
