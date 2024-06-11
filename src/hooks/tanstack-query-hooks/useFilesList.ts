import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { axiosInstance } from "../../config/axios";
import { endpoints } from "../../config/axios/constants";

async function getFilesList(folderId) {
  // console.log({ folderId });

  try {
    const { data } = await axiosInstance({
      method: endpoints.listAllFilesInAFolder.method,
      url: endpoints.listAllFilesInAFolder.fn(folderId),
    });

    console.log({ data });

    return data;
  } catch (error) {
    console.log({ error });
  }
}

export function useFilesList(folderId) {
  let parent = folderId ? folderId : "root";

  // console.log({ parent });

  const { data: files, isLoading } = useQuery({
    queryKey: ["fileList", parent],
    queryFn: () => getFilesList(parent),
  });

  return { files, isLoading };
}
