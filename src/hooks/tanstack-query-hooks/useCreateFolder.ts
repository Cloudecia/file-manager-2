import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../config/tanstack-query/queryClient";
import axios from "axios";
import { axiosInstance } from "../../config/axios";
import { endpoints } from "../../config/constants/endpoints";
import sleep from "../../utils/sleep";

async function createFolderHandler(payload) {
  await axiosInstance({
    url: endpoints.createFolder.fn(),
    method: endpoints.createFolder.method,
    data: payload,
  });
}

export function useCreateFolder() {
  const { mutateAsync } = useMutation({
    mutationFn: ({ folderName, parent }) => createFolderHandler({ folderName, parent }),
    // onSuccess: () => queryClient.invalidateQueries({ queryKey: ["fileList"] }),
    onSuccess: async () => {
      await sleep(1500);
      queryClient.invalidateQueries({ queryKey: ["fileList"] });
    },
  });

  return { createFolderFn: mutateAsync };
}
