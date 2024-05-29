import { useNavigate } from "react-router-dom";
// import useMainSidebar from '../../../hooks/useMainSidebar';
import { Button } from "@/components/reusables/ui/button";
import { FaRegQuestionCircle } from "react-icons/fa";
// import useMeridiem from '../../../hooks/useMeridiem';
import { RiLogoutBoxLine } from "react-icons/ri";

import { GoLinkExternal } from "react-icons/go";

export default function DashboardHeaderLinks() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center">
      <Button variant="ghost" className="flex items-center justify-center gap-1" onClick={() => navigate("/")}>
        <GoLinkExternal className="relative bottom-[2px]" /> <span className="hidden">Home</span>
      </Button>

      <Button variant="ghost" className="flex items-center justify-center gap-1">
        <FaRegQuestionCircle className="relative bottom-[2px]" /> <span className="hidden">Docs</span>
      </Button>
      <Button variant="ghost" className="flex items-center justify-center gap-1">
        <RiLogoutBoxLine className="relative bottom-[2px]" /> <span className="hidden">Sign Out</span>
      </Button>
    </div>
  );
}
