import React from "react";
import Container from "../../reusables/Container";
import SectionWrapper from "../../reusables/SectionWrapper";
import { Skeleton } from "../../reusables/ui/skeleton";

const MainSkeleton = () => {
  return (
    <Container className="my-4 sm:my-8">
      <SectionWrapper noDivider classes={"flex flex-row gap-2"}>
        <Skeleton className="w-[75px] h-[20px]" />
        <Skeleton className="w-[75px] h-[20px]" />
        <Skeleton className="w-[75px] h-[20px]" />
        <Skeleton className="w-[75px] h-[20px]" />
      </SectionWrapper>

      <div className="flex gap-4">
        <SectionWrapper classes="grow py-2">
          <div className="flex justify-between">
            <Skeleton className="w-[200px] h-[50px]" />
            <Skeleton className="w-[100px] h-[50px]" />
          </div>
          <div className="space-y-8">
            <div className="flex gap-8">
              <Skeleton className=" basis-1/6 h-[50px]" />
              <Skeleton className=" basis-1/2 h-[50px]" />
              <Skeleton className=" basis-1/3 h-[50px]" />
            </div>
            <div className="flex gap-8">
              <Skeleton className=" basis-1/6 h-[50px]" />
              <Skeleton className=" basis-1/2 h-[50px]" />
              <Skeleton className=" basis-1/3 h-[50px]" />
            </div>
            <div className="flex gap-8">
              <Skeleton className=" basis-1/6 h-[50px]" />
              <Skeleton className=" basis-1/2 h-[50px]" />
              <Skeleton className=" basis-1/3 h-[50px]" />
            </div>
            <div className="flex gap-8">
              <Skeleton className=" basis-1/6 h-[50px]" />
              <Skeleton className=" basis-1/2 h-[50px]" />
              <Skeleton className=" basis-1/3 h-[50px]" />
            </div>
            <div className="flex gap-8">
              <Skeleton className=" basis-1/6 h-[50px]" />
              <Skeleton className=" basis-1/2 h-[50px]" />
              <Skeleton className=" basis-1/3 h-[50px]" />
            </div>
            <div className="flex gap-8">
              <Skeleton className=" basis-1/6 h-[50px]" />
              <Skeleton className=" basis-1/2 h-[50px]" />
              <Skeleton className=" basis-1/3 h-[50px]" />
            </div>
            <div className="flex gap-8">
              <Skeleton className=" basis-1/6 h-[50px]" />
              <Skeleton className=" basis-1/2 h-[50px]" />
              <Skeleton className=" basis-1/3 h-[50px]" />
            </div>
            <div className="flex gap-8">
              <Skeleton className=" basis-1/6 h-[50px]" />
              <Skeleton className=" basis-1/2 h-[50px]" />
              <Skeleton className=" basis-1/3 h-[50px]" />
            </div>
          </div>
        </SectionWrapper>
      </div>
    </Container>
  );
};

export default MainSkeleton;
