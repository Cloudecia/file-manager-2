import { create } from "zustand";

interface IUseFileManagerSidebar {
  isCollapsed: boolean;
  onOpen: () => void;
  onCollapse: () => void;
  onToggle: () => void;
}

const useFileManagerSidebar = create<IUseFileManagerSidebar>((set) => ({
  isCollapsed: true,
  onOpen: () => set({ isCollapsed: false }),
  onCollapse: () => set({ isCollapsed: true }),
  onToggle: () =>
    set((state) => {
      return { isCollapsed: !state.isCollapsed };
    }),
}));

export default useFileManagerSidebar;
