import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { axiosInstance } from "../../config/axios";
import { endpoints } from "../../config/constants/endpoints";

async function getFilesList(parentFolderId) {
  // console.log({ parentFolderId });

  try {
    const { data } = await axiosInstance({
      method: endpoints.listAllFilesInAFolder.method,
      url: endpoints.listAllFilesInAFolder.fn(parentFolderId),
    });

    console.log({ data });

    return data;
  } catch (error) {
    console.log({ error });
  }
}

export function useFilesList(parentFolderId) {
  let parent = parentFolderId ? parentFolderId : "root";

  // console.log({ parent });

  const { data: files, isLoading } = useQuery({
    queryKey: ["fileList", parent],
    queryFn: () => getFilesList(parent),
  });

  return { files, isLoading };
}
