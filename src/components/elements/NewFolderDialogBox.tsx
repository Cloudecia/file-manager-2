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

export default function NewFolderDialogBox() {
  return (
    <Dialog>
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
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
