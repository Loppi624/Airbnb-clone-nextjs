import { create } from "zustand";

interface ResgisterModelStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModel = create<ResgisterModelStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen : true }),
  onClose: () => set({ isOpen : false })
}))

export default useRegisterModel;