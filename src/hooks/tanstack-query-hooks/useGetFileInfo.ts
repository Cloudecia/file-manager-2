import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { axiosInstance } from "../../config/axios";
import { endpoints } from "../../config/axios/constants";

async function getFileInfo({ fileId }) {
  try {
    const { data } = await axiosInstance({
      method: endpoints.getFileInfo.method,
      url: endpoints.getFileInfo.fn(fileId),
    });
    console.log({ data });
    return data;
  } catch (error) {
    console.log({ error });
  }
}

export function useGetFileInfo(data = { fileId: null }) {
  // console.log({ data });

  const {
    data: fileInfo,
    isLoading,
    refetch,
  } = useQuery({
    enabled: false,
    queryKey: ["file", data.fileId],
    queryFn: () => getFileInfo(data),
  });

  return { fileInfo, isLoading, fileInfoFetcher: refetch };
}
