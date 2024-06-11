import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { axiosInstance } from "../../config/axios";
import { endpoints } from "../../config/axios/constants";

function useDownloadFile() {
  return async (fileId) => {
    console.log({ fileId });

    try {
      let { data } = await axiosInstance({
        method: endpoints.downloadFiles.method,
        url: endpoints.downloadFiles.fn(fileId),
      });

      console.log({ data });

      window.location.href = data;
    } catch (error) {
      console.log({ error });
    }
  };
}

export default useDownloadFile;
