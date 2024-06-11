import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { axiosInstance } from "../../config/axios";
import { endpoints } from "../../config/constants/endpoints";

async function getFilesList() {
  try {
    const { data } = await axiosInstance({
      method: endpoints.getTrashedFiles.method,
      url: endpoints.getTrashedFiles.fn(),
    });

    console.log({ data });

    return data;
  } catch (error) {
    console.log({ error });
  }
}

export function useTrashFileList() {
  const { data: files, isLoading } = useQuery({
    queryKey: ["fileList"],
    queryFn: getFilesList,
  });

  return { files, isLoading };
}
