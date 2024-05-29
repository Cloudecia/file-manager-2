import { useNavigate } from "react-router-dom";
// import useMainSidebar from '../../../hooks/useMainSidebar';
import { Button } from "@/components/reusables/ui/button";
import { FaRegQuestionCircle } from "react-icons/fa";
// import useMeridiem from '../../../hooks/useMeridiem';
import { RiLogoutBoxLine } from "react-icons/ri";
import Container from "../reusables/Container";

import { GoLinkExternal } from "react-icons/go";
import { Form, FormControl, FormField, FormItem } from "../reusables/ui/form";

import { z } from "zod";
import { Input } from "../reusables/ui/input";
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "../../utils/shadcn-helper";

function Navbar({ className }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  const navigate = useNavigate();

  function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <>
      <Container
        className={cn("border-b-[1px] border-brand-50  py-1 h-[4.5rem] sticky top-0 bg-white z-10 flex justify-between items-center w-full", className)}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="hidden sm:flex w-1/2 space-y-6">
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
                        "border-b-[1px] border-solid p-0 w-1/2"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>

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
      </Container>
    </>
  );
}

export default Navbar;
