import React from "react";
import { CiFileOn } from "react-icons/ci";
import { GoFileDirectory } from "react-icons/go";
import { VscFileBinary } from "react-icons/vsc";
import fileTypes from "../../config/constants/fileTypes";

interface IFileIcon {
  className: string | undefined;
  mimeType: string | undefined;
}

const FileIcon = ({ className, mimeType }: IFileIcon) => {
  return (
    <>
      {mimeType == fileTypes.folder ? (
        <GoFileDirectory className={className} />
      ) : mimeType == fileTypes.text ? (
        <CiFileOn className={className} />
      ) : (
        <VscFileBinary className={className} />
      )}
    </>
  );
};

export default FileIcon;
