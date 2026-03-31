import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  email: string;
  avatar: string;
  isGoogle: boolean;
}

interface AuthState {
  user: User | null;
  login: (email: string) => void;
  loginWithGoogle: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      login: (email: string) => {
        // Mock authentication for demonstration
        set({
          user: {
            name: email.split("@")[0], // Extract name from email
            email: email,
            avatar: `https://ui-avatars.com/api/?name=${email.split("@")[0]}&background=0D0404&color=B8860B`,
            isGoogle: false,
          },
        });
      },

      loginWithGoogle: () => {
        // Mock Google authentication
        set({
          user: {
            name: "Priya Sharma",
            email: "priya.sharma@gmail.com",
            avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=0D0404&color=B8860B",
            isGoogle: true,
          },
        });
      },

      logout: () => set({ user: null }),
    }),
    {
      name: "ghunghat-auth-storage",
    }
  )
);
