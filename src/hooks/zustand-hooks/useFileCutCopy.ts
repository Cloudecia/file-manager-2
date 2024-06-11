import { create } from "zustand";

interface IFileCutCopy {
  op?: "cut" | "copy";
  fileId?: string;
  parentId?: string;
  onAdd: (op: string, fileId: string, parentId: string) => void;
}

// const useFileCutCopy = create<IFileCutCopy>((set) => ({
//   op: null,
//   fileId: null,
//   parentId: null,
//   onAdd(op, fileId, parentId) => set({
//     op, fileId, parentId
//   })
// }));

const useFileCutCopy = create<IFileCutCopy>((set) => ({
  op: undefined,
  fileId: undefined,
  parentId: undefined,
  onAdd: (op, fileId, parentId) => set({ op, fileId, parentId }),
}));

export default useFileCutCopy;
