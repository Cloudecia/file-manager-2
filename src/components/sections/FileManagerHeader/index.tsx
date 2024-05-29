// import useMainSidebar from '../../../hooks/useMainSidebar';
// import useMeridiem from '../../../hooks/useMeridiem';
import Container from "../../reusables/Container";

import { cn } from "../../../utils/shadcn-helper";
import DashboardHeaderLinks from "./DashboardHeaderLinks";
import DashboardHeaderSearchbar from "./DashboardHeaderSearchbar";

function Navbar({ className }) {
  return (
    <>
      <Container
        className={cn("border-b-[1px] border-brand-50  py-1 h-[4.5rem] sticky top-0 bg-white z-10 flex justify-between items-center w-full", className)}
      >
        <DashboardHeaderSearchbar />
        <DashboardHeaderLinks />
      </Container>
    </>
  );
}

export default Navbar;
