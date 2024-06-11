import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../../config/tanstack-query/queryClient";
import { axiosInstance } from "../../config/axios";
import { endpoints } from "../../config/axios/constants";

async function sendToTrashHandler(id) {
  try {
    await axiosInstance({
      url: endpoints.sendToTrash.fn(id),
      method: endpoints.sendToTrash.method,
    });
  } catch (error) {
    console.log({ error });
  }
}

export function useSendToTrash() {
  const { mutate } = useMutation({
    mutationFn: sendToTrashHandler,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fileList"] }),
  });

  return { sendToTrashFn: mutate };
}
