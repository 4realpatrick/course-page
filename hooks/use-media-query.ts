import { useEffect, useState } from "react";

export default function useMediaQuery() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleMediaQuery = () => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleMediaQuery();
    window.addEventListener("resize", handleMediaQuery);
    return () => window.removeEventListener("resize", handleMediaQuery);
  }, []);
  return isMobile;
}
