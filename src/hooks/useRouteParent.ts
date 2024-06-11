import { useSearchParams } from "react-router-dom";

const useRouteParent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const routeVal = searchParams.get("route");

  let routeParent = null;

  if (routeVal) {
    let transient = routeVal.split("/");
    routeParent = transient[transient.length - 1];
    // console.log({ routeParent });
  } else {
    routeParent = "root";
  }

  return { routeParent };
};

export default useRouteParent;
