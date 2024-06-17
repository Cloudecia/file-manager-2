import { create } from "zustand";

interface IUseFileInfoBox {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

const useFileInfoBox = create<IUseFileInfoBox>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onToggle: () =>
    set((state) => {
      return { isOpen: !state.isOpen };
    }),
}));

export default useFileInfoBox;
