import { fileList } from "@/assets/data/dummyFileListSeed";
import Container from "@/components/reusables/Container";
import SectionWrapper from "@/components/reusables/SectionWrapper";
import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import FileInfo from "../../../components/sections/FileInfo";
import GridListViewPicker from "../../../components/elements/GridListViewPicker";
import MainBreadCrumbs from "../../../components/elements/MainBreadCrumbs";
import DataTable from "../../../components/sections/FileManagerDataTable";
import { columns } from "../../../components/sections/FileManagerDataTable/table-config";
createColumnHelper;
const Home = () => {
  const [gridView, setGridView] = useState(false);

  return (
    <Container className="my-4 sm:my-8">
      <SectionWrapper noDivider classes={"flex flex-row justify-between"}>
        <MainBreadCrumbs />
        {/* todo 240530 - grid view work left */}
        <GridListViewPicker {...{ gridView, setGridView }} />
      </SectionWrapper>

      <div className="flex gap-4">
        <SectionWrapper classes="grow py-2">
          <DataTable columns={columns} data={fileList} view={gridView} />
        </SectionWrapper>
        <FileInfo className="sm:basis-[320px] md:basis-[320px] xl:basis-[335px] bg-brand-25 rounded-lg py-5" />
      </div>
      <Test />
    </Container>
  );
};

export default Home;

// test box
function Test() {
  return <></>;
}
