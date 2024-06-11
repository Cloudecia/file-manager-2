import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../config/tanstack-query/queryClient";
import axios from "axios";
import { axiosInstance } from "../../config/axios";
import { endpoints } from "../../config/axios/constants";
import sleep from "../../utils/sleep";

async function renameFileHandler({ fileId, newName }) {
  await axiosInstance({
    url: endpoints.renameFile.fn(fileId),
    method: endpoints.renameFile.method,
    data: {
      newName,
    },
  });
}

export function useRenameFile() {
  const { mutate, mutateAsync } = useMutation({
    mutationFn: renameFileHandler,
    onSuccess: async () => {
      await sleep(1500);
      queryClient.invalidateQueries({ queryKey: ["fileList"] });
    },
    // onError: () => alert("jdsaf"),
  });

  return { renameFileFn: mutateAsync };
}
