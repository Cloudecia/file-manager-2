import { fileList } from "@/assets/data/dummyFileListSeed";
import Container from "@/components/reusables/Container";
import SectionWrapper from "@/components/reusables/SectionWrapper";
import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";

import GridListViewPicker from "../../../components/elements/GridListViewPicker";
import MainBreadCrumbs from "../../../components/elements/MainBreadCrumbs";
import DataTable from "../../../components/sections/FileManagerDataTable";
import { columns } from "../../../components/sections/FileManagerDataTable/table-config";
createColumnHelper;
const Home = () => {
  const [gridView, setGridView] = useState(false);

  return (
    <Container className="my-8">
      <SectionWrapper noDivider classes={"flex flex-row justify-between"}>
        <MainBreadCrumbs />
        {/* todo 240530 - grid view work left */}
        <GridListViewPicker {...{ gridView, setGridView }} />
      </SectionWrapper>

      <SectionWrapper>
        <DataTable columns={columns} data={fileList} view={gridView} />
      </SectionWrapper>
      <Test />
    </Container>
  );
};

export default Home;

// test box
function Test() {
  return <></>;
}
