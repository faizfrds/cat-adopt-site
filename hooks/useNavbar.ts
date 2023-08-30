import { useEffect } from "react";
import { create } from "zustand";

interface NavbarStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
};

const useNavbar = create<NavbarStore>((set) => ({
    isOpen: true,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
    onToggle: () => set((state) => ({ isOpen: !state.isOpen})),

})
);

export default useNavbar;