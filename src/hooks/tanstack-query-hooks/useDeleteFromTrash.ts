import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../../config/tanstack-query/queryClient";
import { axiosInstance } from "../../config/axios";
import { endpoints } from "../../config/constants/endpoints";

async function deleteFromTrashHandler(id) {
  try {
    await axiosInstance({
      url: endpoints.deleteFromTrash.fn(id),
      method: endpoints.deleteFromTrash.method,
    });
  } catch (error) {
    console.log({ error });
  }
}

export function useDeleteFromTrash() {
  const { mutate } = useMutation({
    mutationFn: deleteFromTrashHandler,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fileList"] }),
  });

  return { deleteFromTrashFn: mutate };
}
