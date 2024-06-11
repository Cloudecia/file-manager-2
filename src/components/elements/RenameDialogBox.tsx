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
} from "@/components/reusables/ui/dialog";
import { Label } from "../reusables/ui/label";
import { Input } from "../reusables/ui/input";
import { Button } from "../reusables/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../reusables/ui/form";
import { useRenameFile } from "../../hooks/tanstack-query-hooks/useRenameFile";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "New file name must be of atleast 2 characters and should be unique in a folder",
  }),
});

export default function RenameDialogBox({ data, children }) {
  // const queryClient = useQueryClient();

  const [dialogOpen, onDialogOpen] = useState(false);

  const { renameFileFn } = useRenameFile();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);

    await renameFileFn({ fileId: data.fileId, newName: values.name });

    // queryClient.invalidateQueries({ queryKey: ["fileList"] });

    onDialogOpen(false);
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={onDialogOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Rename</DialogTitle>
          <DialogDescription>Rename your file/folder</DialogDescription>
        </DialogHeader>
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
              <Button type="submit" className="w-auto">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
