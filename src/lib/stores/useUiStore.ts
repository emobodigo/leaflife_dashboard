import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IUiState {
  isMaximizedSidebar: boolean;
  toggleMaximizedSidebar: () => void;
}

const useUIStore = create<IUiState>()(
  devtools((set) => ({
    isMaximizedSidebar: false,
    toggleMaximizedSidebar: () =>
      set((state) => ({ isMaximizedSidebar: !state.isMaximizedSidebar })),
  }))
);

export default useUIStore;
