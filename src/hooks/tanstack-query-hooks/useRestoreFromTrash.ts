import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../../config/tanstack-query/queryClient";
import { axiosInstance } from "../../config/axios";
import { endpoints } from "../../config/constants/endpoints";

async function restoreFromTrashHandler(id) {
  try {
    await axiosInstance({
      url: endpoints.restoreFromTrash.fn(id),
      method: endpoints.restoreFromTrash.method,
    });
  } catch (error) {
    console.log({ error });
  }
}

export function useRestoreFromTrash() {
  const { mutate } = useMutation({
    mutationFn: restoreFromTrashHandler,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fileList"] }),
  });

  return { restoreFromTrashFn: mutate };
}
