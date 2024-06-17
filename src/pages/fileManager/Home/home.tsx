import Container from "@/components/reusables/Container";
import SectionWrapper from "@/components/reusables/SectionWrapper";
import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import GridListViewPicker from "../../../components/elements/GridListViewPicker";
import MainBreadCrumbs from "../../../components/elements/BreadCrumbs/MainBreadCrumbs";
import FileInfo from "../../../components/sections/FileInfo";
import MainDataTable from "../../../components/sections/FileManagerDataTable/MainDataTable";
import { columns } from "../../../components/sections/FileManagerDataTable/main-view-table-config";
import { useFilesList } from "../../../hooks/tanstack-query-hooks/useFilesList";
import useRouteParent from "../../../hooks/useRouteParent";
import MainSkeleton from "../../../components/sections/skeletons/MainSkeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/reusables/ui/alert-dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import sleep from "../../../utils/sleep";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../../components/reusables/ui/form";
import { Button } from "../../../components/reusables/ui/button";
import { Input } from "../../../components/reusables/ui/input";
import useFileInfoBox from "../../../hooks/zustand-hooks/useFileInfoBox";
import { AnimatePresence, motion } from "framer-motion";

// createColumnHelper;

const Home = () => {
  const fileInfoBox = useFileInfoBox();

  const { routeParent } = useRouteParent();

  const [gridView, setGridView] = useState(false);

  const { files, isLoading } = useFilesList(routeParent);

  if (isLoading) return <MainSkeleton />;

  return (
    <>
      <Container className="my-4 sm:my-8">
        <SectionWrapper noDivider classes={"flex flex-row justify-between"}>
          <MainBreadCrumbs />
          {/* todo 240530 - grid view work left */}
          <GridListViewPicker {...{ gridView, setGridView }} />
        </SectionWrapper>

        <div className="flex gap-4">
          <SectionWrapper classes="grow py-2">
            <MainDataTable columns={columns} data={files} view={gridView} />
          </SectionWrapper>
          <AnimatePresence initial={false}>
            {fileInfoBox.isOpen && (
              <motion.div
                className="sm:basis-[320px] md:basis-[320px] xl:basis-[335px] bg-brand-25 rounded-lg py-5"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "320px" }}
                exit={{
                  opacity: 0,
                  width: 0,
                  transition: {
                    duration: 0.04,
                  },
                }}
              >
                <FileInfo />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* <Test /> */}
      </Container>
    </>
  );
};

export default Home;
const formSchema = z.object({
  name: z.string().min(2, {
    message: "New file name must be of atleast 2 characters and should be unique in a folder",
  }),
});
// test box
function Test() {
  const [dialogOpen, onDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // queryClient.invalidateQueries({
    //   queryKey: ["fileList"],
    // });
    // return;

    await sleep(4000);

    onDialogOpen(false);

    try {
      // await renameFileFn({ fileId: data.fileId, newName: values.name });
    } catch (error) {
      console.log({ error });
    } finally {
      // queryClient.invalidateQueries({
      //   queryKey: ["fileList"],
      // });

      console.log("is it running before completion");
    }
  }

  return (
    <>
      <AlertDialog onOpenChange={onDialogOpen} open={dialogOpen}>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-right">Name</FormLabel>
                    <FormControl>
                      <Input id="name" {...field} className="col-span-3" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                {/* <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild onClick={form.handleSubmit(onSubmit)}>
                      <Button type="submit" className="w-auto">
                        Submit
                      </Button>
                    </AlertDialogAction>
                  </AlertDialogFooter> */}
              </div>
            </form>
          </Form>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button onClick={form.handleSubmit(onSubmit)} className="w-auto">
                Submit
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
