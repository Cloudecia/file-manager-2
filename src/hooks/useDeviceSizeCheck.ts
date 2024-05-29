import { useMediaQuery } from "@uidotdev/usehooks";

export default function useDeviceSizeCheck() {
  const isXs = useMediaQuery("only screen and (max-width : 639px)");
  const isSm = useMediaQuery("only screen and (min-width : 640px)");
  const isMd = useMediaQuery("only screen and (min-width : 768px)");
  const isLg = useMediaQuery("only screen and (min-width : 1024px)");
  const isXl = useMediaQuery("only screen and (min-width : 1280px)");
  const is2Xl = useMediaQuery("only screen and (min-width : 1536x)");

  return { isXs, isSm, isMd, isLg, isXl, is2Xl };
}
