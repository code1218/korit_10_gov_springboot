import { create } from "zustand";

export const useBottomModalStore = create((set) => ({
    isOpen: false,
    children: null,

    setOpen: (state) => {
        set({ isOpen: state });
    },

    setChildren: (state) => {
        set({ children: state });
    }
}));