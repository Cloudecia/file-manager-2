export const baseURL = "http://localhost:1337/api/v1/file-manager";
// export const baseImageUrl = `${baseUrl}/images`;

export const endpoints = {
  listAllFilesInAFolder: {
    fn: (folderId: string) => `/all/${folderId}`,
    method: "get",
  },
  createFolder: {
    fn: () => "/folder/new",
    method: "post",
  },
  getFileInfo: {
    fn: (fileId: string) => `/file/${fileId}`,
    method: "get",
  },
  renameFile: {
    fn: (fileId: string) => `/file/${fileId}/rename`,
    method: "post",
  },
  sendToTrash: {
    fn: (fileId: string) => `/file/${fileId}/send-to-trash`,
    method: "put",
  },
  deleteFromTrash: {
    fn: (fileId: string) => `/file/${fileId}/delete-from-trash`,
    method: "delete",
  },
  restoreFromTrash: {
    fn: (fileId: string) => `/file/${fileId}/restore-from-trash`,
    method: "put",
  },
  getTrashedFiles: {
    fn: () => `/files/trashed`,
    method: "get",
  },
  removeFromTrash: {
    fn: (fileId: string) => `/file/${fileId}`,
  },
  downloadFiles: {
    fn: (fileId: string) => `/file/${fileId}/download`,
    method: "get",
  },
  copyFiles: {
    fn: () => `/file/copy`,
    method: "post",
  },
  moveFiles: {
    fn: () => `/file/move`,
    method: "post",
  },
};
