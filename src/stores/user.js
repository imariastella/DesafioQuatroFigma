import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    email: "",
    password: "",
  },
  updateUser(userData) {
    set({
      user: userData,
    });
  },
}));
export { useUserStore };
