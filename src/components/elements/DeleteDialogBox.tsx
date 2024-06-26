// import { useDeleteFile } from "../../pages/fileManager/Home/hooks/useDeleteFile";
import { useDeleteFromTrash } from "../../hooks/tanstack-query-hooks/useDeleteFromTrash";
import { useSendToTrash } from "../../hooks/tanstack-query-hooks/useSendToTrash";
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
} from "../reusables/ui/alert-dialog";

export default function DeleteDialogBox({ data, children }) {
  const { sendToTrashFn } = useSendToTrash();

  const { deleteFromTrashFn } = useDeleteFromTrash();

  const deleteFileHandler = async () => {
    await deleteFromTrashFn(data.fileId);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone. This will delete your files from trash.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteFileHandler}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
