// import useMainSidebar from '../../../hooks/useMainSidebar';
// import useMeridiem from '../../../hooks/useMeridiem';

import { Form, FormControl, FormField, FormItem } from "../../reusables/ui/form";

import { z } from "zod";
import { Input } from "../../reusables/ui/input";
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "../../../utils/shadcn-helper";

export default function DashboardHeaderSearchbar() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="hidden sm:flex grow basis-1/2 lg:grow-0 space-y-6">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="🔍 Search for files, folders..."
                  {...field}
                  className={cn(
                    "h-[2.4rem] border-x-transparent border-t-transparent rounded-none shadow-none focus-visible:ring-0",
                    "border-b-[1px] border-solid p-0 w-full sm:w-2/3"
                  )}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
