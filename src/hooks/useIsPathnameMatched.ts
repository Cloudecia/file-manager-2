import { useLocation } from "react-router-dom";

const useIsPathnameMatched = (prop) => {
  const { pathname } = useLocation();

  if (pathname == prop) return true;
  else return false;
};

export default useIsPathnameMatched;
