import Container from "@/components/reusables/Container";
import SectionWrapper from "@/components/reusables/SectionWrapper";
import TrashBreadCrumbs from "../../../components/elements/BreadCrumbs/TrashBreadCrumbs";
import TrashDataTable from "../../../components/sections/FileManagerDataTable/TrashDataTable";
import { columns } from "../../../components/sections/FileManagerDataTable/trashed-view-table-config";
import MainSkeleton from "../../../components/sections/skeletons/MainSkeleton";
import { useTrashFileList } from "../../../hooks/tanstack-query-hooks/useTrashFilesList";

// createColumnHelper;

const Trash = () => {
  const { files, isLoading } = useTrashFileList();

  if (isLoading) return <MainSkeleton />;

  return (
    <>
      <Container className="my-4 sm:my-8">
        <SectionWrapper noDivider classes={"flex flex-row justify-between"}>
          <TrashBreadCrumbs />
        </SectionWrapper>

        <div className="flex gap-4">
          <SectionWrapper classes="grow py-2">
            {/* <DataTable /> */}
            <TrashDataTable columns={columns} data={files} />
          </SectionWrapper>
        </div>
        {/* <Test /> */}
      </Container>
    </>
  );
};

export default Trash;
