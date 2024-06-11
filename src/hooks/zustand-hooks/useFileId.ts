import { create } from "zustand";

interface IUseFileId {
  fileId: string;
  onAddId: (val: string) => void;
}

const useFileId = create<IUseFileId>((set) => ({
  fileId: "",
  onAddId: (val) => set({ fileId: val }),
}));

export default useFileId;
