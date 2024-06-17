import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { axiosInstance } from "../../config/axios";
import { endpoints } from "../../config/constants/endpoints";

async function getFileInfo({ fileId }) {
  console.log({ fileId });

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
  const fileId = data?.fileId;

  const {
    data: fileInfo,
    isLoading,
    refetch,
  } = useQuery({
    enabled: false || !!fileId,
    queryKey: ["file", data.fileId],
    queryFn: () => getFileInfo(data),
  });

  return { fileInfo, isLoading, fileInfoFetcher: refetch };
}
