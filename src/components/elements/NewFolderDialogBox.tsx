import { MdOutlineCreateNewFolder } from "react-icons/md";
import {
  Dialog,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
} from "../reusables/ui/dialog";
import { DropdownMenuItem } from "../reusables/ui/dropdown-menu";
import { Label } from "../reusables/ui/label";
import { Input } from "../reusables/ui/input";
import { Button } from "../reusables/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../reusables/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateFolder } from "../../hooks/tanstack-query-hooks/useCreateFolder";
import useRouteParent from "../../hooks/useRouteParent";
import { useState } from "react";

const formSchema = z.object({
  folderName: z.string().min(2, {
    message: "Folder Name must be at least 2 characters.",
  }),
});

export default function NewFolderDialogBox() {
  const { routeParent } = useRouteParent();

  const { createFolderFn } = useCreateFolder();

  const [openDialog, onOpenDialog] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      folderName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);

    await createFolderFn({ folderName: values.folderName, parent: routeParent });

    onOpenDialog(false);
  }

  return (
    <Dialog onOpenChange={onOpenDialog} open={openDialog}>
      <DialogTrigger asChild>
        <DropdownMenuItem className="flex gap-2 items-center cursor-pointer" onSelect={(e) => e.preventDefault()}>
          <MdOutlineCreateNewFolder className="relative bottom-[2px]" /> New Folder
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new folder</DialogTitle>
          <DialogDescription>Enter the name of the folder, that you want to create.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
            <FormField
              control={form.control}
              name="folderName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right">Name</FormLabel>
                  <FormControl>
                    <Input id="name" placeholder="Enter folder name" {...field} className="col-span-3" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" className="w-auto">
                Create
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
