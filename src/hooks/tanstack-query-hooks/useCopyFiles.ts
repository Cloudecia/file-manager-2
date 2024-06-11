import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../../config/tanstack-query/queryClient";
import { axiosInstance } from "../../config/axios";
import { endpoints } from "../../config/axios/constants";

interface ICopyFileHandler {
  fileIds: string[];
  parentId: string;
}

async function copyFileHandler({ fileIds, parentId }: ICopyFileHandler) {
  try {
    await axiosInstance({
      method: endpoints.copyFiles.method,
      url: endpoints.copyFiles.fn(),
      data: {
        fileIds,
        parentId,
      },
    });
  } catch (error) {
    console.log({ error });
  }
}

export function useCopyFile() {
  const { mutate } = useMutation({
    mutationFn: copyFileHandler,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fileList"] }),
  });

  return { copyFileFn: mutate };
}
