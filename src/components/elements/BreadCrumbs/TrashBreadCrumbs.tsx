import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../../reusables/ui/breadcrumb";

const TrashBreadCrumbs = (props) => {
  return (
    <div className="px-2 sm:0">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" asChild>
              <Link to="/" className="flex gap-1 items-center">
                <MdHome className="w-4 h-4 bottom-[2px] relative" />
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trash</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default TrashBreadCrumbs;
