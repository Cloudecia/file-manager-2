import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios";
import { endpoints } from "../../config/axios/constants";
import { queryClient } from "../../config/tanstack-query/queryClient";

interface IMoveFileHandler {
  fileIds: string[];
  destinationParentId: string;
}

async function moveFileHandler({ fileIds, destinationParentId }: IMoveFileHandler) {
  try {
    await axiosInstance({
      method: endpoints.moveFiles.method,
      url: endpoints.moveFiles.fn(),
      data: {
        fileIds,
        destinationParentId,
      },
    });
  } catch (error) {
    console.log({ error });
  }
}

export function useMoveFile() {
  const { mutate } = useMutation({
    mutationFn: moveFileHandler,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fileList"] }),
  });

  return { moveFileFn: mutate };
}
